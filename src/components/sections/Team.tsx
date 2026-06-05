import React from 'react';
import { company } from '../../lib/content';
import { motion } from 'framer-motion';

export function Team(): JSX.Element {
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
          {company.team.members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-surface rounded-2xl p-6 md:p-8 text-center shadow-lg card-hover"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 bg-primary/10 rounded-full flex items-center justify-center text-primary font-display font-bold text-xl md:text-2xl mx-auto mb-5">
                {member.name.charAt(0)}
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-primary mb-1">{member.name}</h3>
              <p className="text-accent font-normal text-sm md:text-base">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}