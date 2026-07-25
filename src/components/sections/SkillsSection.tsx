import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../../data/skillsData';
import { Code, Cpu, Cloud, Database, Layers, Sparkles, Terminal, Wrench } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...skillsData.map((s) => s.category)];

  const categoryIcons: Record<string, React.ReactNode> = {
    Frontend: <Layers size={16} className="text-[#FF6B57]" />,
    Backend: <Cpu size={16} className="text-[#F6C453]" />,
    'AI & Machine Learning': <Sparkles size={16} className="text-[#FF6B57]" />,
    'Cloud & DevOps': <Cloud size={16} className="text-[#39D98A]" />,
    'Programming Languages': <Code size={16} className="text-[#FFE5D9]" />,
    Database: <Database size={16} className="text-[#F6C453]" />,
    'Tools & Workflow': <Wrench size={16} className="text-[#FF6B57]" />,
  };

  const filteredCategories =
    selectedCategory === 'All'
      ? skillsData
      : skillsData.filter((cat) => cat.category === selectedCategory);

  return (
    <section id="skills" className="py-28 relative overflow-hidden bg-[#050816] bg-noise border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 z-10 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111827] border border-[#FF6B57]/30 text-[#FFE5D9] text-xs font-mono tracking-widest uppercase shadow-glow-coral">
            <Terminal size={13} className="text-[#FF6B57]" /> Interactive Dashboard
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-100 tracking-tight">
            Technical <span className="text-gradient-coral">Skills & Stack</span>
          </h2>
          <p className="text-sm text-slate-300 font-sans leading-relaxed">
            Categorized technical stack, proficiency levels, and core domain highlights across AI, Full Stack & Cloud.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-2xl text-xs font-mono font-medium transition-all duration-300 ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#FF6B57] to-[#F6C453] text-[#050816] font-bold shadow-glow-coral'
                    : 'bg-[#111827] text-slate-300 hover:text-white border border-white/10 hover:border-[#FF6B57]/30'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Grid Dashboard */}
        <div className="space-y-10">
          {filteredCategories.map((group, gIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: gIdx * 0.08 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#111827] border border-white/10 shadow-md">
                  {categoryIcons[group.category] || <Cpu size={16} className="text-[#FF6B57]" />}
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-slate-100">{group.category}</h3>
                  <p className="text-xs text-slate-400 font-mono">{group.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-5 rounded-3xl glass-panel border-white/10 bg-[#111827]/80 card-hover relative group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-display font-bold text-slate-100 group-hover:text-[#FF6B57] transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-xs font-mono text-[#F6C453] font-semibold">{skill.level}%</span>
                      </div>

                      {/* Animated Progress Bar */}
                      <div className="w-full h-2 bg-[#050816] rounded-full overflow-hidden mb-3 border border-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, ease: 'easeOut' }}
                          className="h-full bg-gradient-to-r from-[#FF6B57] via-[#F6C453] to-[#39D98A] rounded-full"
                        />
                      </div>
                    </div>

                    {skill.highlight && (
                      <span className="text-[11px] font-mono text-slate-300 bg-[#050816] px-2.5 py-1 rounded-xl border border-white/10 inline-block w-fit mt-2">
                        ⚡ {skill.highlight}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

