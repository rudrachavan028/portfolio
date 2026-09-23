import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-[calc(100%-2rem)] left-4 right-4 sm:w-[calc(100%-3rem)] sm:left-6 sm:right-6 max-w-7xl mx-auto top-4 z-50 transition-all duration-300 rounded-2xl ${scrolled ? 'bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl' : 'bg-transparent'}`}>
      <div className="px-4 py-2 sm:px-6">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center font-bold text-white text-sm sm:text-base shadow-lg shadow-sky-500/20 shrink-0">RC</div>
            <a href="#" className="font-semibold tracking-tight text-base sm:text-xl bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 hover:opacity-80 transition-opacity truncate max-w-[200px] sm:max-w-none">
              <span className="hidden sm:inline">Rudra Rahul Chavan</span>
              <span className="sm:hidden">Rudra Chavan</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6 text-xs font-medium text-slate-400 uppercase tracking-widest">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#resume"
                className="px-5 py-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded-full transition-all flex items-center gap-2"
              >
                RESUME
              </a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-cyan-400 p-2 rounded-md focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-panel border-t border-white/10 rounded-2xl mt-2 p-3 bg-slate-950/95 backdrop-blur-2xl shadow-2xl">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-cyan-400 block px-4 py-2.5 rounded-xl text-base font-medium transition-colors active:bg-white/5"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#resume"
              onClick={() => setIsOpen(false)}
              className="block bg-sky-500 text-slate-950 font-bold rounded-xl px-4 py-2.5 mt-3 text-base text-center shadow-lg shadow-sky-500/20"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
