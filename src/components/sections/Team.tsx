import React from 'react';
import { company } from '../../lib/content';

export function Team(): JSX.Element {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary mb-6">
            Our <span className="text-accent">Team</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-sans">
            {company.team.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {company.team.members.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-3xl font-display font-bold text-white">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h3 className="text-xl font-display font-bold text-primary">{member.name}</h3>
              <p className="text-accent font-sans text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}