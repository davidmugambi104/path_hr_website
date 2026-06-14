import React, { useState } from 'react';
import { company } from '../../lib/content';
import { motion } from 'framer-motion';

const teamMembers = [
  { 
    name: 'Wambui Njoroge', 
    role: 'Managing Director', 
    image: '', 
    bio: '20+ years in HR strategy and organizational development. Leads strategic HR transformations and governance initiatives across East Africa.',
    expertise: ['Strategic HR Management', 'HR Leadership & Governance', 'Change Management', 'Organizational Development', 'HR Analytics'],
    linkedin: '#'
  },
  { 
    name: 'David Mugambi', 
    role: 'HR Director', 
    image: '', 
    bio: 'Certified HR Professional specializing in talent management, employee relations, and performance optimization. Expert in Kenyan labour laws.',
    expertise: ['Talent Acquisition & Selection', 'Employee Relations', 'Performance Management (OKR)', 'Compensation & Benefits', 'Labour Laws Compliance'],
    linkedin: '#'
  },
  { 
    name: 'Grace Wanjiku', 
    role: 'Senior Consultant', 
    image: '', 
    bio: 'Training and development specialist with expertise in designing customized learning solutions for diverse organizations across multiple sectors.',
    expertise: ['Training & Development Programs', 'Employee Engagement', 'Wellness & Stress Management', 'Skills Assessment', 'E-Learning Solutions'],
    linkedin: '#'
  },
  { 
    name: 'Joseph Otieno', 
    role: 'Training Lead', 
    image: '', 
    bio: 'Instructional design expert specializing in adult learning, digital training platforms, and facilitation of technical HR and business programs.',
    expertise: ['Instructional Design', 'HR Information Systems', 'Records Management', 'Digital Learning Platforms', 'Workshop Facilitation'],
    linkedin: '#'
  }
];

export function Team(): JSX.Element {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  return (
    <section id="team" className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-primary mb-4 md:mb-6 tracking-wider">
            Our <span className="text-accent">Team</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-normal">
            {company.team.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-surface rounded-2xl p-6 md:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 card-hover"
              onClick={() => setSelectedMember(selectedMember === index ? null : index)}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 bg-primary/10 rounded-full flex items-center justify-center text-primary font-display font-bold text-xl md:text-2xl mx-auto mb-5">
                {member.name.charAt(0)}
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-primary mb-1">{member.name}</h3>
              <p className="text-accent font-normal text-sm md:text-base mb-3">{member.role}</p>
              
              {selectedMember === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 pt-4 border-t border-gray-200 text-left"
                >
                  <p className="text-gray-600 font-normal text-sm mb-3">{member.bio}</p>
                  <div className="mb-3">
                    <h4 className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">Expertise</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="bg-accent/10 text-accent text-xs px-2 py-1 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a 
                    href={member.linkedin} 
                    className="text-accent text-sm font-medium hover:underline flex items-center"
                  >
                    View LinkedIn
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </motion.div>
              )}
              
              <div className="mt-3 text-accent text-sm font-medium font-normal flex items-center justify-center">
                {selectedMember === index ? 'Show less' : 'View profile'}
                <svg 
                  className={`w-4 h-4 ml-1 transition-transform ${selectedMember === index ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}