import React from 'react';
import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { portfolioData } from '../data';
import { Mail, MapPin, Phone, Github, Linkedin, Code2 } from 'lucide-react';

export default function Contact() {
  const { email, location, phone, linkedin, github, leetcode } = portfolioData.hero;

  return (
    <section id="contact" className="py-20 relative z-10 border-t border-white/5 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Get In Touch" subtitle="I'm currently seeking internship and professional opportunities." />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          
          {/* Contact Info side */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-1 lg:col-span-2 max-w-4xl mx-auto w-full text-center"
          >
            <h3 className="text-3xl font-bold text-white mb-6">Let's build something intelligent.</h3>
            <p className="text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto">
              Whether you have a question, want to collaborate on an AI problem, or want to discuss opportunities, my inbox is always open. I'll try my best to get back to you!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <a href={`mailto:${email}`} className="flex flex-col items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors group p-6 glass-panel rounded-xl">
                <div className="p-4 bg-slate-800 rounded-full group-hover:bg-cyan-500/20 transition-colors">
                  <Mail size={32} className="text-blue-400 group-hover:text-cyan-400" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-1">Email</div>
                  <div className="font-medium">{email}</div>
                </div>
              </a>

              <a href={`tel:${phone.replace(/\s+/g, '')}`} className="flex flex-col items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors group p-6 glass-panel rounded-xl">
                <div className="p-4 bg-slate-800 rounded-full group-hover:bg-cyan-500/20 transition-colors">
                  <Phone size={32} className="text-blue-400 group-hover:text-cyan-400" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-1">Phone</div>
                  <div className="font-medium">{phone}</div>
                </div>
              </a>
              
              <div className="flex flex-col items-center gap-4 text-slate-300 p-6 glass-panel rounded-xl">
                <div className="p-4 bg-slate-800 rounded-full">
                  <MapPin size={32} className="text-blue-400" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-1">Location</div>
                  <div className="font-medium">{location}</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <a href={linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 bg-[#0a66c2] hover:bg-[#004182] text-white rounded-md font-medium transition-colors">
                <Linkedin size={20} /> LinkedIn
              </a>
              <a href={github} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 bg-[#24292e] hover:bg-[#1b1f23] text-white rounded-md font-medium transition-colors border border-slate-700">
                <Github size={20} /> GitHub
              </a>
              <a href={leetcode} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 glass-panel text-white hover:text-cyan-400 rounded-md font-medium transition-colors">
                <Code2 size={20} /> LeetCode
              </a>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
