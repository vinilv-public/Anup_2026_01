import React from 'react';
import { Brain, Activity, Baby, Ambulance } from 'lucide-react';
import { SERVICES } from '../constants';

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain size={32} />,
  Activity: <Activity size={32} />,
  Baby: <Baby size={32} />,
  Ambulance: <Ambulance size={32} />,
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h2 className="text-sm font-bold text-medical-600 tracking-widest uppercase mb-2">Specialties</h2>
           <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">Practice Highlights</h3>
           <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
             Providing comprehensive care for a wide spectrum of neurological conditions using state-of-the-art technology.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
              <div className="w-14 h-14 bg-medical-50 text-medical-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-medical-600 group-hover:text-white transition-colors duration-300">
                {iconMap[service.iconName]}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
