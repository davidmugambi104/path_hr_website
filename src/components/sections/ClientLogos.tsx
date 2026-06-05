import React from 'react';
import { motion } from 'framer-motion';

const clients = [
  { name: "Equity Bank", category: "Banking" },
  { name: "Safaricom", category: "Telecommunications" },
  { name: "Kenya Airways", category: "Aviation" },
  { name: "Nestlé Kenya", category: "FMCG" },
  { name: "KCB Group", category: "Banking" },
  { name: "Cooperative Bank", category: "Banking" },
  { name: "Britam", category: "Insurance" },
  { name: "East African Breweries", category: "Beverages" }
];

export function ClientLogos(): JSX.Element {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-primary mb-4 md:mb-6 tracking-wider dark:text-white">
            Trusted by <span className="text-accent">Leading Organizations</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-normal dark:text-gray-300">
            We partner with diverse organizations across industries to deliver exceptional HR solutions
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-12">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col items-center justify-center p-6 bg-surface rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 dark:bg-gray-800"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-display font-bold text-lg mb-4 dark:bg-accent/10 dark:text-accent">
                {client.name.charAt(0)}
              </div>
              <h3 className="text-lg font-semibold text-primary mb-1 dark:text-white">{client.name}</h3>
              <p className="text-accent text-sm dark:text-accent-light">{client.category}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 font-normal dark:text-gray-400">
            And <span className="font-semibold text-primary dark:text-white">50+</span> other organizations trust our expertise
          </p>
        </div>
      </div>
    </section>
  );
}