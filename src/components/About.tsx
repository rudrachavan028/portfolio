import React from 'react';
import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { portfolioData } from '../data';
import { GraduationCap, Code2, BrainCircuit } from 'lucide-react';

export default function About() {
  const { bio, education } = portfolioData.about;

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About Me" subtitle="My background, education, and what drives me." />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start mt-8 sm:mt-12">
          
          {/* Bio side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-5 sm:p-8 rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-6 relative">
              <BrainCircuit className="text-cyan-400" size={32} />
              <h3 className="text-xl sm:text-2xl font-bold text-white">The Journey</h3>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
            </div>
            
            <p className="text-slate-300 leading-relaxed text-base sm:text-lg mb-6">
              {bio}
            </p>
            
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
              <div className="glass-panel border-cyan-500/20 p-3 sm:p-4 rounded-xl text-center">
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1">Passionate</div>
                <div className="text-xs sm:text-sm text-slate-400">About Innovation</div>
              </div>
              <div className="glass-panel border-blue-500/20 p-3 sm:p-4 rounded-xl text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">Focused</div>
                <div className="text-xs sm:text-sm text-slate-400">On Results</div>
              </div>
            </div>
          </motion.div>

          {/* Education side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <GraduationCap className="text-blue-400" size={32} />
              <h3 className="text-xl sm:text-2xl font-bold text-white">Education</h3>
            </div>
            
            {education.map((edu, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel relative overflow-hidden p-5 sm:p-6 rounded-xl border-l-4 border-l-blue-500 glass-panel-hover"
              >
                {edu.percentage && (
                  <div className="absolute top-0 right-0 bg-blue-500/15 text-blue-400 px-3 py-1 rounded-bl-lg font-mono text-xs sm:text-sm font-bold border-b border-l border-blue-500/20">
                    {edu.percentage}
                  </div>
                )}
                <h4 className={`text-lg sm:text-xl font-bold text-white mb-2 ${edu.percentage ? 'pr-16' : ''}`}>{edu.degree}</h4>
                <p className="text-slate-400 text-sm sm:text-base">{edu.institution}</p>
              </motion.div>
            ))}
            
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
