import React from 'react';
import NetworkBackground from './components/NetworkBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Certificates from './components/Certificates';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen text-slate-200 overflow-x-hidden w-full relative bg-slate-950 selection:bg-sky-500/20 selection:text-sky-300">
      <div className="ambient-glow" />
      <NetworkBackground />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Certificates />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
