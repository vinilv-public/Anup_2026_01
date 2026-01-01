import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { DOCTOR_NAME, HOSPITAL, SERVICES } from '../constants';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: `Hello! I am ${DOCTOR_NAME}'s virtual assistant. I can help you with information about procedures, clinic timings, and general neurosurgery queries. How can I assist you today?` }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputText.trim()) return;
    if (!process.env.API_KEY) {
        setMessages(prev => [...prev, { role: 'user', text: inputText }, { role: 'model', text: 'Error: API Key not configured.' }]);
        setInputText('');
        return;
    }

    const userMessage = inputText;
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInputText('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const systemInstruction = `You are a helpful, professional medical assistant for ${DOCTOR_NAME}, a Neurosurgeon at ${HOSPITAL}.
      
      Services: ${SERVICES.map(s => s.title).join(', ')}.
      
      Guidelines:
      1. Be polite, empathetic, and professional.
      2. Keep answers concise (under 100 words).
      3. For medical advice, ALWAYS state that you are an AI and they should consult the doctor directly.
      4. Use the provided context about the doctor.
      5. If asked about appointments, direct them to call +91 20 1234 5678.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
            ...messages.filter(m => m.role !== 'model' || messages.indexOf(m) > 0).map(m => ({
                role: m.role,
                parts: [{ text: m.text }]
            })),
            { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
            systemInstruction: systemInstruction,
        }
      });

      const reply = response.text || "I apologize, I'm having trouble connecting right now.";
      setMessages(prev => [...prev, { role: 'model', text: reply }]);

    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm sorry, I am currently offline. Please try again later or contact the clinic directly." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-medical-600 text-white p-4 rounded-full shadow-lg hover:bg-medical-700 transition-all duration-300 hover:scale-110 ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="Open Chat Assistant"
      >
        <MessageSquare size={24} />
      </button>

      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-full max-w-[350px] sm:w-96 bg-white rounded-2xl shadow-2xl flex flex-col border border-slate-200 overflow-hidden animate-fade-in-up h-[500px]">
          {/* Header */}
          <div className="bg-medical-600 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Bot size={20} />
              <span className="font-semibold">Dr. Purandare's Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-medical-600 text-white rounded-br-none' 
                      : 'bg-white text-slate-800 shadow-sm border border-slate-100 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="flex justify-start">
                 <div className="bg-white p-3 rounded-2xl rounded-bl-none shadow-sm border border-slate-100 flex items-center gap-2">
                   <Loader2 size={16} className="animate-spin text-medical-600" />
                   <span className="text-xs text-slate-400">Thinking...</span>
                 </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-slate-100">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about surgery, timings..."
                className="flex-1 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-medical-500 focus:ring-1 focus:ring-medical-500"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !inputText.trim()}
                className="bg-medical-600 text-white p-2 rounded-full hover:bg-medical-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={18} />
              </button>
            </div>
            <div className="text-[10px] text-center text-slate-400 mt-2">
               AI responses can be inaccurate. Consult doctor for medical advice.
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Assistant;