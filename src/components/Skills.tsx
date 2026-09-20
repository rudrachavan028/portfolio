import React from 'react';
import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { portfolioData } from '../data';
import { Code, Database, Terminal, Cpu, Layout, Server, Activity } from 'lucide-react';

export default function Skills() {
  const { skills } = portfolioData;

  const getIconForCategory = (category: string) => {
    switch (category) {
      case "Programming Languages": return <Code className="text-blue-400" size={24} />;
      case "AI/ML & Data Science": return <BrainCircuitIcon className="text-cyan-400" size={24} />;
      case "Python Libraries": return <Activity className="text-green-400" size={24} />;
      case "Web & Backend": return <Layout className="text-purple-400" size={24} />;
      case "Database": return <Database className="text-yellow-400" size={24} />;
      case "Core Computer Science": return <Cpu className="text-red-400" size={24} />;
      case "Tools": return <Terminal className="text-slate-400" size={24} />;
      default: return <Server className="text-cyan-400" size={24} />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 relative z-10 bg-slate-900/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Technical Arsenal" subtitle="Technologies and frameworks I work with." />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {skills.map((skillGroup, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="glass-panel rounded-xl p-6 relative overflow-hidden group glass-panel-hover"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500 pointer-events-none">
                {getIconForCategory(skillGroup.category)}
              </div>
              
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700">
                  {getIconForCategory(skillGroup.category)}
                </div>
                <h3 className="text-lg font-bold text-white">{skillGroup.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1.5 text-sm font-medium rounded-md bg-slate-800/80 text-slate-300 border border-slate-700 group-hover:border-slate-600 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Just a quick localized icon fallback since BrainCircuit might not be imported correctly if I missed it
function BrainCircuitIcon(props: any) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
      {...props}
    >
      <path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08 2.5 2.5 0 0 0 4.96.46 2.5 2.5 0 0 0 1.98-3 2.5 2.5 0 0 0 1.32-4.24 3 3 0 0 0-.34-5.58 2.5 2.5 0 0 0-2.96-3.08Z"/>
      <path d="m15 13-3-3"/>
      <path d="m9 13 3-3"/>
      <path d="m12 10v4"/>
    </svg>
  );
}
