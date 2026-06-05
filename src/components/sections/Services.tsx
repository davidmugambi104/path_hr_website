import React, { useState } from 'react';
import { company } from '../../lib/content';

export function Services(): JSX.Element {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-16 md:py-20 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary mb-6">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-sans">
            Comprehensive HR solutions designed to support organizations at every stage of growth and transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {company.services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg cursor-pointer transition-all duration-300 ${
                expandedIndex === index ? 'ring-2 ring-accent' : 'hover:shadow-xl hover:-translate-y-1'
              }`}
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              <div className="w-14 h-14 mb-6 bg-primary/10 rounded-xl flex items-center justify-center text-accent">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>

              <h3 className="text-xl font-display font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-gray-600 font-sans">{service.desc}</p>

              {expandedIndex === index && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <ul className="space-y-2">
                    {service.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-accent mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-4 text-accent text-sm font-medium">
                {expandedIndex === index ? 'Click to collapse' : 'Click to expand'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}