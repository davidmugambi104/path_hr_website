import React from 'react';
import { company } from '../../lib/content';

export function Clients(): JSX.Element {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary mb-6">
            Who We <span className="text-accent">Serve</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-sans">
            We partner with diverse organizations across various sectors
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {company.clients.map((client, index) => (
            <div key={index} className="bg-surface px-8 py-4 rounded-xl">
              <span className="text-primary font-display font-semibold text-lg">{client}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-16 border-t border-gray-200">
          <p className="text-center text-gray-500 font-sans mb-8">Trusted by leading organizations</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {['Corporate', 'Government', 'NGO', 'Startup', 'SME', 'Enterprise'].map((name, i) => (
              <div key={i} className="text-2xl font-display font-bold text-gray-300 grayscale hover:grayscale-0 transition-all">
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}