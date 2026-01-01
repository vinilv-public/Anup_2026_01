import React from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { EXPERIENCE, EDUCATION } from '../constants';
import { TimelineItem } from '../types';

const TimelineCard: React.FC<{ item: TimelineItem; icon: React.ReactNode }> = ({ item, icon }) => (
  <div className="flex gap-4 group">
    <div className="flex flex-col items-center">
      <div className="w-10 h-10 rounded-full bg-medical-100 text-medical-600 flex items-center justify-center shrink-0 group-hover:bg-medical-600 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <div className="w-0.5 h-full bg-slate-200 my-2 group-last:hidden"></div>
    </div>
    <div className="pb-8">
      <span className="text-sm font-bold text-medical-600 tracking-wider uppercase">{item.year}</span>
      <h3 className="text-xl font-bold text-slate-900 mt-1">{item.title}</h3>
      <p className="text-slate-700 font-medium">{item.institution}</p>
      {item.description && <p className="text-slate-500 mt-2 text-sm leading-relaxed">{item.description}</p>}
    </div>
  </div>
);

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h2 className="text-sm font-bold text-medical-600 tracking-widest uppercase mb-2">My Journey</h2>
           <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">Experience & Education</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Professional Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-medical-600" size={24} />
              <h4 className="text-2xl font-bold text-slate-800">Professional Experience</h4>
            </div>
            <div className="pl-2">
              {EXPERIENCE.map((item, index) => (
                <TimelineCard key={index} item={item} icon={<Briefcase size={18} />} />
              ))}
            </div>
          </div>

          {/* Education & Awards */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-medical-600" size={24} />
              <h4 className="text-2xl font-bold text-slate-800">Education</h4>
            </div>
            <div className="pl-2">
              {EDUCATION.map((item, index) => (
                <TimelineCard key={index} item={item} icon={<GraduationCap size={18} />} />
              ))}
            </div>

            <div className="mt-12">
               <div className="flex items-center gap-3 mb-8">
                <Award className="text-medical-600" size={24} />
                <h4 className="text-2xl font-bold text-slate-800">Recognitions</h4>
               </div>
               <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 mt-2 rounded-full bg-medical-500"></span>
                      <span className="text-slate-700">"Best Neurosurgeon Pune" - Times Health Survey 2022</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 mt-2 rounded-full bg-medical-500"></span>
                      <span className="text-slate-700">Published over 25 papers in International Neurosurgical Journals</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 mt-2 rounded-full bg-medical-500"></span>
                      <span className="text-slate-700">Speaker at World Federation of Neurosurgical Societies, 2019</span>
                    </li>
                  </ul>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
