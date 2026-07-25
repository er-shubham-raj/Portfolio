import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SiReact, SiPython, SiNextdotjs, SiFastapi, SiDocker } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { Code2, Cpu, Cloud, Sparkles, Terminal, Award, CheckCircle2 } from 'lucide-react';

export const HeroCanvas: React.FC = () => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center lg:justify-end z-10">
      {/* Orbital Container */}
      <motion.div
        animate={{
          x: mouseOffset.x * 0.8,
          y: mouseOffset.y * 0.8,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 180 }}
        className="relative w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] flex items-center justify-center"
      >
        {/* Outer Orbital Glowing Rings */}
        <div className="absolute inset-0 rounded-full border border-[#FF6B57]/30 animate-spin-slow shadow-glow-coral" />
        <div className="absolute inset-6 rounded-full border border-[#F6C453]/30 rotate-45 border-dashed" />

        {/* Central Luxury Holographic Developer Card */}
        <div className="w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-3xl glass-panel bg-[#111827]/90 border-white/20 shadow-glass-luxury relative flex flex-col items-center justify-between p-6 overflow-hidden group hover:border-[#FF6B57]/50 transition-all duration-500">
          {/* Ambient Glow Lighting */}
          <div className="absolute -top-10 -right-10 w-44 h-44 bg-[#FF6B57]/25 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-500" />
          <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-[#F6C453]/20 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-500" />
          <div className="absolute inset-0 bg-noise opacity-30" />

          {/* Top Header Row */}
          <div className="w-full flex items-center justify-between z-10 pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#39D98A] animate-ping" />
              <span className="text-[10px] font-mono font-bold text-[#39D98A] uppercase tracking-wider">
                ONLINE & HIREABLE
              </span>
            </div>
            <span className="text-[10px] font-mono text-slate-400">VIT BHOPAL</span>
          </div>

          {/* Central Logo Emblem */}
          <div className="relative z-10 flex flex-col items-center my-auto text-center space-y-2">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-tr from-[#FF6B57] via-[#F6C453] to-[#FFE5D9] p-[2px] shadow-glow-coral group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#050816] rounded-[14px] flex flex-col items-center justify-center p-2">
                <Cpu className="w-9 h-9 text-[#FF6B57] mb-1 animate-pulse" />
                <span className="font-display font-extrabold text-[10px] text-[#FFE5D9] tracking-wider uppercase">
                  FULL STACK & AI
                </span>
              </div>
            </div>

            <h3 className="font-display font-extrabold text-lg sm:text-xl text-slate-100 flex items-center gap-1.5 tracking-tight">
              SHUBHAM RAJ <Sparkles className="w-4 h-4 text-[#F6C453]" />
            </h3>
            <p className="text-xs font-mono text-[#F6C453] font-semibold">
              Full Stack • AI Engineer • Open Source
            </p>
          </div>

          {/* Bottom Metrics Bar */}
          <div className="w-full pt-3 border-t border-white/10 z-10 grid grid-cols-3 gap-1 text-center font-mono text-[10px] text-slate-300">
            <div className="p-1 rounded-xl bg-white/5 border border-white/10">
              <div className="text-[#FF6B57] font-bold text-xs">300+</div>
              <div className="text-[8px] text-slate-400">LeetCode</div>
            </div>
            <div className="p-1 rounded-xl bg-white/5 border border-white/10">
              <div className="text-[#F6C453] font-bold text-xs">Top 10K</div>
              <div className="text-[8px] text-slate-400">OpenSource</div>
            </div>
            <div className="p-1 rounded-xl bg-white/5 border border-white/10">
              <div className="text-[#39D98A] font-bold text-xs">8.86</div>
              <div className="text-[8px] text-slate-400">CGPA</div>
            </div>
          </div>
        </div>

        {/* Floating Orbiting Tech Stack Badges */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-3 right-4 p-3 rounded-2xl bg-[#111827] border border-[#FF6B57]/50 shadow-glow-coral text-[#FF6B57] flex items-center gap-2 text-xs font-mono font-bold z-20"
        >
          <SiNextdotjs size={18} /> Next.js 15
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-1/3 -right-6 p-3 rounded-2xl bg-[#111827] border border-[#F6C453]/50 shadow-glow-amber text-[#F6C453] flex items-center gap-2 text-xs font-mono font-bold z-20"
        >
          <SiPython size={18} /> Python AI
        </motion.div>

        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute -bottom-3 right-8 p-3 rounded-2xl bg-[#111827] border border-[#FFE5D9]/50 shadow-lg text-[#FFE5D9] flex items-center gap-2 text-xs font-mono font-bold z-20"
        >
          <FaAws size={18} /> AWS Cloud
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          className="absolute top-1/2 -left-6 p-3 rounded-2xl bg-[#111827] border border-[#39D98A]/50 shadow-glow-emerald text-[#39D98A] flex items-center gap-2 text-xs font-mono font-bold z-20"
        >
          <SiDocker size={18} /> Docker
        </motion.div>

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -top-2 left-6 p-3 rounded-2xl bg-[#111827] border border-[#FF6B57]/50 shadow-glow-coral text-[#FF6B57] flex items-center gap-2 text-xs font-mono font-bold z-20"
        >
          <SiFastapi size={18} /> FastAPI
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroCanvas;


