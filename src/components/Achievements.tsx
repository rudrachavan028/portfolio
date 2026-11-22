import React from 'react';
import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { portfolioData } from '../data';
import { Trophy } from 'lucide-react';

interface AchievementItem {
  id: number;
  rank: string;
  title: string;
}

export default function Achievements() {
  const achievements = (portfolioData.achievementsList || []) as AchievementItem[];

  return (
    <section id="achievements" className="py-16 sm:py-24 relative z-10 overflow-hidden bg-slate-900/40 border-y border-white/5">
      {/* Background ambient lighting matching website blue/indigo/cyan theme */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Achievements"
          subtitle="State & national level project competition victories and technological milestones"
        />

        {/* VERTICAL ACHIEVEMENTS LIST */}
        <div className="mt-8 sm:mt-12 flex flex-col gap-3.5">
          {achievements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ x: 4 }}
              className="w-full rounded-2xl overflow-hidden glass-panel border border-white/10 hover:border-sky-400/40 hover:shadow-sky-500/10 transition-all duration-300 shadow-lg relative group px-5 py-4 sm:px-6 sm:py-5 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-indigo-950/40"
            >
              {/* Subtle Decorative Background Trophy Watermark */}
              <div className="absolute -bottom-3 -right-2 text-sky-500/5 group-hover:text-sky-400/10 transition-colors pointer-events-none">
                <Trophy size={64} />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 relative z-10">
                {/* Title */}
                <h4 className="text-base sm:text-xl font-bold text-white group-hover:text-sky-300 transition-colors leading-snug">
                  {item.title}
                </h4>

                {/* Rank */}
                <div className="self-start sm:self-center shrink-0 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/40 text-sky-300 shadow-lg shadow-sky-500/10">
                  <Trophy size={14} className="text-sky-400" />
                  <span className="text-xs sm:text-sm font-extrabold font-mono tracking-wide uppercase">
                    {item.rank}
                  </span>
                </div>
              </div>

              {/* Subtle Border Glow on Hover */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-sky-400/30 pointer-events-none transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

