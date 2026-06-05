import React from 'react';
import { motion } from 'framer-motion';

const certifications = [
  {
    name: "SHRM Certified Professional",
    issuer: "Society for Human Resource Management",
    year: "2023",
    description: "Global HR certification demonstrating expertise in HR practices"
  },
  {
    name: "HR Analytics Specialist",
    issuer: "HR Certification Institute",
    year: "2022",
    description: "Advanced analytics for data-driven HR decision making"
  },
  {
    name: "Organizational Development Specialist",
    issuer: "Kenya Institute of Management",
    year: "2021",
    description: "Expertise in organizational transformation and change management"
  },
  {
    name: "Training and Development Professional",
    issuer: "Association for Talent Development",
    year: "2020",
    description: "Specialized in designing and delivering effective training programs"
  }
];

export function Certifications(): JSX.Element {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-surface dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-primary mb-4 md:mb-6 tracking-wider dark:text-white">
            Professional <span className="text-accent">Certifications</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-normal dark:text-gray-300">
            Our team maintains the highest standards of professional excellence through continuous learning and certification
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 card-hover dark:bg-gray-700"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-1 dark:text-white">{cert.name}</h3>
              <p className="text-accent text-sm mb-2 dark:text-accent-light">{cert.issuer}</p>
              <p className="text-gray-600 text-sm mb-3 dark:text-gray-300">{cert.description}</p>
              <div className="text-xs font-medium text-gray-500 dark:text-gray-400">{cert.year}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}