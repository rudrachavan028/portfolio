import React from 'react';
import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { portfolioData } from '../data';
import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Featured Projects" subtitle="Showcasing my work in AI/ML and software engineering." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-panel overflow-hidden rounded-2xl group flex flex-col h-full border border-slate-700/50 hover:border-cyan-500/50 transition-colors"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden border-b border-slate-700/50 p-4 pb-0 bg-slate-800/30">
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-900 to-transparent z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              
              {/* Project Details */}
              <div className="p-6 flex flex-col flex-grow relative z-20 bg-slate-900/40">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                <p className="text-sm text-slate-300 mb-4 flex-grow leading-relaxed line-clamp-4">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span key={i} className="px-2 py-0.5 text-[10px] font-mono text-cyan-300 bg-cyan-900/30 border border-cyan-800 rounded">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 text-[10px] font-mono text-slate-400 bg-slate-800 border border-slate-700 rounded">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center gap-3 mt-auto">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors border border-slate-600 rounded-md py-1.5 px-3 hover:bg-slate-800"
                  >
                    <Github size={14} /> Code
                  </a>
                  {project.demoUrl !== '#' && (
                     <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors border border-blue-600 rounded-md py-1.5 px-3"
                     >
                       <ExternalLink size={14} /> Demo
                     </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
