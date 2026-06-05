import React from 'react';
import { motion } from 'framer-motion';

export function DownloadBrochure(): JSX.Element {
  const handleDownload = () => {
    // In a real application, this would trigger a PDF download
    alert('In a production environment, this would download the company brochure PDF.\n\nFor demonstration purposes, this is a simulated download.');
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary to-primaryLight rounded-3xl p-8 md:p-12 shadow-xl overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Download Our <span className="text-accent">Company Profile</span>
              </h2>
              <p className="text-white/90 font-sans text-lg mb-8">
                Get detailed information about our services, expertise, and success stories in a comprehensive brochure.
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  'Complete service offerings',
                  'Client success stories',
                  'Team expertise and qualifications',
                  'Certifications and partnerships',
                  'Contact information'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white font-sans">{item}</span>
                  </li>
                ))}
              </ul>
              
              <button
                onClick={handleDownload}
                className="bg-accent text-white px-8 py-4 rounded-xl font-display font-semibold hover:bg-white hover:text-primary transition-all flex items-center group"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Company Profile (PDF)
                <span className="ml-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity">(2.4 MB)</span>
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-32 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center border-2 border-dashed border-white/30">
                  <svg className="w-8 h-8 text-accent mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-xs text-center text-accent font-display">PDF</span>
                </div>
              </div>
              
              <h3 className="text-xl font-display font-bold text-white text-center mb-2">Company Profile</h3>
              <p className="text-white/80 text-center font-sans text-sm mb-6">BoldPath HR & Business Solutions</p>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-white/70 font-sans">Pages</span>
                  <span className="text-white font-sans">12</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/70 font-sans">Size</span>
                  <span className="text-white font-sans">2.4 MB</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/70 font-sans">Format</span>
                  <span className="text-white font-sans">PDF</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/70 font-sans">Updated</span>
                  <span className="text-white font-sans">June 2026</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}