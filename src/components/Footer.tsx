import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data';

export default function Footer() {
  const { github, linkedin, email } = portfolioData.hero;

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
    { name: 'Resume', href: '#resume' },
  ];

  return (
    <footer className="border-t border-white/10 bg-slate-950 relative z-10 pt-12 sm:pt-16 pb-8 sm:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 pb-8 sm:pb-12 border-b border-white/5">
          {/* Name / Branding & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center font-bold text-white shadow-lg shadow-sky-500/20">
                RC
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                Rudra Rahul Chavan
              </span>
            </div>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-sm">
              Passionate about Artificial Intelligence, Machine Learning & Data Science
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media / Contact: Only Logos and Name */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold">
              Social Media / Contact
            </h4>
            <div className="flex flex-col space-y-3">
              <a
                href={github || "https://github.com/yourgithub"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-slate-300 hover:text-sky-400 transition-colors text-sm group py-0.5"
              >
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-sky-500/30 group-hover:bg-sky-500/10 transition-colors">
                  <Github size={18} className="text-slate-300 group-hover:text-sky-400 shrink-0" />
                </div>
                <span className="font-medium">GitHub</span>
              </a>

              <a
                href={linkedin || "https://linkedin.com/in/yourlinkedin"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-slate-300 hover:text-sky-400 transition-colors text-sm group py-0.5"
              >
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-sky-500/30 group-hover:bg-sky-500/10 transition-colors">
                  <Linkedin size={18} className="text-slate-300 group-hover:text-sky-400 shrink-0" />
                </div>
                <span className="font-medium">LinkedIn</span>
              </a>

              <a
                href={`mailto:${email || "youremail@example.com"}`}
                className="inline-flex items-center gap-3 text-slate-300 hover:text-sky-400 transition-colors text-sm group py-0.5"
              >
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-sky-500/30 group-hover:bg-sky-500/10 transition-colors">
                  <Mail size={18} className="text-slate-300 group-hover:text-sky-400 shrink-0" />
                </div>
                <span className="font-medium">Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar without any copyright logo */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-slate-500 text-center sm:text-left">
          <div>
            {portfolioData.hero.name || "Rudra Chavan"}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-mono">
            <span>AI / ML Portfolio</span>
            <span className="text-slate-600">•</span>
            <span>All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
