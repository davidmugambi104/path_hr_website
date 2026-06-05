import React, { useState } from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: "What industries do you specialize in?",
    answer: "We work across diverse sectors including technology, healthcare, finance, manufacturing, and non-profit organizations. Our expertise spans both private and public sector organizations throughout East Africa."
  },
  {
    question: "How long does it take to see results from your HR services?",
    answer: "Results vary by service type. Strategic planning initiatives typically show impact within 3-6 months, while recruitment services can deliver results in weeks. Organizational development programs are designed for long-term sustainable impact."
  },
  {
    question: "Do you offer remote consulting services?",
    answer: "Yes, we provide both in-person and remote consulting services. Our hybrid approach allows us to serve clients across Kenya and the broader East African region effectively."
  },
  {
    question: "What makes BoldPath different from other HR consultancies?",
    answer: "Our local expertise combined with global best practices, deep understanding of the African business context, and commitment to sustainable, measurable results set us apart. We focus on building internal capabilities rather than creating dependency."
  },
  {
    question: "How do you ensure confidentiality with client information?",
    answer: "We maintain strict confidentiality protocols and can provide non-disclosure agreements as needed. Client anonymity is protected in all case studies and marketing materials unless explicit permission is given."
  }
];

export function FAQ(): JSX.Element {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-primary mb-4 md:mb-6 tracking-wider">
            Frequently Asked <span className="text-accent">Questions</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-normal">
            Find answers to common questions about our HR services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4 border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-5 md:p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg md:text-xl font-semibold text-primary pr-4">{faq.question}</h3>
                <div className="flex-shrink-0 ml-4">
                  <svg 
                    className={`w-5 h-5 text-accent transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-5 md:p-6 pt-0 border-t border-gray-100">
                    <p className="text-gray-600 font-normal">{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}