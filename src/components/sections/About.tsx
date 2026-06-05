import React from 'react';
import { company } from '../../lib/content';

export function About(): JSX.Element {
  return (
    <section id="about" className="py-16 md:py-20 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary mb-6">
            About <span className="text-accent">BoldPath HR</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-sans">
            BoldPath HR & Business Solutions is a leading Human Resource and Organizational Development consultancy based in Kenya, committed to transforming institutions through strategic, people-centered solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
            <h3 className="text-2xl font-display font-bold text-primary mb-4">Our Vision</h3>
            <p className="text-gray-600 font-sans">{company.vision}</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
            <h3 className="text-2xl font-display font-bold text-primary mb-4">Our Mission</h3>
            <p className="text-gray-600 font-sans">{company.mission}</p>
          </div>
        </div>
      </div>
    </section>
  );
}