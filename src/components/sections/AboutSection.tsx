import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, ArrowRight, BookOpen, Terminal, Sparkles, Target, Compass, Zap } from 'lucide-react';
import { profileData } from '../../data/profileData';

export const AboutSection: React.FC = () => {
  // Terminal State
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<Array<{ command: string; output: string }>>([
    {
      command: 'shubham-cli init',
      output: 'Initialized Shubham Raj Developer Profile v2.5. Type "help" to see available CLI commands.'
    }
  ]);

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    let output = '';

    switch (cmd) {
      case 'help':
        output = 'Available commands: about, education, skills, projects, contact, metrics, clear';
        break;
      case 'about':
        output = `${profileData.name} — ${profileData.title} at ${profileData.university}. Specializing in AI triage microservices, cloud automation, and open-source contributions.`;
        break;
      case 'education':
        output = 'B.Tech CS Engineering @ VIT Bhopal University (CGPA: 8.86 | 2022-2026). Higher Secondary @ BSS College (89% | 2020-2022).';
        break;
      case 'skills':
        output = 'Languages: C++, Python, Java, JS/TS, SQL. Tech: React, Next.js, FastAPI, Flask, Docker, AWS, Scikit-Learn.';
        break;
      case 'projects':
        output = 'VitalVision (AI Patient Risk Triage - 80% Effort Saved) & NyayMitra (AI Indian Legal Guidance Engine).';
        break;
      case 'contact':
        output = `Email: ${profileData.email} | Location: ${profileData.location} | Phone: ${profileData.phone}`;
        break;
      case 'metrics':
        output = '300+ LeetCode DSA Solved | Hacktoberfest Top 10,000 SuperContributor | 10,000+ Saplings Planted.';
        break;
      case 'clear':
        setTerminalHistory([]);
        setTerminalInput('');
        return;
      default:
        output = `Command not recognized: "${cmd}". Type "help" for a list of available commands.`;
    }

    setTerminalHistory(prev => [...prev, { command: terminalInput, output }]);
    setTerminalInput('');
  };

  return (
    <section id="about" className="py-28 relative overflow-hidden bg-[#050816] bg-noise">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 z-10 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111827] border border-[#FF6B57]/30 text-[#FFE5D9] text-xs font-mono tracking-widest uppercase shadow-glow-coral">
            <Sparkles size={13} className="text-[#FF6B57]" /> Luxury Glass Identity
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-100 tracking-tight">
            Story, Mission & <span className="text-gradient-coral">Terminal</span>
          </h2>
          <p className="text-sm text-slate-300 font-sans leading-relaxed">
            Combining academic excellence, open-source SuperContributor leadership, and engineering rigor.
          </p>
        </div>

        {/* Top Grid: Bio, Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1: Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-7 rounded-3xl glass-panel border-white/10 flex flex-col justify-between card-hover relative group"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FF6B57]/10 border border-[#FF6B57]/30 flex items-center justify-center text-[#FF6B57] shadow-glow-coral">
                <Compass size={22} />
              </div>
              <h3 className="text-xl font-display font-bold text-slate-100 group-hover:text-[#FF6B57] transition-colors">
                My Story
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Final Year B.Tech Computer Science student at VIT Bhopal University. Specialized in backend microservices, intelligent AI triage systems, and cloud automation.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-[#F6C453] flex items-center gap-1.5">
              <span>● Ranked Top 10K Hacktoberfest</span>
            </div>
          </motion.div>

          {/* Card 2: Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-7 rounded-3xl glass-panel border-white/10 flex flex-col justify-between card-hover relative group"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F6C453]/10 border border-[#F6C453]/30 flex items-center justify-center text-[#F6C453] shadow-glow-amber">
                <Target size={22} />
              </div>
              <h3 className="text-xl font-display font-bold text-slate-100 group-hover:text-[#F6C453] transition-colors">
                My Mission
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                To build high-throughput microservices and intelligent ML triage pipelines that eliminate manual bottlenecks and accelerate automated decision-making.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-[#39D98A] flex items-center gap-1.5">
              <span>● 80% Medical Triage Reduction</span>
            </div>
          </motion.div>

          {/* Card 3: Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-7 rounded-3xl glass-panel border-white/10 flex flex-col justify-between card-hover relative group"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#39D98A]/10 border border-[#39D98A]/30 flex items-center justify-center text-[#39D98A] shadow-glow-emerald">
                <Zap size={22} />
              </div>
              <h3 className="text-xl font-display font-bold text-slate-100 group-hover:text-[#39D98A] transition-colors">
                My Vision
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Architecting resilient cloud infrastructure, contributing to open-source developer ecosystems, and delivering pixel-perfect luxury web products globally.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-[#FFE5D9] flex items-center gap-1.5">
              <span>● 300+ LeetCode DSA Solved</span>
            </div>
          </motion.div>
        </div>

        {/* Lower Grid: Interactive Terminal CLI + Dual Education Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Terminal Window CLI */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 p-6 rounded-3xl glass-panel border-white/15 bg-[#0D131F]/90 shadow-glass-luxury font-mono text-xs text-slate-200"
          >
            {/* Terminal Window Header Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-[#FF6B57]" />
                <span className="w-3 h-3 rounded-full bg-[#F6C453]" />
                <span className="w-3 h-3 rounded-full bg-[#39D98A]" />
              </div>
              <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
                <Terminal size={14} className="text-[#FF6B57]" />
                <span>shubham-cli v2.5</span>
              </div>
            </div>

            {/* Terminal Output History */}
            <div className="max-h-64 overflow-y-auto space-y-3 pr-2 scrollbar-thin">
              {terminalHistory.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center text-[#FF6B57]">
                    <span className="text-[#F6C453] mr-1.5">guest@shubham-raj:~$</span>
                    <span>{item.command}</span>
                  </div>
                  <div className="text-slate-300 leading-relaxed pl-4 border-l-2 border-[#FF6B57]/30 font-sans text-xs">
                    {item.output}
                  </div>
                </div>
              ))}
            </div>

            {/* Terminal Command Input Form */}
            <form onSubmit={handleTerminalSubmit} className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2">
              <span className="text-[#F6C453] font-bold">guest@shubham-raj:~$</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="type 'help', 'about', 'skills'..."
                className="flex-1 bg-transparent text-slate-100 placeholder-slate-500 font-mono text-xs focus:outline-none"
              />
            </form>
          </motion.div>

          {/* Right Column: Dual Education Timeline Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {/* Card 1: VIT Bhopal University */}
            <div className="p-6 rounded-3xl glass-panel border-white/15 bg-[#111827]/90 flex flex-col justify-between card-hover group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#FF6B57]/10 border border-[#FF6B57]/30 flex items-center justify-center text-[#FF6B57] shadow-glow-coral">
                    <GraduationCap size={20} />
                  </div>
                  <span className="text-xs font-mono text-slate-400 font-medium">2022 – 2026</span>
                </div>

                <h3 className="text-base font-display font-bold text-slate-100 group-hover:text-[#FF6B57] transition-colors">
                  VIT Bhopal University
                </h3>
                <p className="text-xs font-medium text-slate-300 mt-1">B.Tech in Computer Science</p>
                <p className="text-xs font-mono text-[#F6C453] font-bold mt-2">CGPA: 8.86 / 10.0</p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#39D98A] shadow-[0_0_8px_#39D98A]" />
                <span className="text-[11px] font-mono text-slate-400">Final Year CS Student</span>
              </div>
            </div>

            {/* Card 2: BSS College, Supaul */}
            <div className="p-6 rounded-3xl glass-panel border-white/15 bg-[#111827]/90 flex flex-col justify-between card-hover group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#F6C453]/10 border border-[#F6C453]/30 flex items-center justify-center text-[#F6C453] shadow-glow-amber">
                    <BookOpen size={20} />
                  </div>
                  <span className="text-xs font-mono text-slate-400 font-medium">2020 – 2022</span>
                </div>

                <h3 className="text-base font-display font-bold text-slate-100 group-hover:text-[#F6C453] transition-colors">
                  BSS College, Supaul
                </h3>
                <p className="text-xs font-medium text-slate-300 mt-1">Higher Secondary (Class XII)</p>
                <p className="text-xs font-mono text-[#FF6B57] font-bold mt-2">Score: 89%</p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F6C453] shadow-[0_0_8px_#F6C453]" />
                <span className="text-[11px] font-mono text-slate-400">Graduated First Class</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

