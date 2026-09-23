import React from 'react';
import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { Download, FileText, CheckCircle2, Eye, Sparkles } from 'lucide-react';
import { portfolioData } from '../data';

export default function Resume() {
  const resumeUrl = portfolioData.hero.resumeUrl;

  return (
    <section id="resume" className="py-20 relative z-10 p-6">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Resume" 
          subtitle="Direct access to my professional qualifications and curriculum vitae." 
          align="center" 
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden group mt-12 border border-white/10 shadow-2xl bg-slate-900/70"
        >
          {/* Subtle decorative background glows */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Icon Header */}
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-sky-500/20 to-indigo-500/20 border border-sky-500/30 flex items-center justify-center text-sky-400 shadow-xl shadow-sky-500/10 mb-6">
              <FileText size={40} className="text-sky-400" />
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for Opportunities
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
              Rudra Rahul Chavan
            </h3>
            <p className="text-slate-400 max-w-xl text-base sm:text-lg mb-8 leading-relaxed">
              Explore my complete academic background, hands-on AI/ML project work, data engineering experience, and technical certifications.
            </p>
            
            {/* Action Buttons: Only View and Download */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10">
              <a 
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-slate-950 font-bold rounded-xl transition-all shadow-xl shadow-sky-500/20 hover:shadow-sky-500/40 text-sm group"
              >
                <Eye size={18} className="transition-transform group-hover:scale-110" />
                View Resume
              </a>
              <a 
                href={resumeUrl}
                download="Rudra_Rahul_Chavan_Resume.pdf"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-3.5 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-sky-500/40 text-white hover:text-sky-400 font-bold rounded-xl transition-all text-sm group shadow-lg"
              >
                <Download size={18} className="transition-transform group-hover:-translate-y-0.5" />
                Download CV
              </a>
            </div>

            {/* Highlights Grid */}
            <div className="w-full pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              {[
                "AI & Machine Learning Focus",
                "Data Analytics & Pipelines",
                "Full-Stack Web Development",
                "Software Engineering Practices"
              ].map((highlight, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <CheckCircle2 className="text-sky-400 shrink-0" size={18} />
                  <span className="text-slate-300 text-sm font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
