import React, { useState, useEffect } from 'react';
import { DarkModeToggle } from '../ui/DarkModeToggle';

export function WorkingNavbar(): JSX.Element {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setIsSticky(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Why Choose Us', href: '/#why-choose' },
    { name: 'Case Studies', href: '/#case-studies' },
    { name: 'Contact', href: '/#contact' }
  ];

  const handleLinkClick = () => {
    // Always close mobile menu when a link is clicked
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isSticky
            ? 'bg-white/95 backdrop-blur-sm shadow-md py-2 dark:bg-gray-900/95' 
            : 'bg-transparent py-4'
        } ${isSticky ? 'shadow-lg' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <a href="/" className="flex items-center">
              <span className={`text-xl md:text-2xl font-display font-bold ${
                scrolled || isSticky ? 'text-primary dark:text-white' : 'text-white'
              }`}>
                BoldPath<span className={scrolled || isSticky ? 'text-accent dark:text-accent' : 'text-accent'}>HR</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`font-sans text-sm font-medium transition-colors relative py-2 ${
                    scrolled || isSticky
                      ? 'text-primary hover:text-accent dark:text-white dark:hover:text-accent' 
                      : 'text-white hover:text-white/80'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              
              <div className="flex items-center space-x-4">
                <DarkModeToggle />
                <a 
                  href="/#contact" 
                  onClick={handleLinkClick}
                  className={`px-4 py-2 rounded-lg font-display font-semibold text-sm transition-all ${
                    scrolled || isSticky
                      ? 'bg-accent text-white hover:bg-primary dark:bg-accent dark:hover:bg-primary'
                      : 'bg-white text-primary hover:bg-white/90'
                  }`}
                >
                  Get Started
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center space-x-2 md:hidden">
              <button
                className="p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent z-50 bg-primary/10 backdrop-blur-sm dark:bg-white/10 flex items-center justify-center"
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
              >
                <div className="w-6 h-6 flex flex-col justify-between">
                  <span className={`w-full h-0.5 transition-transform duration-300 ${
                    scrolled || isSticky ? 'bg-primary dark:bg-white' : 'bg-white'
                  } ${mobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
                  <span className={`w-full h-0.5 transition-opacity duration-300 ${
                    scrolled || isSticky ? 'bg-primary dark:bg-white' : 'bg-white'
                  } ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                  <span className={`w-full h-0.5 transition-transform duration-300 ${
                    scrolled || isSticky ? 'bg-primary dark:bg-white' : 'bg-white'
                  } ${mobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Ultra simple and guaranteed to work */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            {/* Black overlay */}
            <div 
              className="absolute inset-0 bg-black bg-opacity-50"
              onClick={() => setMobileMenuOpen(false)}
            ></div>
            
            {/* White menu panel - positioned absolutely */}
            <div className="absolute top-0 left-0 h-full w-5/6 max-w-sm bg-white dark:bg-gray-800 shadow-2xl">
              <div className="flex flex-col h-full">
                {/* Header with close button */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-xl font-display font-bold text-primary dark:text-white">
                    BoldPath<span className="text-accent">HR</span>
                  </span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-md text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                    aria-label="Close menu"
                  >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                {/* Navigation links */}
                <div className="flex-1 overflow-y-auto py-4">
                  <nav className="flex flex-col">
                    {navLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={handleLinkClick}
                        className="block px-4 py-3 text-lg font-medium text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 border-b border-gray-100 dark:border-gray-700"
                      >
                        {link.name}
                      </a>
                    ))}
                  </nav>
                </div>
                
                {/* Footer with dark mode toggle and CTA */}
                <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Dark Mode</span>
                    <DarkModeToggle />
                  </div>
                  <a 
                    href="/#contact" 
                    onClick={handleLinkClick}
                    className="w-full bg-accent text-white text-center px-4 py-3 rounded-lg font-display font-semibold hover:bg-primary transition-colors"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
      
      {/* Spacer to prevent content jump */}
      <div className={`transition-all duration-300 ${isSticky ? 'h-20' : 'h-0'}`}></div>
    </>
  );
}