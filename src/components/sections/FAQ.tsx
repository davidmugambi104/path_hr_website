import React, { useState } from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: "What industries do you specialize in?",
    answer: "We work across diverse sectors including technology, healthcare, finance, manufacturing, and non-profit organizations. Our expertise spans both private and public sector organizations throughout East Africa. We've successfully delivered solutions for startups, mid-sized companies, and large enterprises, adapting our approach to each organization's unique culture and challenges."
  },
  {
    question: "How long does it take to see results from your HR services?",
    answer: "Results vary by service type and organizational context. Strategic planning initiatives typically show measurable impact within 3-6 months, while recruitment services can deliver results in weeks. Organizational development programs are designed for long-term sustainable impact, with clients typically seeing significant improvements in employee engagement and performance metrics within 6-12 months. We provide regular progress reports and adjust our approach based on your specific goals."
  },
  {
    question: "Do you offer remote consulting services?",
    answer: "Yes, we provide both in-person and remote consulting services. Our hybrid approach allows us to serve clients across Kenya and the broader East African region effectively. Since 2020, we've successfully transitioned 80% of our client engagements to remote delivery, utilizing secure video conferencing platforms and collaborative tools. We also offer blended models combining remote strategy sessions with on-site implementation support when needed."
  },
  {
    question: "What makes BoldPath different from other HR consultancies?",
    answer: "Our local expertise combined with global best practices, deep understanding of the African business context, and commitment to sustainable, measurable results set us apart. We focus on building internal capabilities rather than creating dependency. Our proprietary BoldPath Framework™ ensures that every engagement includes knowledge transfer and skill development for your team. Additionally, our consultants have an average of 10+ years of experience in both corporate HR leadership and consulting roles."
  },
  {
    question: "How do you ensure confidentiality with client information?",
    answer: "We maintain strict confidentiality protocols and can provide non-disclosure agreements as needed. Client anonymity is protected in all case studies and marketing materials unless explicit permission is given. We use encrypted communication channels, secure document sharing platforms, and follow ISO 27001 information security standards. Our team members sign comprehensive confidentiality agreements, and we conduct annual security training to ensure compliance with our privacy policies."
  },
  {
    question: "Can you help with HR technology implementation?",
    answer: "Absolutely. We specialize in HR technology strategy, selection, and implementation. Our services include needs assessment, vendor evaluation, system configuration, data migration, user training, and ongoing support. We work with leading platforms like BambooHR, Workday, SAP SuccessFactors, and local solutions. Our implementation approach ensures minimal disruption to your operations while maximizing user adoption and system ROI."
  },
  {
    question: "What is your approach to diversity and inclusion consulting?",
    answer: "Our D&I approach is data-driven and culturally sensitive. We begin with a comprehensive assessment of your current state, including employee surveys, policy reviews, and leadership interviews. Our interventions include unconscious bias training, inclusive leadership development, policy revision, and the establishment of employee resource groups. We measure success through diversity metrics, inclusion index scores, and qualitative feedback. Our programs are tailored to the Kenyan and East African context while incorporating global best practices."
  }
];

export function FAQ(): JSX.Element {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleContactClick = () => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If no contact section, open chat or show alert
      const chatButton = document.querySelector('button[aria-label="Open live chat"]');
      if (chatButton) {
        (chatButton as HTMLElement).click();
      } else {
        alert('Please scroll to the bottom of the page to contact us, or use the chat icon in the bottom right corner.');
      }
    }
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
          
          {/* Search Box */}
          <div className="max-w-2xl mx-auto mt-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              <svg 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12">
              <svg 
                className="w-16 h-16 mx-auto text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">No questions found</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">Try different search terms or contact us directly</p>
              <button 
                onClick={() => setSearchTerm('')}
                className="mt-4 px-4 py-2 bg-accent text-white rounded-lg hover:bg-primary transition-colors mr-2"
              >
                Clear Search
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-4 border border-gray-200 rounded-xl overflow-hidden dark:border-gray-700"
              >
                <button
                  className="w-full flex justify-between items-center p-5 md:p-6 text-left bg-white hover:bg-gray-50 transition-colors dark:bg-gray-800 dark:hover:bg-gray-700"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <h3 className="text-lg md:text-xl font-semibold text-primary pr-4 dark:text-white">{faq.question}</h3>
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
                    <div className="p-5 md:p-6 pt-0 border-t border-gray-100 dark:border-gray-700 dark:bg-gray-800">
                      <p className="text-gray-600 font-normal dark:text-gray-300">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))
          )}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-gray-600 mb-4 dark:text-gray-400">Still have questions?</p>
          <button 
            onClick={handleContactClick}
            className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-primary transition-colors font-medium"
          >
            Contact Our Team
          </button>
        </div>
      </div>
    </section>
  );
}