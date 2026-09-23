import React from 'react';
import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { portfolioData } from '../data';
import { Award, ExternalLink } from 'lucide-react';

export default function Certificates() {
  const { certificates } = portfolioData;

  return (
    <section id="certificates" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Certifications" subtitle="Continuous learning and professional credentials." />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12">
          {certificates.map((cert, index) => (
            <motion.a 
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-panel p-6 rounded-xl cursor-pointer group glass-panel-hover text-center relative overflow-hidden h-48 flex flex-col justify-center items-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-4 right-4 text-slate-500 group-hover:text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink size={18} />
              </div>
              <div className="p-3 bg-slate-800 rounded-full text-slate-300 group-hover:text-cyan-400 group-hover:bg-slate-800 transition-all mb-4">
                <Award size={28} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{cert.title}</h4>
              <p className="text-sm font-mono text-cyan-400">{cert.issuer}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
