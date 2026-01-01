import React from 'react';
import { ArrowRight, Activity } from 'lucide-react';
import { DOCTOR_NAME, HOSPITAL } from '../constants';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-medical-50 blur-3xl -z-10 opacity-70"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-slate-100 blur-3xl -z-10 opacity-70"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-medical-100 text-medical-800 text-sm font-semibold">
              <Activity size={16} />
              <span>Practicing at {HOSPITAL}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 leading-tight">
              Advanced Neurosurgical Care with Compassion
            </h1>
            
            <p className="text-lg text-slate-600 md:max-w-lg leading-relaxed">
              {DOCTOR_NAME} brings over 15 years of expertise in complex brain and spine surgeries, offering world-class medical treatment in Pune.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex justify-center items-center px-8 py-3 bg-medical-600 text-white font-semibold rounded-lg hover:bg-medical-800 transition-colors shadow-lg shadow-medical-500/30">
                Book Consultation
              </a>
              <a href="#about" className="inline-flex justify-center items-center px-8 py-3 bg-white text-slate-700 border border-slate-200 font-semibold rounded-lg hover:bg-slate-50 transition-colors">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
            
            <div className="pt-6 border-t border-slate-200 flex gap-8">
               <div>
                 <p className="text-3xl font-bold text-medical-600">15+</p>
                 <p className="text-sm text-slate-500 uppercase tracking-wide">Years Exp.</p>
               </div>
               <div>
                 <p className="text-3xl font-bold text-medical-600">5000+</p>
                 <p className="text-sm text-slate-500 uppercase tracking-wide">Surgeries</p>
               </div>
               <div>
                 <p className="text-3xl font-bold text-medical-600">4.9</p>
                 <p className="text-sm text-slate-500 uppercase tracking-wide">Patient Rating</p>
               </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative">
            <div className="absolute inset-0 bg-medical-600 rounded-3xl rotate-3 opacity-10"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] md:aspect-[3/4]">
              <img 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Dr. Anup Purandare Portrait" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-8">
                 <div className="text-white">
                   <p className="font-serif text-2xl font-bold">{DOCTOR_NAME}</p>
                   <p className="opacity-90">MCh Neurosurgery (AIIMS)</p>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;