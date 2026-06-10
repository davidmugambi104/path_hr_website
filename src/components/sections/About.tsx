import React from 'react';
import { motion } from 'framer-motion';
import { company } from '../../lib/content';

export function About(): JSX.Element {
  return (
    <section id="about" className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-normal text-primary mb-4 md:mb-6 tracking-wider">
              About <span className="text-accent">Us</span>
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 font-normal mb-4">
                <span className="font-semibold">BoldPath HR & Business Solutions</span> is a premier HR consultancy dedicated to empowering African organizations with strategic human capital capabilities.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Our Vision</h3>
                  <p className="text-gray-600 font-normal">{company.vision}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Our Mission</h3>
                  <p className="text-gray-600 font-normal">{company.mission}</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-surface rounded-2xl p-6 md:p-8 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-primary mb-5">Why Choose BoldPath?</h3>
            
            <ul className="space-y-3">
              {company.whyChoose.map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 font-normal">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}