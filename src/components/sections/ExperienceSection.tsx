import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../../data/experienceData';
import { Briefcase, Calendar, MapPin, CheckCircle2, Sparkles, Award } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-28 relative overflow-hidden bg-[#050816] bg-noise border-t border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 z-10 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111827] border border-[#FF6B57]/30 text-[#FFE5D9] text-xs font-mono tracking-widest uppercase shadow-glow-coral">
            <Award size={13} className="text-[#FF6B57]" /> Work & Contributions
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-100 tracking-tight">
            Engineering & Open Source <span className="text-gradient-coral">Timeline</span>
          </h2>
          <p className="text-sm text-slate-300 font-sans leading-relaxed">
            Hacktoberfest SuperContributor (Top 10k Worldwide) & Web Development Engineering Internship.
          </p>
        </div>

        <div className="relative mt-12 pl-6 sm:pl-8 border-l-2 border-[#FF6B57]/30 space-y-12">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Glowing Node */}
              <div className="absolute -left-[33px] sm:-left-[41px] top-2 w-5 h-5 rounded-full bg-[#050816] border-2 border-[#FF6B57] group-hover:scale-125 transition-transform flex items-center justify-center shadow-glow-coral">
                <div className="w-2 h-2 rounded-full bg-[#F6C453]" />
              </div>

              <div className="p-8 rounded-3xl glass-panel border-white/15 bg-[#111827]/85 card-hover shadow-glass-luxury">
                {/* Header */}
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#FF6B57]/10 text-[#FFE5D9] border border-[#FF6B57]/30">
                      {exp.type}
                    </span>
                    <h3 className="text-2xl font-display font-bold text-slate-100 mt-2.5 group-hover:text-[#FF6B57] transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-sm text-[#F6C453] font-semibold flex items-center gap-1.5 mt-0.5 font-mono">
                      <Briefcase size={15} /> {exp.company}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-xs font-mono text-slate-300 flex items-center gap-1.5 justify-end">
                      <Calendar size={13} className="text-[#FF6B57]" /> {exp.period}
                    </div>
                    <div className="text-xs text-slate-400 flex items-center gap-1 justify-end mt-1 font-mono">
                      <MapPin size={12} /> {exp.location}
                    </div>
                    {exp.badge && (
                      <span className="inline-block mt-2.5 px-3 py-1 rounded-full bg-[#F6C453]/15 text-[#F6C453] border border-[#F6C453]/30 text-xs font-mono font-semibold">
                        🏆 {exp.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bullet points */}
                <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-slate-300">
                  {exp.bulletPoints.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 leading-relaxed">
                      <CheckCircle2 size={16} className="text-[#39D98A] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-xl bg-[#050816] text-slate-300 text-xs font-mono border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

