import React from 'react';
import { motion } from 'framer-motion';
import { Code2, GitPullRequest, MessageSquare, TrendingUp, Users, GraduationCap, Sparkles } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const stats = [
    { metric: '300+', label: 'LeetCode DSA Solved', sublabel: 'Rank 650K+ Worldwide', icon: Code2, color: 'text-[#FF6B57]', bg: 'bg-[#FF6B57]/10' },
    { metric: '6+', label: 'Merged Pull Requests', sublabel: 'Top 10k Hacktoberfest', icon: GitPullRequest, color: 'text-[#F6C453]', bg: 'bg-[#F6C453]/10' },
    { metric: '100+', label: 'AI Legal Queries Triaged', sublabel: 'NyayMitra NLP Summarizer', icon: MessageSquare, color: 'text-[#FFE5D9]', bg: 'bg-[#FFE5D9]/10' },
    { metric: '80%', label: 'Reduction in Manual Triage', sublabel: 'VitalVision Scheduler', icon: TrendingUp, color: 'text-[#39D98A]', bg: 'bg-[#39D98A]/10' },
    { metric: '236+', label: 'Hackathon Teams Competed', sublabel: 'Round 2 Health-Hack 2025', icon: Users, color: 'text-[#F6C453]', bg: 'bg-[#F6C453]/10' },
    { metric: '1,000+', label: 'Students Mentored', sublabel: 'Chegg Student Expert', icon: GraduationCap, color: 'text-[#FF6B57]', bg: 'bg-[#FF6B57]/10' }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#050816] bg-noise border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 z-10 relative">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111827] border border-[#FF6B57]/30 text-[#FFE5D9] text-xs font-mono tracking-widest uppercase shadow-glow-coral">
            <Sparkles size={13} className="text-[#FF6B57]" /> Empirical Impact Metrics
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-100 tracking-tight">
            Key Statistical <span className="text-gradient-coral">Metrics</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat, idx) => {
            const IconComp = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <div className="p-5 rounded-3xl glass-panel border-white/15 bg-[#111827]/85 card-hover text-center h-full flex flex-col justify-between group shadow-glass-luxury">
                  <div>
                    <div className={`w-10 h-10 rounded-2xl ${stat.bg} border border-white/10 flex items-center justify-center ${stat.color} mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                      <IconComp size={20} />
                    </div>
                    <div className={`text-2xl sm:text-3xl font-display font-extrabold ${stat.color}`}>
                      {stat.metric}
                    </div>
                    <div className="text-xs font-display font-bold text-slate-100 mt-1">
                      {stat.label}
                    </div>
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono mt-2 pt-2 border-t border-white/10">
                    {stat.sublabel}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
