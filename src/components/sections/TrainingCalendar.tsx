import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface TrainingProgram {
  title: string;
  dates: string[];
  venues: string[];
  fee?: string;
  duration?: string;
}

const trainingData: TrainingProgram[] = [
  {
    title: 'Talent Optimization - Pillars of Talent Management',
    dates: ['Aug 17-21, 2026', 'Mar 15-19, 2027'],
    venues: ['Naivasha', 'Mombasa'],
    fee: 'Kshs. 85,000 + VAT',
    duration: '1 Week'
  },
  {
    title: 'Fundamentals of HR Functions',
    dates: ['Aug 10-14, 2026', 'Jan 11-15, 2027'],
    venues: ['Nakuru', 'Machakos'],
    fee: 'Kshs. 85,000 + VAT',
    duration: '1 Week'
  },
  {
    title: 'HR Leadership, Ethics & Governance',
    dates: ['Aug 17-21, 2026', 'Mar 15-19, 2027'],
    venues: ['Mombasa'],
    fee: 'Kshs. 85,000 + VAT',
    duration: '1 Week'
  }
];

const allTrainingData: TrainingProgram[] = [
  ...trainingData,
  {
    title: 'Compensation & Reward Management',
    dates: ['Jan 11-15, 2027'],
    venues: ['Mombasa'],
    fee: 'Kshs. 85,000 + VAT',
    duration: '1 Week'
  },
  {
    title: 'Employee Engagement Best Practices',
    dates: ['Nov 3-7, 2026', 'Feb 15-19, 2027'],
    venues: ['Nakuru'],
    fee: 'Kshs. 85,000 + VAT',
    duration: '1 Week'
  },
  {
    title: 'Recruitment and Selection Training',
    dates: ['Aug 17-21, 2026', 'Mar 15-19, 2027'],
    venues: ['Naivasha', 'Mombasa'],
    fee: 'Kshs. 85,000 + VAT',
    duration: '1 Week'
  },
  {
    title: 'Workplace Conflicts & Grievance Handling',
    dates: ['Aug 10-14, 2026', 'Jan 11-15, 2027'],
    venues: ['Nakuru'],
    fee: 'Kshs. 85,000 + VAT',
    duration: '1 Week'
  },
  {
    title: 'Employee Resourcing & Recruitment Skills',
    dates: ['Aug 10-14, 2026', 'Jan 11-15, 2027'],
    venues: ['Kisumu'],
    fee: 'Kshs. 85,000 + VAT',
    duration: '1 Week'
  },
  {
    title: 'Managing Performance with OKR',
    dates: ['Nov 3-7, 2026', 'Feb 15-19, 2027'],
    venues: ['Naivasha', 'Mombasa'],
    fee: 'Kshs. 85,000 + VAT',
    duration: '1 Week'
  },
  {
    title: 'Essentials of HR Management',
    dates: ['Aug 17-21, 2026', 'Mar 15-19, 2027'],
    venues: ['Nakuru', 'Machakos'],
    fee: 'Kshs. 85,000 + VAT',
    duration: '1 Week'
  },
  {
    title: 'Industrial & Employee Relations Program',
    dates: ['Aug 10-14, 2026', 'Jan 11-15, 2027'],
    venues: ['Mombasa'],
    fee: 'Kshs. 85,000 + VAT',
    duration: '1 Week'
  },
  {
    title: 'HR Processes & Change Management',
    dates: ['Sept 21-25, 2026', 'Jan 18-22, 2027'],
    venues: ['Mombasa'],
    fee: 'Kshs. 85,000 + VAT',
    duration: '1 Week'
  },
  {
    title: 'Employee Wellness & Stress Management',
    dates: ['Aug 17-21, 2026', 'Mar 15-19, 2027'],
    venues: ['Kisumu'],
    fee: 'Kshs. 85,000 + VAT',
    duration: '1 Week'
  },
  {
    title: 'HR Information Systems for Non-HR',
    dates: ['Aug 10-14, 2026', 'Jan 11-15, 2027'],
    venues: ['Machakos'],
    fee: 'Kshs. 85,000 + VAT',
    duration: '1 Week'
  },
  {
    title: 'Human Capital Management & Learning',
    dates: ['Aug 17-21, 2026', 'Mar 15-19, 2027'],
    venues: ['Mombasa'],
    fee: 'Kshs. 85,000 + VAT',
    duration: '1 Week'
  },
  {
    title: 'HR Metrics with AI',
    dates: ['Aug 10-14, 2026', 'Jan 11-15, 2027'],
    venues: ['Kisumu'],
    fee: 'Kshs. 85,000 + VAT',
    duration: '1 Week'
  },
  {
    title: 'Strategic HR Management',
    dates: ['Nov 3-7, 2026', 'Feb 15-19, 2027'],
    venues: ['Nakuru'],
    fee: 'Kshs. 85,000 + VAT',
    duration: '1 Week'
  },
  {
    title: 'HR Analytics Training',
    dates: ['Sept 21-25, 2026', 'Jan 18-22, 2027'],
    venues: ['Naivasha', 'Mombasa'],
    fee: 'Kshs. 85,000 + VAT',
    duration: '1 Week'
  },
  {
    title: 'Kenya Labour Laws & Industrial Relations',
    dates: ['Oct 26-30, 2026', 'Feb 15-19, 2027'],
    venues: ['Nakuru', 'Machakos'],
    fee: 'Kshs. 85,000 + VAT',
    duration: '1 Week'
  },
  {
    title: 'HR for Non-HR Professionals',
    dates: ['Sept 21-25, 2026', 'Jan 18-22, 2027'],
    venues: ['Mombasa'],
    fee: 'Kshs. 85,000 + VAT',
    duration: '1 Week'
  },
  {
    title: 'Value-Driven HR for Public Sector',
    dates: ['Nov 2-6, 2026', 'Feb 22-26, 2027'],
    venues: ['Mombasa'],
    fee: 'Kshs. 85,000 + VAT',
    duration: '1 Week'
  }
];

