import React, { useState } from 'react';
import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { portfolioData } from '../data';
import { ExternalLink, CheckCircle2 } from 'lucide-react';

interface CompanyLogoProps {
  issuer: string;
  customLogo?: string;
}

// Company Logo Component: Displays user-provided logo URL if available, with authentic brand SVG fallback
const CompanyLogo = ({ issuer, customLogo }: CompanyLogoProps) => {
  const [imgFailed, setImgFailed] = useState(false);
  const norm = issuer.toLowerCase();

  // If user provided a custom logo link and it hasn't failed, render it
  if (customLogo && customLogo.trim() !== '' && !imgFailed) {
    return (
      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-1.5 shadow-inner group-hover:scale-105 group-hover:border-sky-400/40 transition-all overflow-hidden bg-slate-900/60">
        <img
          src={customLogo}
          alt={issuer}
          onError={() => setImgFailed(true)}
          className="w-full h-full object-contain"
        />
      </div>
    );
  }

  // 1. Google Cloud Logo Fallback
  if (norm.includes('google')) {
    return (
      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-2 shadow-inner group-hover:scale-105 group-hover:border-sky-400/40 transition-all">
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
          <path
            d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"
            fill="#4285F4"
          />
          <path
            d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-.7 0-1.38.1-2.03.3l4.28 4.28c.36-.07.72-.11 1.09-.11 1.65 0 3 1.35 3 3 0 .42-.1.82-.26 1.18l2.91 2.91c.62-.87.98-1.93.98-3.09 0-2.64-2.05-4.78-4.65-4.96z"
            fill="#EA4335"
          />
          <path
            d="M6 14c0-.6.13-1.16.36-1.68l-2.48-2.48C3.31 10.74 3 11.83 3 13c0 3.31 2.69 6 6 6h10c.84 0 1.63-.22 2.32-.61l-2.73-2.73C18.18 15.84 17.62 16 17 16H6c-1.1 0-2-.9-2-2z"
            fill="#34A853"
          />
          <path
            d="M9.97 4.3C6.6 5.64 5.35 8.04 5.35 8.04l3.88 3.88c.37-.9 1.05-1.63 1.9-2.09L9.97 4.3z"
            fill="#FBBC04"
          />
        </svg>
      </div>
    );
  }

  // 2. Microsoft & LinkedIn Dual Brand Logo Fallback
  if (norm.includes('microsoft') || norm.includes('linkedin')) {
    return (
      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-1.5 shadow-inner group-hover:scale-105 group-hover:border-sky-400/40 transition-all">
        <div className="flex items-center gap-1.5">
          {/* Microsoft 4-Color Grid */}
          <div className="grid grid-cols-2 gap-0.5 w-5 h-5">
            <div className="w-2 h-2 bg-[#f25022] rounded-[1px]" />
            <div className="w-2 h-2 bg-[#7fba00] rounded-[1px]" />
            <div className="w-2 h-2 bg-[#00a4ef] rounded-[1px]" />
            <div className="w-2 h-2 bg-[#ffb900] rounded-[1px]" />
          </div>
          {/* LinkedIn 'in' Icon */}
          <div className="w-5 h-5 rounded-[3px] bg-[#0a66c2] flex items-center justify-center text-white font-extrabold text-[10px] leading-none">
            in
          </div>
        </div>
      </div>
    );
  }

  // 3. Simplilearn Flame Brand Logo Fallback
  if (norm.includes('simplilearn')) {
    return (
      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-2 shadow-inner group-hover:scale-105 group-hover:border-sky-400/40 transition-all">
        <svg viewBox="0 0 36 36" className="w-8 h-8" fill="none">
          <rect width="36" height="36" rx="9" fill="#002b49" />
          <path
            d="M9 18c0-5.5 4.5-10 10-10 3.3 0 6.2 1.6 8 4.1l-3.2 1.8A6.3 6.3 0 0019 11.6c-3.5 0-6.4 2.9-6.4 6.4s2.9 6.4 6.4 6.4c2 0 3.8-.9 5-2.3l3.2 1.9C25.3 26.5 22.3 28 19 28c-5.5 0-10-4.5-10-10z"
            fill="#f58220"
          />
          <circle cx="19" cy="18" r="3.6" fill="#38bdf8" />
        </svg>
      </div>
    );
  }

  // 4. MKDRC / C++ Programming Logo Fallback
  return (
    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-2 shadow-inner group-hover:scale-105 group-hover:border-sky-400/40 transition-all">
      <svg viewBox="0 0 36 36" className="w-8 h-8" fill="none">
        <rect width="36" height="36" rx="9" fill="#004482" />
        <path
          d="M18 5l11 6.5v13L18 31 7 24.5V11.5L18 5z"
          fill="#00599C"
          stroke="#659AD2"
          strokeWidth="1.2"
        />
        <path
          d="M19 13.5c-3 0-5 2-5 4.5s2 4.5 5 4.5c1.8 0 3.2-.8 4-2l-2-1c-.5.8-1.2 1.2-2 1.2-1.7 0-2.8-1.2-2.8-2.7s1.1-2.7 2.8-2.7c.8 0 1.5.4 2 1.2l2-1c-.8-1.2-2.2-2-4-2z"
          fill="#ffffff"
        />
        <text x="23" y="17" fill="#ffffff" fontSize="7" fontWeight="bold" fontFamily="monospace">+</text>
        <text x="23" y="23" fill="#ffffff" fontSize="7" fontWeight="bold" fontFamily="monospace">+</text>
      </svg>
    </div>
  );
};

export default function Certificates() {
  const { certificates } = portfolioData;

  return (
    <section id="certificates" className="py-16 sm:py-24 relative z-10 bg-slate-900/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Certifications" 
          subtitle="Continuous learning, industry-standard skill certifications, and professional credentials" 
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mt-10 sm:mt-12">
          {certificates.map((cert, index) => (
            <motion.a 
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="glass-panel p-6 rounded-2xl cursor-pointer group glass-panel-hover relative overflow-hidden flex flex-col justify-between border border-white/10 bg-slate-900/80 shadow-xl hover:-translate-y-1.5 transition-all duration-300 min-h-[210px]"
            >
              {/* Subtle Ambient Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              {/* Card Top: Company Logo + External Credential Link */}
              <div className="flex items-center justify-between relative z-10">
                <CompanyLogo issuer={cert.issuer} customLogo={cert.logo} />
                
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-sky-400 group-hover:border-sky-400/30 group-hover:bg-sky-500/10 transition-all">
                  <ExternalLink size={15} />
                </div>
              </div>

              {/* Card Middle: Title */}
              <div className="my-3 relative z-10">
                <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-sky-300 transition-colors leading-snug">
                  {cert.title}
                </h4>
              </div>

              {/* Card Bottom: Verified Issuer Tag */}
              <div className="relative z-10 pt-2 border-t border-white/5 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-sky-400 font-mono font-medium">
                  <CheckCircle2 size={13} className="text-sky-400" />
                  <span>{cert.issuer}</span>
                </div>
                <span className="text-[11px] font-mono text-slate-400 group-hover:text-slate-200 transition-colors">
                  Credential &rarr;
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
