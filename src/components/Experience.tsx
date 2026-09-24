import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { portfolioData } from '../data';
import { Briefcase, Calendar, MapPin, Building2 } from 'lucide-react';

export default function Experience() {
  const expData = portfolioData.experience[0];
  const [photoError, setPhotoError] = useState(false);

  return (
    <section id="experience" className="py-14 sm:py-20 relative z-10 bg-slate-900/30 border-y border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Experience" 
          subtitle="My professional industry internship and hands-on technical work" 
        />

        {/* Clean, Simple Experience Card */}
        <div className="mt-8 sm:mt-10 glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 bg-slate-900/60 shadow-xl">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8">
            
            {/* 1. Photo */}
            <div className="w-full md:w-64 shrink-0">
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-800 border border-white/10 relative shadow-md">
                {!photoError ? (
                  <img 
                    src={expData.photo || "/interns.jpg"} 
                    alt={expData.role}
                    onError={() => setPhotoError(true)}
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-slate-850">
                    <div className="w-12 h-12 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center mb-2">
                      <Briefcase size={24} />
                    </div>
                    <span className="text-xs font-semibold text-slate-300">
                      {expData.company}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Content Details */}
            <div className="flex-1 w-full space-y-4 text-left">
              
              {/* 2. Name of Role & 4. Duration */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-white/5 pb-3">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {expData.role}
                  </h3>
                  
                  {/* 3. Organization */}
                  <div className="mt-1 flex items-center gap-2 text-sky-400 text-sm sm:text-base font-medium">
                    <Building2 size={16} className="shrink-0 text-sky-400" />
                    <span>{expData.company}</span>
                  </div>
                </div>

                {/* Duration & Location */}
                <div className="flex flex-col sm:items-end text-xs font-mono text-slate-400 gap-1">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">
                    <Calendar size={13} className="text-sky-400" />
                    {expData.duration}
                  </span>
                  {expData.location && (
                    <span className="inline-flex items-center gap-1 text-slate-400 text-[11px]">
                      <MapPin size={12} />
                      {expData.location}
                    </span>
                  )}
                </div>
              </div>

              {/* 5. Short Info */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {expData.description}
              </p>

              {/* 6. Key Points */}
              {expData.keyPoints && expData.keyPoints.length > 0 && (
                <div className="pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-2.5">
                    Key Points & Skills
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {expData.keyPoints.map((point, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs sm:text-sm font-medium"
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