export function TrainingCalendar(): JSX.Element {
  const [showAll, setShowAll] = useState(false);
  
  const displayData = showAll ? allTrainingData : trainingData;

  return (
    <section id="training-calendar" className="py-14 md:py-18 lg:py-20 relative overflow-hidden bg-white">
      {/* Grid background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(30,58,138,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(234,179,8,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>
      
      {/* Animated blue and gold glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-900/5 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-amber-400/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      
      {/* Anamorphic lens flare - blue and gold */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] opacity-40">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/15 to-transparent rotate-45 blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-300/12 to-transparent -rotate-45 blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h3 
            className="text-lg sm:text-xl font-semibold text-gray-800 mb-2"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            2026/2027 TRAINING CALENDAR
          </h3>
          
          {/* Navy and gold underline with glow */}
          <div className="h-0.5 w-24 bg-gradient-to-r from-blue-900 via-amber-400 to-blue-900 mx-auto mt-3 shadow-[0_0_15px_rgba(30,58,138,0.4)]"></div>
          
          {/* Badge with glow */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-blue-900/30 rounded-md mt-4 shadow-[0_2px_10px_rgba(30,58,138,0.15)]">
            <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-900 to-amber-400 rounded-full shadow-[0_0_8px_rgba(234,179,8,0.6)] animate-pulse"></div>
            <span className="text-xs font-semibold text-blue-900 tracking-wide uppercase">NITA REG: TRN</span>
          </div>
          
          {/* Package details */}
          <div className="mt-6 inline-flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-gray-500">Fee:</span>
              <span className="font-bold text-blue-900">Kshs. 85,000 + VAT</span>
            </div>
            <div className="w-px h-4 bg-gradient-to-b from-transparent via-amber-300 to-transparent"></div>
            <div className="flex items-center gap-2">
              <span className="text-gray-500">Duration:</span>
              <span className="font-bold text-amber-600">1 Week</span>
            </div>
          </div>
        </div>

        {/* Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayData.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.04, 0.2), type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -6, 
                scale: 1.02,
                boxShadow: "0 12px 40px rgba(30,58,138,0.15), 0 0 0 1px rgba(234,179,8,0.2)"
              }}
              className="group relative bg-white/90 backdrop-blur-sm rounded-xl p-5 border border-gray-100 hover:border-blue-900/40 transition-all duration-400 overflow-hidden"
            >
              {/* Animated gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-amber-50/0 to-blue-50/0 
                group-hover:from-blue-50/50 group-hover:via-amber-50/30 group-hover:to-blue-50/50 
                transition-all duration-500 pointer-events-none"></div>
              
              {/* Corner flare effects on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/15 via-amber-400/10 to-transparent rounded-tr-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-amber-400/12 via-blue-400/10 to-transparent rounded-bl-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Scan line animation */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-400/8 to-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ animation: 'scan 3s linear infinite' }}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Title */}
                <h4 
                  className="text-sm font-bold text-gray-900 mb-3 leading-snug line-clamp-2"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                  {program.title}
                </h4>
                
                {/* Gradient divider */}
                <div className="h-px w-full bg-gradient-to-r from-blue-900/30 via-amber-400/20 to-transparent mb-3"></div>
                
                {/* Details */}
                <div className="space-y-2 text-xs">
                  {/* Dates with navy icon box */}
                  <div className="flex items-start gap-2.5">
                    <div className="w-7 h-7 bg-gradient-to-br from-blue-900/10 to-blue-800/5 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5
                      border border-blue-900/20 group-hover:border-blue-900/40 group-hover:shadow-[0_0_15px_rgba(30,58,138,0.3)] transition-all duration-300">
                      <svg className="w-3.5 h-3.5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      {program.dates.map((date, dateIndex) => (
                        <p key={dateIndex} className="text-gray-700 font-medium leading-tight">
                          {date}
                        </p>
                      ))}
                    </div>
                  </div>
                  
                  {/* Venue with gold icon box */}
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 bg-gradient-to-br from-amber-400/15 to-amber-300/8 rounded-lg flex items-center justify-center flex-shrink-0
                      border border-amber-400/25 group-hover:border-amber-400/50 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] transition-all duration-300">
                      <svg className="w-3.5 h-3.5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">
                      {program.venues.join(' • ')}
                    </span>
                  </div>
                  
                  {/* Duration */}
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 bg-gradient-to-br from-blue-900/10 to-blue-800/5 rounded-lg flex items-center justify-center flex-shrink-0
                      border border-blue-900/20 group-hover:border-blue-900/40 group-hover:shadow-[0_0_15px_rgba(30,58,138,0.3)] transition-all duration-300">
                      <svg className="w-3.5 h-3.5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-gray-600">{program.duration}</span>
                  </div>
                  
                  {/* Fee with gold emphasis */}
                  <div className="pt-2 mt-2 border-t border-gray-100 flex items-center gap-2.5">
                    <div className="w-7 h-7 bg-gradient-to-br from-amber-400/20 to-amber-300/15 rounded-lg flex items-center justify-center flex-shrink-0
                      border border-amber-400/30 group-hover:border-amber-400/60 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-all duration-300">
                      <svg className="w-3.5 h-3.5 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-blue-900 font-bold">{program.fee}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See More Button with flare effect */}
        {!showAll && (
          <div className="text-center mt-10">
            <motion.button
              onClick={() => setShowAll(true)}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.06, 
                y: -3,
                boxShadow: "0 15px 40px rgba(30,58,138,0.3), 0 0 0 2px rgba(234,179,8,0.3)"
              }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 
                bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 
                text-white text-sm font-semibold rounded-lg
                border border-blue-900/30
                shadow-[0_6px_20px_rgba(30,58,138,0.25)]
                hover:shadow-[0_15px_45px_rgba(30,58,138,0.4)]
                transition-all duration-400 relative overflow-hidden"
            >
              {/* Animated shine/flare effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800"></div>
              
              <span className="relative z-10">View All {allTrainingData.length} Programs</span>
              <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.button>
          </div>
        )}

        {/* Notes */}
        <div className="mt-10 pt-6 border-t border-gray-100">
          <p className="text-[10px] text-gray-500 text-center max-w-3xl mx-auto leading-relaxed">
            Prices exclude VAT. Venues subject to change. Customized training available. Early bird discounts for registrations 6 weeks in advance.
          </p>
        </div>
      </div>
      
      {/* Custom CSS for scan animation */}
      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
}
