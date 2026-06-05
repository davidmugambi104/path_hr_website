import React, { useState, useEffect } from 'react';

export function Navbar(): JSX.Element {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Choose Us', href: '#why-choose' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Contact', href: '#contact' }
  ];

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center">
            <span className={`text-xl md:text-2xl font-display font-bold ${
              scrolled ? 'text-primary' : 'text-white'
            }`}>
              BoldPath<span className={scrolled ? 'text-accent' : 'text-accent'}>HR</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-sans text-sm font-medium transition-colors relative py-2 ${
                  scrolled 
                    ? 'text-primary hover:text-accent' 
                    : 'text-white hover:text-white/80'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 ${
                  scrolled ? 'bg-accent' : 'bg-white'
                } group-hover:w-full`} />
              </a>
            ))}
            <a 
              href="#contact" 
              className={`px-4 py-2 rounded-lg font-display font-semibold text-sm transition-all ${
                scrolled
                  ? 'bg-accent text-white hover:bg-primary'
                  : 'bg-white text-primary hover:bg-white/90'
              }`}
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button - Fixed design to prevent stretching */}
          <button
            className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent z-50 bg-primary/10 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            style={{ minWidth: '44px', minHeight: '44px' }} // Minimum touch target size
          >
            <div className="w-5 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 transition-transform duration-300 ${
                scrolled ? 'bg-primary' : 'bg-white'
              } ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 transition-opacity duration-300 ${
                scrolled ? 'bg-primary' : 'bg-white'
              } ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 transition-transform duration-300 ${
                scrolled ? 'bg-primary' : 'bg-white'
              } ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Fixed design */}
      <div 
        className={`fixed inset-0 z-40 transition-all duration-300 md:hidden ${
          mobileMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible'
        }`}
      >
        {/* Semi-transparent overlay */}
        <div 
          className="absolute inset-0 bg-black/50"
          onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Mobile menu panel - Fixed width to prevent stretching */}
        <div 
          className={`absolute top-0 left-0 h-full w-4/5 max-w-xs bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full pt-6 pb-8">
            {/* Mobile header with logo and close button */}
            <div className="flex items-center justify-between px-6 pb-6 mb-4 border-b border-gray-200">
              <span className="text-xl font-display font-bold text-primary">
                BoldPath<span className="text-accent">HR</span>
              </span>
              <button
                className="p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                style={{ minWidth: '44px', minHeight: '44px' }} // Minimum touch target size
              >
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex-1 px-6 overflow-y-auto">
              <nav className="space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block py-4 font-sans font-medium text-primary hover:text-accent transition-colors text-lg border-b border-gray-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>
            
            <div className="px-6 pt-4">
              <a 
                href="#contact" 
                className="block w-full bg-accent text-white px-6 py-4 rounded-xl font-display font-semibold text-center hover:bg-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}