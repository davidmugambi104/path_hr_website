import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    name: "HR Strategy",
    description: "Comprehensive HR planning and organizational design",
    features: ["Strategic Planning", "Organizational Design", "Performance Systems", "HR Analytics"],
    price: "From KES 150,000",
    bestFor: "Organizations undergoing transformation"
  },
  {
    name: "Talent Acquisition",
    description: "End-to-end recruitment and talent management",
    features: ["Recruitment Process", "Employer Branding", "Leadership Assessment", "Onboarding Programs"],
    price: "From KES 100,000",
    bestFor: "Growing organizations"
  },
  {
    name: "Employee Relations",
    description: "Building positive workplace environments",
    features: ["Conflict Resolution", "Policy Development", "Disciplinary Procedures", "Exit Management"],
    price: "From KES 80,000",
    bestFor: "Organizations with HR challenges"
  }
];

export function ServiceComparison(): JSX.Element {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-primary mb-4 md:mb-6 tracking-wider">
            Service <span className="text-accent">Packages</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-normal">
            Compare our service offerings to find the right solution for your organization
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-primary">
                <th className="text-left p-4 font-semibold text-primary">Service</th>
                {services.map((service, index) => (
                  <th key={index} className="p-4 text-center">
                    <div className="bg-surface rounded-xl p-4">
                      <h3 className="text-lg font-semibold text-primary mb-2">{service.name}</h3>
                      <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                      <div className="text-accent font-semibold">{service.price}</div>
                      <div className="text-xs text-gray-500 mt-1">Best for: {service.bestFor}</div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {services[0].features.map((feature, featureIndex) => (
                <tr key={featureIndex} className="border-b border-gray-200 hover:bg-surface">
                  <td className="p-4 font-medium text-primary">{feature}</td>
                  {services.map((service, serviceIndex) => (
                    <td key={serviceIndex} className="p-4 text-center">
                      {service.features.includes(feature) ? (
                        <svg className="w-6 h-6 text-accent mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <span className="text-gray-300">—</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 text-center">
          <a 
            href="#contact" 
            className="inline-block bg-accent text-white px-8 py-4 rounded-xl font-display font-semibold hover:bg-primary transition-colors text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Contact Us for Custom Solutions
          </a>
          <p className="mt-4 text-gray-600 font-normal">
            All packages can be customized to meet your specific organizational needs
          </p>
        </div>
      </div>
    </section>
  );
}