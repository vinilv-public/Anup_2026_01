import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import Experience from './components/Experience';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Assistant from './components/Assistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Stats />
        <Experience />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Assistant />
    </div>
  );
};

export default App;
