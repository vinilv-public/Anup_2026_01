import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'clinic' | 'hospital' | 'award'>('all');

  const filteredImages = filter === 'all' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === filter);

  return (
    <section id="gallery" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-medical-600 tracking-widest uppercase mb-2">Gallery</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">Clinic & Facilities</h3>
        </div>

        <div className="flex justify-center gap-2 md:gap-4 mb-10 flex-wrap">
          {['all', 'clinic', 'hospital', 'award'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all capitalize
                ${filter === cat 
                  ? 'bg-medical-600 text-white shadow-lg shadow-medical-500/30' 
                  : 'bg-white text-slate-600 hover:bg-slate-100'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredImages.map((img) => (
            <div key={img.id} className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-md cursor-pointer">
              <img 
                src={img.url} 
                alt={img.caption} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-medium">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
