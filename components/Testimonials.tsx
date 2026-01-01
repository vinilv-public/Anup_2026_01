import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h2 className="text-sm font-bold text-medical-600 tracking-widest uppercase mb-2">Patient Stories</h2>
           <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">What Our Patients Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-slate-50 p-8 rounded-2xl relative">
              <Quote className="text-medical-200 absolute top-6 right-6" size={48} />
              <div className="flex gap-1 text-amber-400 mb-4">
                {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-slate-700 leading-relaxed mb-6 italic">"{t.text}"</p>
              <div>
                <p className="font-bold text-slate-900">{t.name}</p>
                <p className="text-sm text-slate-500">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
