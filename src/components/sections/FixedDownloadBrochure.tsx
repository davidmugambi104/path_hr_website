import React from 'react';
import { motion } from 'framer-motion';

export function FixedDownloadBrochure(): JSX.Element {
  const handleDownload = () => {
    // Create a link to the actual PDF file
    const link = document.createElement('a');
    link.href = '/company-profile.pdf';
    link.download = 'BoldPath-HR-Company-Profile.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary to-primaryLight rounded-2xl p-6 md:p-8 shadow-lg overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                Download Our <span className="text-accent">Company Profile</span>
              </h2>
              <p className="text-white/90 font-sans text-base mb-6">
                Get detailed information about our services, expertise, and success stories in our comprehensive company profile.
              </p>
              
              <ul className="space-y-2 mb-6">
                {[
                  'Complete service offerings',
                  'Client success stories',
                  'Team expertise and qualifications',
                  'Certifications and partnerships'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white font-sans text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              
              <button
                onClick={handleDownload}
                className="bg-accent text-white px-6 py-3 rounded-lg font-display font-semibold hover:bg-white hover:text-primary transition-all flex items-center group text-sm"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Company Profile
                <span className="ml-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">(PDF, 512 KB)</span>
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-20 bg-white rounded-md shadow-md flex flex-col items-center justify-center border border-white/30">
                  <svg className="w-6 h-6 text-accent mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-xs text-center text-accent font-display">PDF</span>
                </div>
              </div>
              
              <h3 className="text-lg font-display font-bold text-white text-center mb-1">Company Profile</h3>
              <p className="text-white/80 text-center font-sans text-xs mb-4">BoldPath HR & Business Solutions</p>
              
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-white/70 font-sans">Pages</span>
                  <span className="text-white font-sans">8</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-white/70 font-sans">Size</span>
                  <span className="text-white font-sans">512 KB</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-white/70 font-sans">Format</span>
                  <span className="text-white font-sans">PDF</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-white/70 font-sans">Updated</span>
                  <span className="text-white font-sans">February 2026</span>
                </div>
              </div>
              
              <button
                onClick={handleDownload}
                className="mt-4 w-full bg-white text-primary px-4 py-2 rounded-lg font-medium hover:bg-accent hover:text-white transition-colors text-sm flex items-center justify-center"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Now
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}