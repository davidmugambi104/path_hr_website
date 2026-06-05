import React, { useState, useEffect } from 'react';

export function Navbar(): JSX.Element {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="text-2xl md:text-3xl font-display font-bold text-primary">
            BoldPath<span className="text-accent">HR</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="font-sans text-sm font-medium text-primary hover:text-accent transition-colors">Home</a>
            <a href="#about" className="font-sans text-sm font-medium text-primary hover:text-accent transition-colors">About</a>
            <a href="#services" className="font-sans text-sm font-medium text-primary hover:text-accent transition-colors">Services</a>
            <a href="#contact" className="font-sans text-sm font-medium text-primary hover:text-accent transition-colors">Contact</a>
            <button className="bg-accent text-white px-6 py-2 rounded-xl font-display font-semibold hover:bg-primary transition-colors">
              Get Started
            </button>
          </div>

          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-primary transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-primary transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-primary transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <a href="#home" className="block py-2 font-sans font-medium text-primary" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#about" className="block py-2 font-sans font-medium text-primary" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#services" className="block py-2 font-sans font-medium text-primary" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#contact" className="block py-2 font-sans font-medium text-primary" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <button className="w-full bg-accent text-white px-6 py-3 rounded-xl font-display font-semibold">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}