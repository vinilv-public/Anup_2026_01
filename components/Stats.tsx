import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { STATS_DATA } from '../constants';

const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-sm font-bold text-medical-600 tracking-widest uppercase mb-2">Impact</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">Growing Trust</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Our commitment to patient recovery and successful surgical outcomes has led to a consistent increase in successful procedures year over year. We value the trust placed in us by thousands of families.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="border-l-4 border-medical-500 pl-4">
                <span className="block text-4xl font-bold text-slate-900">98%</span>
                <span className="text-slate-500 text-sm">Surgical Success Rate</span>
              </div>
              <div className="border-l-4 border-medical-500 pl-4">
                <span className="block text-4xl font-bold text-slate-900">24/7</span>
                <span className="text-slate-500 text-sm">Emergency Availability</span>
              </div>
            </div>
          </div>

          <div className="h-80 w-full bg-slate-50 rounded-2xl p-6 shadow-inner">
             <h4 className="text-center font-semibold text-slate-700 mb-4">Successful Procedures (Annual)</h4>
             <ResponsiveContainer width="100%" height="100%">
               <AreaChart data={STATS_DATA}>
                 <defs>
                   <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="5%" stopColor="#0284c7" stopOpacity={0.3}/>
                     <stop offset="95%" stopColor="#0284c7" stopOpacity={0}/>
                   </linearGradient>
                 </defs>
                 <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                 <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
                 <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                 <Tooltip 
                    contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                    cursor={{stroke: '#0ea5e9', strokeWidth: 1}}
                 />
                 <Area type="monotone" dataKey="value" stroke="#0284c7" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
               </AreaChart>
             </ResponsiveContainer>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;
