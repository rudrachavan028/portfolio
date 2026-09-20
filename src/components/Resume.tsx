import React from 'react';
import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { Download, FileText, CheckCircle2, Eye, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data';

export default function Resume() {
  const resumeUrl = portfolioData.hero.resumeUrl;

  return (
    <section id="resume" className="py-20 relative z-10 p-6">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Resume" subtitle="Detailed overview of my professional qualifications." align="center" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden group mt-12"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10 border-b border-white/5 pb-8 mb-8">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-sky-400 shadow-lg shadow-sky-500/10">
                <FileText size={40} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Rudra Chavan - Resume</h3>
                <p className="text-slate-400 font-mono text-sm tracking-wider uppercase">PDF Document</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white hover:text-sky-400 hover:bg-white/10 font-bold rounded-xl transition-all whitespace-nowrap text-sm"
              >
                <Eye size={18} />
                Open Tab
              </a>
              <a 
                href={resumeUrl}
                download="Rudra_Chavan_Resume.pdf"
                className="flex items-center gap-2 px-6 py-3 bg-sky-500 text-slate-950 hover:bg-sky-400 font-bold rounded-xl transition-all shadow-xl shadow-sky-500/20 whitespace-nowrap text-sm"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>
          </div>

          {/* PDF Preview Container */}
          <div className="relative z-10 w-full h-[600px] bg-slate-900/50 rounded-2xl border border-white/5 overflow-hidden mb-12">
             <object 
               data={`${resumeUrl}#view=FitH`} 
               type="application/pdf" 
               className="w-full h-full"
             >
               <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 bg-slate-900/50 p-6 text-center">
                  <FileText size={48} className="mb-4 text-slate-600" />
                  <p className="text-lg text-white font-medium mb-1">Resume preview not loaded.</p>
                  <p className="text-sm max-w-md">Please upload your resume named <code className="text-sky-400 bg-sky-400/10 px-1 py-[2px] rounded text-xs mx-1">resume.pdf</code> to the <code className="text-white text-xs bg-white/10 px-1 py-[2px] rounded">public/</code> folder.</p>
               </div>
             </object>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10 pt-4">
            {[
              "AI & Machine Learning Focus",
              "Data Analytics & Pipelines",
              "Full-Stack Web Development",
              "Software Engineering Practices"
            ].map((highlight, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="text-sky-400" size={20} />
                <span className="text-slate-300 font-medium">{highlight}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
