import React from 'react';
import { portfolioData } from '../data';

export default function Footer() {
  const { name } = portfolioData.hero;
  return (
    <footer className="py-8 border-t border-white/5 bg-slate-950 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} {name}
        </div>
        
        <div className="flex items-center gap-6 text-sm text-slate-500 font-mono">
          <span>AI / ML Portfolio</span>
          <span>Designed with <span className="text-cyan-500"></span></span>
        </div>
      </div>
    </footer>
  );
}
