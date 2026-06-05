import React from 'react';

export function Hero(): JSX.Element {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden" 
             style={{ background: 'linear-gradient(135deg, #0B2B40 0%, #1a4a6e 50%, #0B2B40 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6">
          <span className="block">BoldPath HR &</span>
          <span className="block text-accent">BUSINESS SOLUTIONS</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-sans max-w-3xl mx-auto mb-10">
          Empowering People. Enabling Growth. Transforming Organizations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#services" className="bg-accent text-white px-8 py-4 rounded-xl font-display font-semibold text-lg hover:bg-primary transition-all">
            Our Services
          </a>
          <a href="#contact" className="px-8 py-4 rounded-xl font-display font-semibold text-lg border-2 border-white/30 text-white hover:bg-white/10 transition-all">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}