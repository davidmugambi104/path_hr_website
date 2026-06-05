import React, { useState, useEffect } from 'react';
import { SearchBar } from '../ui/SearchBar';
import { DarkModeToggle } from '../ui/DarkModeToggle';

export function FixedNavbar(): JSX.Element {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state for styling
      setScrolled(window.scrollY > 20);
      
      // Set sticky state when scrolling down
      setIsSticky(window.scrollY > 100);
      
      // Determine active section
      const sections = ['home', 'about', 'services', 'why-choose', 'case-studies', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
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
        setShowSearch(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Account for navbar height
        behavior: 'smooth'
      });
    }
    
    // Close mobile menu if open
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Fixed Navigation Bar - Responsive and properly sized */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isSticky
            ? 'bg-white/95 backdrop-blur-sm shadow-md py-2 dark:bg-gray-900/95' 
            : 'bg-transparent py-4'
        } ${isSticky ? 'shadow-lg' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="flex items-center">
              <span className={`text-xl md:text-2xl font-display font-bold ${
                scrolled || isSticky ? 'text-primary dark:text-white' : 'text-white'
              }`}>
                BoldPath<span className={scrolled || isSticky ? 'text-accent dark:text-accent' : 'text-accent'}>HR</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;
                
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`font-sans text-sm font-medium transition-colors relative py-2 ${
                      scrolled || isSticky
                        ? 'text-primary hover:text-accent dark:text-white dark:hover:text-accent' 
                        : 'text-white hover:text-white/80'
                    } ${isActive ? 'font-semibold' : ''}`}
                  >
                    {link.name}
                    <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                      scrolled || isSticky ? 'bg-accent dark:bg-accent' : 'bg-white'
                    } ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                  </a>
                );
              })}
              
              {/* Search and Dark Mode Toggle for Desktop */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShowSearch(!showSearch)}
                  className={`p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-accent ${
                    scrolled || isSticky ? 'text-primary hover:text-accent dark:text-white dark:hover:text-accent' : 'text-white hover:text-white/80'
                  }`}
                  aria-label="Toggle search"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                
                <DarkModeToggle />
                
                <a 
                  href="#contact" 
                  onClick={(e) => scrollToSection(e, '#contact')}
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

            {/* Mobile menu button - Properly responsive without fixed sizing */}
            <div className="flex items-center space-x-2 md:hidden">
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent z-50 bg-primary/10 backdrop-blur-sm dark:bg-white/10 flex items-center justify-center"
                aria-label="Toggle search"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              
              <button
                className="p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent z-50 bg-primary/10 backdrop-blur-sm dark:bg-white/10 flex items-center justify-center"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
          
          {/* Search Bar - Appears below navbar when active */}
          {showSearch && (
            <div className="mt-4 pb-4">
              <SearchBar />
            </div>
          )}
        </div>

        {/* Mobile Menu Overlay - Fixed design with proper sizing */}
        <div 
          className={`fixed inset-0 z-40 transition-all duration-300 md:hidden ${
            mobileMenuOpen 
              ? 'opacity-100 visible' 
              : 'opacity-0 invisible pointer-events-none'
          }`}
        >
          {/* Semi-transparent overlay */}
          <div 
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Mobile menu panel - Properly sized without stretching */}
          <div 
            className={`absolute top-0 left-0 h-full w-4/5 max-w-xs bg-white shadow-xl transform transition-transform duration-300 ease-in-out dark:bg-gray-800 ${
              mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <div className="flex flex-col h-full pt-6 pb-8">
              {/* Mobile header with logo and close button */}
              <div className="flex items-center justify-between px-6 pb-6 mb-4 border-b border-gray-200 dark:border-gray-700">
                <span className="text-xl font-display font-bold text-primary dark:text-white">
                  BoldPath<span className="text-accent">HR</span>
                </span>
                <button
                  className="p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent flex items-center justify-center"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <svg className="w-6 h-6 text-primary dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Mobile Search */}
              <div className="px-6 mb-6">
                <SearchBar />
              </div>
              
              <div className="flex-1 px-6 overflow-y-auto">
                <nav className="space-y-1">
                  {navLinks.map((link) => {
                    const sectionId = link.href.replace('#', '');
                    const isActive = activeSection === sectionId;
                    
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => scrollToSection(e, link.href)}
                        className={`block py-4 font-sans font-medium transition-colors text-lg border-b border-gray-100 dark:border-gray-700 ${
                          isActive 
                            ? 'text-accent font-semibold dark:text-accent' 
                            : 'text-primary hover:text-accent dark:text-white dark:hover:text-accent'
                        }`}
                      >
                        {link.name}
                      </a>
                    );
                  })}
                </nav>
              </div>
              
              <div className="px-6 pt-4 flex items-center justify-between">
                <DarkModeToggle />
                <a 
                  href="#contact" 
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="block bg-accent text-white px-6 py-4 rounded-xl font-display font-semibold text-center hover:bg-primary transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Spacer to prevent content jump when navbar becomes sticky */}
      <div className={`transition-all duration-300 ${isSticky ? 'h-20' : 'h-0'}`}></div>
    </>
  );
}