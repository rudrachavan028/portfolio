import React, { useState } from 'react';
import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { portfolioData } from '../data';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Cpu, 
  LineChart, 
  Brain, 
  BarChart3, 
  Sparkles, 
  Database,
  ExternalLink,
  BookOpen
} from 'lucide-react';

export default function Experience() {
  const expData = portfolioData.experience[0];
  const { publications } = portfolioData;
  const [photoError, setPhotoError] = useState(false);

  // Map key points to relevant icons
  const getKeyPointIcon = (point: string) => {
    const p = point.toLowerCase();
    if (p.includes('machine learning') || p.includes('model')) return <Brain className="text-sky-400" size={16} />;
    if (p.includes('science') || p.includes('analytics')) return <LineChart className="text-cyan-400" size={16} />;
    if (p.includes('visualization')) return <BarChart3 className="text-indigo-400" size={16} />;
    if (p.includes('preprocess') || p.includes('database')) return <Database className="text-emerald-400" size={16} />;
    if (p.includes('scikit') || p.includes('python')) return <Cpu className="text-blue-400" size={16} />;
    return <Sparkles className="text-amber-400" size={16} />;
  };

  return (
    <section id="experience" className="py-16 sm:py-24 relative z-10 bg-slate-950/60 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Experience" 
          subtitle="Hands-on industry training and professional machine learning engineering" 
        />

        {/* Main Experience Showcase */}
        <div className="mt-8 sm:mt-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-6 sm:p-8 lg:p-10 rounded-3xl border border-sky-500/20 bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-indigo-950/30 relative overflow-hidden shadow-2xl"
          >
            {/* Ambient background blur inside card */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              
              {/* Photo Column with Animation */}
              <motion.div 
                className="lg:col-span-5 flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="relative group w-full max-w-sm sm:max-w-md">
                  {/* Glowing Animated Outer Border Ring */}
                  <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-sky-500 via-indigo-500 to-cyan-400 opacity-60 blur-md group-hover:opacity-100 transition duration-700 animate-pulse" />
                  
                  <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-white/10 aspect-[4/3] sm:aspect-[4/3] flex items-center justify-center shadow-2xl">
                    {!photoError ? (
                      <img 
                        src={expData.photo || "/interns.jpg"} 
                        alt={expData.role}
                        onError={() => setPhotoError(true)}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      /* Fallback visually stunning card */
                      <div className="w-full h-full p-8 flex flex-col items-center justify-center text-center bg-gradient-to-br from-slate-900 via-sky-950/40 to-slate-900 relative">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-xl shadow-sky-500/25 mb-4 group-hover:scale-110 transition-transform">
                          <Briefcase size={36} />
                        </div>
                        <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold mb-1">
                          Industry Internship
                        </span>
                        <h5 className="text-lg font-bold text-white mb-2">
                          Domain IT Services
                        </h5>
                        <p className="text-xs text-slate-400 max-w-xs">
                          Applied Data Analytics, Model Architecture & Machine Learning Pipelines
                        </p>
                      </div>
                    )}

                    {/* Gradient Overlay & Verified Badge */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent pointer-events-none" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-950/80 backdrop-blur-md border border-sky-400/30 text-sky-300 flex items-center gap-1.5 shadow-lg">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        Verified Internship
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-xs font-mono text-slate-300 flex items-center justify-between">
                        <span className="flex items-center gap-1 text-sky-300">
                          <Calendar size={13} /> {expData.duration}
                        </span>
                        <span className="flex items-center gap-1 text-slate-400">
                          <MapPin size={13} /> {expData.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Caption under photo */}
                  <div className="mt-3 text-center">
                    <p className="text-xs text-slate-400 italic">
                      Domain IT Services — Machine Learning & Data Analytics Unit
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Information Column */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Role of Job (Header) & Company Name (Sub Header) */}
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-3">
                    <Briefcase size={14} />
                    <span>Role of Job</span>
                  </div>

                  {/* Main Header: Role */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                    {expData.role}
                  </h3>

                  {/* Sub Header: Company Name */}
                  <div className="mt-2 flex flex-wrap items-center gap-3">
                    <span className="text-lg sm:text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-300">
                      {expData.company}
                    </span>
                    <span className="text-slate-600 hidden sm:inline">•</span>
                    <span className="text-xs sm:text-sm font-mono text-slate-400 px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10">
                      {expData.duration}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {expData.description}
                </p>

                {/* Key Points Section: Machine Learning, Data Science, Data Visualization */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold mb-3 flex items-center gap-2">
                    <Sparkles size={14} className="text-sky-400" />
                    Key Competencies & Technologies
                  </h4>
                  
                  <div className="flex flex-wrap gap-2.5">
                    {expData.keyPoints?.map((point, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-sky-400/50 hover:bg-sky-500/10 text-slate-200 text-xs sm:text-sm font-medium flex items-center gap-2 shadow-sm transition-colors cursor-default"
                      >
                        {getKeyPointIcon(point)}
                        <span>{point}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Key Contributions / Highlights */}
                {expData.highlights && expData.highlights.length > 0 && (
                  <div className="pt-2 border-t border-white/5">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold mb-3">
                      Key Highlights & Contributions
                    </h4>
                    <ul className="space-y-2.5">
                      {expData.highlights.map((highlight, idx) => (
                        <motion.li 
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * idx }}
                          className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed group"
                        >
                          <CheckCircle2 size={16} className="text-sky-400 shrink-0 mt-0.5 group-hover:text-cyan-300 transition-colors" />
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>

            </div>
          </motion.div>
        </div>

        {/* Research Publication Card (if present) */}
        {publications && publications.length > 0 && (
          <div className="mt-12 sm:mt-16">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="text-purple-400" size={24} />
              <h3 className="text-xl sm:text-2xl font-bold text-white">Research & Publications</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {publications.map((pub, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="glass-panel p-6 rounded-2xl border border-purple-500/20 bg-slate-900/40 hover:border-purple-500/40 transition-all group"
                >
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                      {pub.title}
                    </h4>
                    <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-full border border-purple-500/20 shrink-0">
                      {pub.date}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-purple-300/80 font-medium mb-3">
                    {pub.conference}
                  </p>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {pub.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
