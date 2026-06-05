import React from 'react';
import { motion } from 'framer-motion';

const caseStudies = [
  {
    id: 1,
    title: "Digital Transformation at FinTech Startup",
    client: "PayMobi Solutions",
    industry: "Financial Technology",
    challenge: "Rapid scaling from 20 to 200 employees in 18 months created HR infrastructure gaps and cultural dilution.",
    solution: "Implemented scalable HR systems, redesigned onboarding process, and established leadership development programs.",
    results: "Reduced employee turnover by 35%, improved time-to-productivity by 40%, and maintained company culture during growth.",
    metrics: [
      { label: "Employee Retention", value: "+35%" },
      { label: "Time to Productivity", value: "-40%" },
      { label: "HR Efficiency", value: "+50%" }
    ]
  },
  {
    id: 2,
    title: "Cultural Transformation in Healthcare",
    client: "MediCare Regional Network",
    industry: "Healthcare",
    challenge: "Post-merger integration led to communication breakdowns and decreased staff morale across 15 facilities.",
    solution: "Designed comprehensive change management strategy, facilitated cross-organizational workshops, and established new communication protocols.",
    results: "Improved employee engagement scores by 45%, reduced conflict incidents by 60%, and achieved seamless organizational integration.",
    metrics: [
      { label: "Employee Engagement", value: "+45%" },
      { label: "Conflict Reduction", value: "-60%" },
      { label: "Retention Rate", value: "+25%" }
    ]
  }
];

export function CaseStudies(): JSX.Element {
  return (
    <section id="case-studies" className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary mb-4 md:mb-6">
            Case <span className="text-accent">Studies</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-sans">
            Real-world examples of organizational transformation
          </p>
        </div>

        <div className="space-y-12 md:space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 md:gap-12 items-center`}
            >
              <div className="lg:w-1/2">
                <div className="bg-surface rounded-2xl p-6 md:p-8 shadow-lg">
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-xs md:text-sm font-display font-semibold mb-4">
                    {study.industry}
                  </span>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-primary mb-3 md:mb-4">{study.title}</h3>
                  <p className="text-gray-600 font-sans text-sm md:text-base mb-2"><span className="font-semibold">Client:</span> {study.client}</p>
                  
                  <div className="mt-5 md:mt-6">
                    <h4 className="font-display font-bold text-primary mb-2 text-base md:text-lg">Challenge</h4>
                    <p className="text-gray-600 font-sans text-sm md:text-base mb-4">{study.challenge}</p>
                    
                    <h4 className="font-display font-bold text-primary mb-2 text-base md:text-lg">Solution</h4>
                    <p className="text-gray-600 font-sans text-sm md:text-base mb-4">{study.solution}</p>
                    
                    <h4 className="font-display font-bold text-primary mb-2 text-base md:text-lg">Results</h4>
                    <p className="text-gray-600 font-sans text-sm md:text-base mb-5 md:mb-6">{study.results}</p>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="grid grid-cols-3 gap-3 md:gap-4">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 text-center shadow-sm">
                      <div className="text-2xl md:text-3xl font-display font-bold text-accent mb-1">{metric.value}</div>
                      <div className="text-gray-600 font-sans text-xs md:text-sm">{metric.label}</div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 md:mt-8 bg-primary/5 rounded-2xl p-5 md:p-6">
                  <h4 className="font-display font-bold text-primary mb-3 text-base md:text-lg">Key Success Factors</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600 font-sans text-sm md:text-base">Stakeholder alignment from day one</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600 font-sans text-sm md:text-base">Data-driven approach to measure impact</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600 font-sans text-sm md:text-base">Sustainable change management practices</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 md:mt-16 text-center">
          <button className="bg-primary text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-display font-semibold hover:bg-primaryLight transition-colors text-base md:text-lg">
            View All Case Studies
          </button>
        </div>
      </div>
    </section>
  );
}