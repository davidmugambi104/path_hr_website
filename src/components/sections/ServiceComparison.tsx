import React, { useState } from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    name: "HR Strategy",
    description: "Comprehensive HR planning and organizational design",
    features: ["Strategic Planning", "Organizational Design", "Performance Systems", "HR Analytics"],
    price: "From KES 150,000",
    bestFor: "Organizations undergoing transformation",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
  },
  {
    name: "Talent Acquisition",
    description: "End-to-end recruitment and talent management",
    features: ["Recruitment Process", "Employer Branding", "Leadership Assessment", "Onboarding Programs"],
    price: "From KES 100,000",
    bestFor: "Growing organizations",
    icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
  },
  {
    name: "Employee Relations",
    description: "Building positive workplace environments",
    features: ["Conflict Resolution", "Policy Development", "Disciplinary Procedures", "Exit Management"],
    price: "From KES 80,000",
    bestFor: "Organizations with HR challenges",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
  }
];

const allFeatures = [
  "Strategic Planning",
  "Organizational Design", 
  "Performance Systems",
  "HR Analytics",
  "Recruitment Process",
  "Employer Branding",
  "Leadership Assessment",
  "Onboarding Programs",
  "Conflict Resolution",
  "Policy Development",
  "Disciplinary Procedures",
  "Exit Management"
];

export function ServiceComparison(): JSX.Element {
  const [selectedService, setSelectedService] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);

  const toggleView = () => {
    setIsMobileView(!isMobileView);
  };

  const handleContactClick = () => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-primary mb-4 md:mb-6 tracking-wider dark:text-white">
            Service <span className="text-accent">Packages</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-normal dark:text-gray-300">
            Compare our service offerings to find the right solution for your organization
          </p>
          
          {/* Toggle View Button for Mobile */}
          <div className="mt-6 md:hidden">
            <button
              onClick={toggleView}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              {isMobileView ? 'Show Comparison Table' : 'Show Individual Packages'}
            </button>
          </div>
        </div>

        {/* Mobile View - Card Layout */}
        {(isMobileView || window.innerWidth < 768) && (
          <div className="md:hidden space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-surface rounded-2xl p-6 shadow-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary dark:text-white">{service.name}</h3>
                    <p className="text-accent font-semibold">{service.price}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 dark:text-gray-300">{service.description}</p>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2 dark:text-gray-400">Best for:</p>
                  <p className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full inline-block dark:bg-blue-900/30 dark:text-blue-300">
                    {service.bestFor}
                  </p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-primary mb-3 dark:text-white">Includes:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button
                  onClick={handleContactClick}
                  className="w-full bg-accent text-white py-3 rounded-xl font-medium hover:bg-primary transition-colors"
                >
                  Get Custom Quote
                </button>
              </motion.div>
            ))}
          </div>
        )}

        {/* Desktop View - Comparison Table */}
        {(!isMobileView || window.innerWidth >= 768) && (
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-primary dark:border-gray-700">
                  <th className="text-left p-4 font-semibold text-primary dark:text-white">Features</th>
                  {services.map((service, index) => (
                    <th key={index} className="p-4 text-center min-w-[250px]">
                      <div className="bg-surface rounded-xl p-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex justify-center mb-3">
                          <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                            </svg>
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-primary mb-2 dark:text-white">{service.name}</h3>
                        <p className="text-gray-600 text-sm mb-3 dark:text-gray-300">{service.description}</p>
                        <div className="text-accent font-semibold mb-2">{service.price}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Best for: {service.bestFor}</div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {allFeatures.map((feature, featureIndex) => (
                  <tr key={featureIndex} className="border-b border-gray-200 hover:bg-surface dark:border-gray-700 dark:hover:bg-gray-800">
                    <td className="p-4 font-medium text-primary dark:text-white">{feature}</td>
                    {services.map((service, serviceIndex) => (
                      <td key={serviceIndex} className="p-4 text-center">
                        {service.features.includes(feature) ? (
                          <svg className="w-6 h-6 text-accent mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <span className="text-gray-300 dark:text-gray-600">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="mt-12 text-center">
          <button 
            onClick={handleContactClick}
            className="inline-block bg-accent text-white px-8 py-4 rounded-xl font-display font-semibold hover:bg-primary transition-colors text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Contact Us for Custom Solutions
          </button>
          <p className="mt-4 text-gray-600 font-normal dark:text-gray-300">
            All packages can be customized to meet your specific organizational needs
          </p>
        </div>
      </div>
    </section>
  );
}