import React from 'react';
import { motion } from 'framer-motion';
import { Github, GitPullRequest, Star, GitFork, ExternalLink, Sparkles, Trophy } from 'lucide-react';
import { profileData } from '../../data/profileData';

export const GithubSection: React.FC = () => {
  // Mock contribution matrix columns (52 weeks x 7 days grid representation)
  const contributionGrid = Array.from({ length: 154 }, (_, i) => {
    // Generate organic intensity pattern
    const level = (i * 7 + 3) % 5;
    return level;
  });

  const repos = [
    {
      name: 'vitalvision-ai-triage',
      description: 'Automated AI patient risk triage and emergency room queue priority engine (Health-Hack 2025 Round 2).',
      stars: 28,
      forks: 9,
      language: 'Python',
      langColor: 'bg-[#F6C453]',
      url: 'https://github.com/er-shubham-raj'
    },
    {
      name: 'nyaymitra-legal-nlp',
      description: 'Scalable Natural Language Processing summarization and guidance engine for Indian statutory documents.',
      stars: 34,
      forks: 12,
      language: 'Python / Flask',
      langColor: 'bg-[#FF6B57]',
      url: 'https://github.com/er-shubham-raj'
    },
    {
      name: 'awwwards-luxury-portfolio',
      description: 'Ultra-premium Framer Motion & Three.js handcrafted portfolio built with Next.js 15, React 19 & TailwindCSS.',
      stars: 45,
      forks: 15,
      language: 'TypeScript',
      langColor: 'bg-blue-400',
      url: 'https://github.com/er-shubham-raj'
    }
  ];

  return (
    <section id="github" className="py-28 relative overflow-hidden bg-[#050816] bg-noise border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 z-10 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111827] border border-[#FF6B57]/30 text-[#FFE5D9] text-xs font-mono tracking-widest uppercase shadow-glow-coral">
            <Github size={13} className="text-[#FF6B57]" /> Open Source Ecosystem
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-100 tracking-tight">
            GitHub Activity & <span className="text-gradient-coral">Contributions</span>
          </h2>
          <p className="text-sm text-slate-300 font-sans leading-relaxed">
            Hacktoberfest SuperContributor ranked in Top 10,000 worldwide with 6+ merged pull requests across global projects.
          </p>
        </div>

        {/* Contribution Activity Grid Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 sm:p-8 rounded-3xl glass-panel border-white/15 bg-[#111827]/90 shadow-glass-luxury mb-10"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-[#FF6B57]/10 border border-[#FF6B57]/30 text-[#FF6B57] shadow-glow-coral">
                <Github size={22} />
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-slate-100">er-shubham-raj</h3>
                <p className="text-xs text-slate-400 font-mono">Top 10,000 Worldwide Hacktoberfest SuperContributor</p>
              </div>
            </div>
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 text-xs font-mono flex items-center gap-2 transition-colors"
            >
              Follow on GitHub <ExternalLink size={13} />
            </a>
          </div>

          {/* Matrix Visualizer */}
          <div className="pt-6">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
              <span>Contribution Matrix Visualizer</span>
              <div className="flex items-center gap-1.5 text-[10px]">
                <span>Less</span>
                <span className="w-2.5 h-2.5 rounded bg-white/5" />
                <span className="w-2.5 h-2.5 rounded bg-[#FF6B57]/30" />
                <span className="w-2.5 h-2.5 rounded bg-[#FF6B57]/60" />
                <span className="w-2.5 h-2.5 rounded bg-[#FF6B57]" />
                <span className="w-2.5 h-2.5 rounded bg-[#F6C453]" />
                <span>More</span>
              </div>
            </div>

            <div className="grid grid-flow-col grid-rows-7 gap-1.5 overflow-x-auto pb-2 scrollbar-thin">
              {contributionGrid.map((level, i) => {
                let bgClass = 'bg-white/5';
                if (level === 1) bgClass = 'bg-[#FF6B57]/30';
                if (level === 2) bgClass = 'bg-[#FF6B57]/60';
                if (level === 3) bgClass = 'bg-[#FF6B57]';
                if (level === 4) bgClass = 'bg-[#F6C453] shadow-[0_0_6px_#F6C453]';
                return (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-sm ${bgClass} transition-transform hover:scale-125`}
                    title={`Contributions: ${level * 3}`}
                  />
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Featured Repositories Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {repos.map((repo, idx) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-3xl glass-panel border-white/15 bg-[#111827]/80 card-hover h-full flex flex-col justify-between block group shadow-glass-luxury"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-mono font-bold text-slate-100 group-hover:text-[#FF6B57] transition-colors flex items-center gap-2">
                      <Github size={16} className="text-[#FF6B57]" /> {repo.name}
                    </span>
                    <ExternalLink size={14} className="text-slate-400 group-hover:text-[#F6C453] transition-colors" />
                  </div>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
                    {repo.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className={`w-2.5 h-2.5 rounded-full ${repo.langColor}`} />
                    <span>{repo.language}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1"><Star size={13} className="text-[#F6C453]" /> {repo.stars}</span>
                    <span className="flex items-center gap-1"><GitFork size={13} /> {repo.forks}</span>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
