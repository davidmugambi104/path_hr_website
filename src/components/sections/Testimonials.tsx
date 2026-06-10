import React, { useState } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "HR Director, TechInnovate Ltd",
    company: "TechInnovate Ltd",
    content: "BoldPath HR transformed our onboarding process and reduced turnover by 40% in just six months. Their strategic approach to talent acquisition is unmatched in the industry. The personalized onboarding program they designed for us has become a key differentiator in attracting top talent.",
    rating: 5,
    date: "2024-03-15",
    verified: true,
    industry: "Technology",
    results: "40% reduction in employee turnover, 60% faster time-to-productivity"
  },
  {
    id: 2,
    name: "Michael Ochieng",
    role: "CEO, Nairobi Growth Partners",
    company: "Nairobi Growth Partners",
    content: "Working with BoldPath HR on our leadership development program was a game-changer. Our management team's effectiveness improved dramatically, and employee engagement scores reached an all-time high of 87%. The ROI on this investment has been exceptional.",
    rating: 5,
    date: "2024-01-22",
    verified: true,
    industry: "Consulting",
    results: "87% employee engagement score, 35% improvement in team performance metrics"
  },
  {
    id: 3,
    name: "Grace Wambui",
    role: "Operations Manager, HealthFirst NGO",
    company: "HealthFirst NGO",
    content: "The organizational culture transformation led by BoldPath HR helped us navigate a major restructuring while maintaining team morale and productivity. Their expertise in change management is exceptional. We retained 95% of our key staff during the transition.",
    rating: 5,
    date: "2023-11-30",
    verified: true,
    industry: "Non-profit",
    results: "95% key staff retention during restructuring, 40% improvement in cross-department collaboration"
  },
  {
    id: 4,
    name: "James Kimani",
    role: "Founder, AgriTech Solutions",
    company: "AgriTech Solutions",
    content: "As a startup scaling from 15 to 150 employees in 18 months, BoldPath HR's guidance was invaluable. They helped us establish scalable HR processes without the overhead of a full HR department. Their fractional HR services saved us over $200,000 in our first year.",
    rating: 5,
    date: "2024-04-10",
    verified: true,
    industry: "Agriculture Technology",
    results: "Scaled from 15 to 150 employees, $200K+ cost savings in HR operations"
  },
  {
    id: 5,
    name: "Fatuma Ali",
    role: "People Operations Lead, FinServe Group",
    company: "FinServe Group",
    content: "The diversity and inclusion strategy BoldPath HR implemented has transformed our workplace culture. We've increased representation of underrepresented groups in leadership by 35% and improved our Glassdoor rating from 3.2 to 4.5 stars. Their culturally sensitive approach was exactly what we needed.",
    rating: 5,
    date: "2024-02-18",
    verified: true,
    industry: "Financial Services",
    results: "35% increase in underrepresented leadership, Glassdoor rating improved from 3.2 to 4.5 stars"
  },
  {
    id: 6,
    name: "Robert Maina",
    role: "Regional Director, Global Retail Corp",
    company: "Global Retail Corp",
    content: "BoldPath HR's performance management system redesign saved us countless hours in administrative work while improving the quality of our performance reviews. Managers report 70% less time spent on reviews, and employees appreciate the more meaningful feedback they now receive.",
    rating: 4,
    date: "2023-12-05",
    verified: true,
    industry: "Retail",
    results: "70% reduction in performance review administration time, 40% improvement in employee feedback quality scores"
  }
];

const industries = ["All", "Technology", "Consulting", "Non-profit", "Agriculture Technology", "Financial Services", "Retail"];

export function Testimonials(): JSX.Element {
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [visibleTestimonials, setVisibleTestimonials] = useState(3);

  const filteredTestimonials = selectedIndustry === "All" 
    ? testimonials 
    : testimonials.filter(testimonial => testimonial.industry === selectedIndustry);

  const displayedTestimonials = filteredTestimonials.slice(0, visibleTestimonials);

  const loadMore = () => {
    setVisibleTestimonials(prev => Math.min(prev + 3, filteredTestimonials.length));
  };

  const resetFilters = () => {
    setSelectedIndustry("All");
    setVisibleTestimonials(3);
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6">
            Client <span className="text-accent">Success Stories</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-sans">
            Real results from organizations that have transformed their workplaces with our help
          </p>
        </div>

        {/* Industry Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {industries.map((industry) => (
            <button
              key={industry}
              onClick={() => {
                setSelectedIndustry(industry);
                setVisibleTestimonials(3);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedIndustry === industry
                  ? 'bg-accent text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {industry}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all h-full flex flex-col border border-gray-100"
            >
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`w-4 h-4 md:w-5 md:h-5 ${
                      i < testimonial.rating ? 'text-yellow-400' : 'text-gray-200'
                    }`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-sm text-gray-500">{testimonial.rating}.0</span>
              </div>
              
              {/* Testimonial Content */}
              <p className="text-gray-600 font-sans text-sm md:text-base mb-6 italic flex-grow">"{testimonial.content}"</p>
              
              {/* Results Highlight */}
              {testimonial.results && (
                <div className="mb-4 p-3 bg-green-50 rounded-lg border border-green-100">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-green-700 text-xs md:text-sm font-medium">{testimonial.results}</p>
                  </div>
                </div>
              )}
              
              {/* Author Info */}
              <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-display font-bold mr-3 md:mr-4 text-sm md:text-base">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="flex-grow">
                  <h4 className="font-display font-bold text-primary text-sm md:text-base">{testimonial.name}</h4>
                  <p className="text-gray-500 text-xs md:text-sm font-sans">{testimonial.role}</p>
                  <div className="flex items-center mt-1">
                    <span className="text-xs text-gray-400">{testimonial.date}</span>
                    {testimonial.verified && (
                      <span className="ml-2 inline-flex items-center text-xs text-blue-600">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Verified
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleTestimonials < filteredTestimonials.length && (
          <div className="text-center mt-10">
            <button
              onClick={loadMore}
              className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Load More Stories
            </button>
          </div>
        )}

        {/* Reset Filters */}
        {(selectedIndustry !== "All" || visibleTestimonials > 3) && (
          <div className="text-center mt-6">
            <button
              onClick={resetFilters}
              className="text-sm text-gray-500 hover:text-accent transition-colors"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">250+</div>
            <p className="text-gray-600">Clients Served</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">98%</div>
            <p className="text-gray-600">Client Retention</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">4.8/5</div>
            <p className="text-gray-600">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}