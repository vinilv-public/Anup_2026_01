import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasMenuBeenClicked, setHasMenuBeenClicked] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => {
              try {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } catch (e) {
                window.scrollTo(0, 0);
              }
            }}
            onKeyDown={(e: React.KeyboardEvent) => {
              if (e.key === 'Enter' || e.key === ' ') {
                try {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } catch (err) {
                  window.scrollTo(0, 0);
                }
              }
            }}
            className="flex-shrink-0 flex items-center cursor-pointer"
          >
            <span className={`font-serif font-bold text-2xl ${isScrolled ? 'text-medical-900' : 'text-slate-800'}`}>
              Dr. Anup Purandare <span className="text-medical-600 text-sm font-sans tracking-wide font-semibold ml-1">MD, NEUROSURGEON</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium hover:text-medical-600 transition-colors ${isScrolled ? 'text-slate-600' : 'text-slate-800'}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-medical-600 hover:bg-medical-800 text-white px-5 py-2 rounded-full font-medium transition-colors flex items-center gap-2"
            >
              <Phone size={16} />
              Book Appointment
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => {
                if (!hasMenuBeenClicked) {
                  try {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } catch (e) {
                    // fallback if window is not available
                    window.scrollTo(0, 0);
                  }
                  setHasMenuBeenClicked(true);
                }
                setIsOpen(!isOpen);
              }}
              className={`p-2 rounded-md ${isScrolled ? 'text-slate-800' : 'text-slate-800'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl absolute w-full left-0 top-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-medical-600 hover:bg-medical-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+912012345678"
              className="block mt-4 text-center bg-medical-600 text-white px-4 py-3 rounded-md font-bold"
            >
              Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;