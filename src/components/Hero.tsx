import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, FileText, ChevronDown } from 'lucide-react';
import { portfolioData } from '../data';

export default function Hero() {
  const { name, title, tagline, intro, github, linkedin, email, avatarUrl } = portfolioData.hero;

  const nameVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, delayChildren: 0.2
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, delayChildren: 1.5
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, display: "none" },
    visible: { opacity: 1, display: "inline" },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="lg:w-3/5 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 font-mono text-[10px] uppercase tracking-widest mb-6"
            >
              Hello, World! I am
            </motion.div>
            
            <motion.div className="min-h-[140px] md:min-h-[160px] flex flex-col justify-center mb-4">
              <motion.h1 
                variants={nameVariants}
                initial="hidden"
                animate="visible"
                className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight"
              >
                {name.split('').map((char, index) => (
                  <motion.span key={index} variants={letterVariants}>
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </motion.h1>
              
              <motion.h2
                variants={titleVariants}
                initial="hidden"
                animate="visible"
                className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-500"
              >
                {title.split('').map((char, index) => (
                  <motion.span key={index} variants={letterVariants}>
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </motion.h2>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.8 }}
              className="text-xl text-slate-300 font-medium mb-4 mt-6"
            >
              {tagline}
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 3.0 }}
              className="text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 text-lg leading-relaxed"
            >
              {intro}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.2 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <a 
                href="#contact" 
                className="px-8 py-3 rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold transition-colors flex items-center gap-2"
              >
                <Mail size={18} />
                Contact Me
              </a>
              <a 
                href="#resume" 
                className="px-8 py-3 rounded-full glass-panel glass-panel-hover text-white font-medium transition-all flex items-center gap-2"
              >
                <FileText size={18} />
                View Resume
              </a>
              
              <div className="flex items-center gap-4 ml-0 sm:ml-4 mt-4 sm:mt-0">
                <a href={github} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all">
                  <Github size={20} />
                </a>
                <a href={linkedin} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all">
                  <Linkedin size={20} />
                </a>
              </div>
            </motion.div>
          </div>
          
          {/* Avatar / Visuals */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:w-2/5 relative"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto group">
              {/* Dynamic Aura Glow */}
              <motion.div 
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                  scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute inset-0 bg-gradient-to-tr from-sky-500/40 via-indigo-500/40 to-cyan-400/40 rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700"
              />
              
              {/* Avatar Image Container with Floating Effect */}
              <motion.div 
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-full h-full rounded-full overflow-hidden border-2 border-slate-700/50 shadow-[0_0_40px_rgba(56,189,248,0.2)] group-hover:shadow-[0_0_60px_rgba(56,189,248,0.4)] group-hover:border-sky-500/50 transition-all duration-500 bg-slate-900 p-2"
              >
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={avatarUrl} 
                    alt={name} 
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop"; 
                    }}
                    className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>
              </motion.div>
              
              {/* Floating badges */}
              <motion.div 
                animate={{ y: [0, -10, 0], rotate: [0, -2, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-10 -left-6 glass-panel px-4 py-2 rounded-xl flex items-center gap-2 border border-white/10 z-20 shadow-xl backdrop-blur-md"
              >
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                <span className="text-sm font-mono font-medium text-slate-200">Available</span>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 10, 0], rotate: [0, 2, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-12 -right-4 glass-panel px-4 py-2 rounded-xl border border-white/10 z-20 shadow-xl backdrop-blur-md bg-slate-900/60"
              >
                <span className="text-sm font-mono text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400 font-bold tracking-wide">AI/ML Focus</span>
              </motion.div>
            </div>
          </motion.div>
          
        </div>
        
        {/* Competition Winner Images Marquee */}
        {portfolioData.competitionImages && portfolioData.competitionImages.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.8, duration: 1 }}
            className="mt-20 mb-8 border-t border-slate-800/50 pt-8"
          >
            <div className="text-center mb-6">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Competition & Hackathon Highlights</span>
            </div>
            <div className="relative w-full overflow-hidden flex items-center h-48 sm:h-56">
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-10"></div>
              
              <motion.div 
                className="flex gap-6 px-4 w-max"
                animate={{ x: [0, -1000] }}
                transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              >
                {/* Duplicate the array a couple of times for smooth infinite scrolling effect */}
                {[...portfolioData.competitionImages, ...portfolioData.competitionImages, ...portfolioData.competitionImages].map((img, idx) => {
                  const colors = [
                    "from-pink-500 via-purple-500 to-indigo-500",
                    "from-cyan-400 via-sky-500 to-blue-600",
                    "from-emerald-400 via-teal-500 to-cyan-500",
                    "from-orange-400 via-rose-500 to-pink-500",
                    "from-violet-500 via-fuchsia-500 to-indigo-500"
                  ];
                  const colorClass = colors[idx % colors.length];
                  
                  return (
                    <div key={idx} className="relative w-64 h-40 sm:w-80 sm:h-48 rounded-2xl flex-shrink-0 group cursor-pointer mt-4">
                      {/* Animated colorful backdrop glow */}
                      <div className={`absolute -inset-1 bg-gradient-to-r ${colorClass} rounded-2xl blur-md opacity-40 group-hover:opacity-100 group-hover:blur-lg group-hover:-inset-2 transition-all duration-500 animate-pulse`} />
                      <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-slate-900 p-1 z-10 shadow-2xl">
                        <img 
                          src={img} 
                          alt={`Competition Highlight ${idx}`} 
                          className="w-full h-full object-cover rounded-xl transform group-hover:scale-110 transition-transform duration-700 ease-out"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            // Avoid infinite loop if fallback also fails
                            if (!target.src.includes('unsplash')) {
                              target.src = "https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?q=80&w=600&auto=format&fit=crop"; 
                            }
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-slate-500 font-mono tracking-widest uppercase">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="text-cyan-500" size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
