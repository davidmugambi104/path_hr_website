import React from 'react';
import { company } from '../../lib/content';

export function WhyChoose(): JSX.Element {
  return (
    <section id="why-choose" className="py-16 md:py-20 lg:py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            Why Choose <span className="text-accent">BoldPath HR</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-sans">
            What sets us apart from other HR consultancies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {company.whyChoose.map((reason, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-white font-sans">{reason}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}