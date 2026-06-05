import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "HR Director, TechInnovate Ltd",
    content: "BoldPath HR transformed our onboarding process and reduced turnover by 40% in just six months. Their strategic approach to talent acquisition is unmatched in the industry.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Ochieng",
    role: "CEO, Nairobi Growth Partners",
    content: "Working with BoldPath HR on our leadership development program was a game-changer. Our management team's effectiveness improved dramatically, and employee engagement scores reached an all-time high.",
    rating: 5
  },
  {
    id: 3,
    name: "Grace Wambui",
    role: "Operations Manager, HealthFirst NGO",
    content: "The organizational culture transformation led by BoldPath HR helped us navigate a major restructuring while maintaining team morale and productivity. Their expertise in change management is exceptional.",
    rating: 5
  }
];

export function Testimonials(): JSX.Element {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary mb-4 md:mb-6">
            Client <span className="text-accent">Testimonials</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-sans">
            Hear from organizations that have transformed their workplaces with our help
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow h-full"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg 
                    key={i} 
                    className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-gray-600 font-sans text-sm md:text-base mb-6 italic">"{testimonial.content}"</p>
              
              <div className="flex items-center mt-auto">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-display font-bold mr-3 md:mr-4 text-sm md:text-base">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-display font-bold text-primary text-sm md:text-base">{testimonial.name}</h4>
                  <p className="text-gray-500 text-xs md:text-sm font-sans">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}