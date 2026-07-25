import React from 'react';
import { motion } from 'framer-motion';
import { achievementsData } from '../../data/achievementsData';
import { Trophy, Sparkles, Award } from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-28 relative overflow-hidden bg-[#050816] bg-noise border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 z-10 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111827] border border-[#FF6B57]/30 text-[#FFE5D9] text-xs font-mono tracking-widest uppercase shadow-glow-coral">
            <Trophy size={13} className="text-[#FF6B57]" /> Verified Milestones
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-100 tracking-tight">
            Achievements & <span className="text-gradient-coral">Recognition</span>
          </h2>
          <p className="text-sm text-slate-300 font-sans leading-relaxed">
            Quantifiable accolades across competitive programming, open source, hackathons & leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((ach, idx) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <div className="p-7 rounded-3xl glass-panel border-white/15 bg-[#111827]/85 card-hover h-full flex flex-col justify-between group shadow-glass-luxury">
                <div>
                  {/* Category Pill */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#FF6B57]/10 text-[#FFE5D9] border border-[#FF6B57]/30">
                      {ach.category}
                    </span>
                    <Award size={18} className="text-[#F6C453]" />
                  </div>

                  {/* Stat Display */}
                  <div className="my-3">
                    <div className="text-3xl font-display font-extrabold text-slate-100 group-hover:text-[#FF6B57] transition-colors">
                      {ach.statNumber}
                    </div>
                    <div className="text-xs font-mono text-[#F6C453] mt-0.5 uppercase tracking-wider font-semibold">
                      {ach.statLabel}
                    </div>
                  </div>

                  <h4 className="text-base font-display font-bold text-slate-100 mt-4 group-hover:text-[#FF6B57] transition-colors">
                    {ach.title}
                  </h4>
                  <div className="text-xs text-slate-400 font-medium">{ach.organization}</div>

                  <p className="text-xs text-slate-300 mt-2.5 leading-relaxed font-sans">
                    {ach.description}
                  </p>
                </div>

                <div className="mt-6 pt-3.5 border-t border-white/10 flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                  <Sparkles size={13} className="text-[#39D98A]" /> Resume Verified Metric
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

