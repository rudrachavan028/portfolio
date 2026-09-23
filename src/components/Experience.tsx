import React from 'react';
import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { portfolioData } from '../data';
import { Briefcase, Award, BookOpen } from 'lucide-react';

export default function Experience() {
  const { experience, achievements, publications } = portfolioData;

  return (
    <section id="experience" className="py-20 relative z-10 bg-slate-900/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Experience & Achievements" subtitle="My professional journey and milestones." />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          
          {/* Experience Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-blue-400" size={28} />
              <h3 className="text-2xl font-bold text-white">Internships</h3>
            </div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:to-cyan-500">
              {experience.map((exp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-slate-800 text-blue-400 font-bold group-hover:bg-blue-500 group-hover:text-white transition-colors absolute left-0 md:left-1/2 md:-translate-x-1/2 shrink-0 z-10">
                    <Briefcase size={16} />
                  </div>
                  <div className="w-[calc(100%-3.5rem)] sm:w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-4 sm:p-6 rounded-xl ml-12 sm:ml-14 md:ml-0 group-hover:border-blue-500/50 transition-colors">
                    <div className="flex flex-col mb-2">
                      <span className="text-xs sm:text-sm font-mono text-blue-400">{exp.duration}</span>
                      <h4 className="text-lg sm:text-xl font-bold text-white mt-1">{exp.title}</h4>
                      <span className="text-slate-400 text-sm font-medium">{exp.company}</span>
                    </div>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-2 sm:mt-3">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="text-cyan-400" size={28} />
              <h3 className="text-2xl font-bold text-white">Key Achievements</h3>
            </div>

            <div className="bg-slate-800/40 rounded-2xl p-6 border border-slate-700/50 mb-8">
              <ul className="space-y-4 relative">
                {achievements.map((achievement, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-700/30 transition-colors group"
                  >
                    <div className="mt-1 flex-shrink-0 p-1 bg-cyan-900/30 text-cyan-400 rounded group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                      <Award size={18} />
                    </div>
                    <p className="text-slate-300 font-medium leading-relaxed group-hover:text-white transition-colors">
                      {achievement}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="text-purple-400" size={28} />
              <h3 className="text-2xl font-bold text-white">Publications</h3>
            </div>

            <div className="bg-slate-800/40 rounded-2xl p-6 border border-slate-700/50">
              <div className="space-y-6">
                {publications?.map((pub, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative p-5 rounded-xl border border-white/5 bg-white/5 hover:border-purple-500/30 transition-colors group"
                  >
                    <div className="flex justify-between items-start mb-2">
                       <h4 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">{pub.title}</h4>
                       <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-2 py-1 rounded border border-purple-500/20">{pub.date}</span>
                    </div>
                    <p className="text-sm text-slate-400 font-medium mb-3">{pub.conference}</p>
                    <p className="text-slate-300 text-sm leading-relaxed">{pub.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
