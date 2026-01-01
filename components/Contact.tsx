import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { CONTACT_PHONE, CONTACT_EMAIL, HOSPITAL, LOCATION_MAP_URL } from '../constants';

const ContactItem: React.FC<{ icon: React.ReactNode; title: string; detail: string; href?: string }> = ({ icon, title, detail, href }) => (
  <div className="flex items-start gap-4">
    <div className="p-3 bg-medical-50 text-medical-600 rounded-lg shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-slate-900">{title}</h4>
      {href ? (
        <a href={href} className="text-slate-600 hover:text-medical-600 transition-colors">{detail}</a>
      ) : (
        <p className="text-slate-600">{detail}</p>
      )}
    </div>
  </div>
);

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h3 className="text-3xl font-serif font-bold mb-6">Get in Touch</h3>
            <p className="text-slate-400 mb-10 max-w-md">
              For appointments and emergency consultations, please reach out using the contact details below or visit us at Bharati Hospital.
            </p>

            <div className="space-y-8 bg-white/5 p-8 rounded-2xl border border-white/10">
              <ContactItem 
                icon={<Phone size={20} />} 
                title="Phone" 
                detail={CONTACT_PHONE} 
                href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} 
              />
              <ContactItem 
                icon={<Mail size={20} />} 
                title="Email" 
                detail={CONTACT_EMAIL} 
                href={`mailto:${CONTACT_EMAIL}`} 
              />
              <ContactItem 
                icon={<MapPin size={20} />} 
                title="Hospital" 
                detail={HOSPITAL} 
              />
               <ContactItem 
                icon={<Clock size={20} />} 
                title="OPD Hours" 
                detail="Mon - Sat: 10:00 AM - 2:00 PM" 
              />
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden h-[400px] lg:h-auto border-4 border-white/10 shadow-2xl">
             <iframe 
               src={LOCATION_MAP_URL} 
               width="100%" 
               height="100%" 
               style={{border:0}} 
               allowFullScreen 
               loading="lazy"
               title="Hospital Location"
             ></iframe>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-20 pt-8 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Dr. Anup Purandare Neurosurgery. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;