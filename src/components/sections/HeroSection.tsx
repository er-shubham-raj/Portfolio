import React, { useState, useEffect, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profileData } from '../../data/profileData';
import { MagneticButton } from '../ui/MagneticButton';
import { Download, ArrowRight, Mail, Github, Linkedin, Trophy, Code2, TrendingUp, Leaf, Sparkles, Send } from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';
import confetti from 'canvas-confetti';

const HeroCanvas = lazy(() => import('../3d/HeroCanvas'));

interface HeroSectionProps {
  onOpenResumeModal: () => void;
}

const ROTATING_SUBTITLES = [
  "Full Stack Developer",
  "AI Engineer",
  "Machine Learning Enthusiast",
  "Cloud Developer",
  "Open Source Contributor"
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResumeModal }) => {
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSubtitleIndex((prev) => (prev + 1) % ROTATING_SUBTITLES.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleDownloadResume = () => {
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    const link = document.createElement('a');
    link.href = '/resume/Shubham_Raj_Resume_Final.pdf';
    link.download = 'Shubham_Raj_Resume_Final.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#050816] bg-noise">
      {/* Background Mesh Gradient Radial Lights */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#FF6B57]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#F6C453]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 z-10 w-full flex-1 flex flex-col justify-center">
        {/* Upper Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-8 relative">
          
          {/* Left Column: Hero Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left z-10">
            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111827] border border-[#FF6B57]/30 text-slate-200 font-mono text-xs shadow-glow-coral"
            >
              <span className="w-2 h-2 rounded-full bg-[#39D98A] animate-pulse shadow-[0_0_10px_#39D98A]" />
              <span className="text-[#FFE5D9] font-medium">B.Tech CS Engineering @ VIT Bhopal</span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-1"
            >
              <p className="text-xl sm:text-2xl font-display font-medium text-slate-300">
                Hello, I&apos;m
              </p>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-gradient-coral leading-[1.05] py-1">
                SHUBHAM RAJ
              </h1>
            </motion.div>

            {/* Rotating Typing Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-8 flex items-center gap-2"
            >
              <span className="text-[#F6C453] font-mono text-base sm:text-xl font-bold flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#F6C453]" />
                <AnimatePresence mode="wait">
                  <motion.span
                    key={subtitleIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="inline-block"
                  >
                    {ROTATING_SUBTITLES[subtitleIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed"
            >
              Architecting high-throughput AI triage microservices, resilient cloud infrastructure, and handcrafted luxury web experiences with software engineering rigor.
            </motion.p>

            {/* Action Buttons: Hire Me, Download Resume, View Projects */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              <MagneticButton>
                <a
                  href="#contact"
                  className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#FF6B57] to-[#F6C453] hover:from-[#FF8A7A] hover:to-[#FAD885] text-[#050816] font-display font-extrabold text-xs tracking-wider uppercase flex items-center gap-2 shadow-glow-coral transition-all"
                >
                  <Send size={15} /> Hire Me
                </a>
              </MagneticButton>

              <MagneticButton>
                <button
                  onClick={onOpenResumeModal}
                  className="px-6 py-3.5 rounded-2xl bg-[#111827] hover:bg-[#1F2937] text-[#FFE5D9] font-display font-bold text-xs tracking-wider uppercase flex items-center gap-2 border border-[#FF6B57]/40 transition-all shadow-glass-luxury"
                >
                  <Download size={15} className="text-[#FF6B57]" /> Download Resume
                </button>
              </MagneticButton>

              <MagneticButton>
                <a
                  href="#projects"
                  className="px-6 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-200 font-display font-semibold text-xs tracking-wider uppercase flex items-center gap-2 border border-white/10 transition-all"
                >
                  View Projects <ArrowRight size={15} className="text-[#F6C453]" />
                </a>
              </MagneticButton>
            </motion.div>

            {/* Social Icons Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-3 pt-3"
            >
              <span className="text-xs text-slate-400 font-mono">Connect:</span>
              <div className="flex gap-2">
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#111827] hover:bg-[#FF6B57]/20 hover:text-[#FFE5D9] border border-white/10 text-slate-300 transition-colors shadow-md"
                  aria-label="GitHub"
                >
                  <Github size={16} />
                </a>
                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#111827] hover:bg-[#FF6B57]/20 hover:text-[#FFE5D9] border border-white/10 text-slate-300 transition-colors shadow-md"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href={profileData.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#111827] hover:bg-[#F6C453]/20 hover:text-[#F6C453] border border-white/10 text-slate-300 transition-colors shadow-md"
                  aria-label="LeetCode"
                >
                  <SiLeetcode size={16} />
                </a>
                <a
                  href={profileData.socials.email}
                  className="p-2.5 rounded-xl bg-[#111827] hover:bg-[#FF6B57]/20 hover:text-[#FFE5D9] border border-white/10 text-slate-300 transition-colors shadow-md"
                  aria-label="Email"
                >
                  <Mail size={16} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 3D Celestial Scene Card */}
          <div className="lg:col-span-5 relative h-[360px] sm:h-[440px] flex flex-col justify-between items-end">
            <Suspense fallback={null}>
              <HeroCanvas />
            </Suspense>
          </div>
        </div>

        {/* Bottom Horizontal Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 p-6 rounded-3xl glass-panel border border-white/15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 shadow-glass-luxury"
        >
          {/* Item 1: Top 10K */}
          <div className="flex items-center gap-4 border-b sm:border-b-0 lg:border-r border-white/10 pb-4 sm:pb-0 pr-0 lg:pr-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FF6B57]/10 border border-[#FF6B57]/30 flex items-center justify-center text-[#FF6B57] shrink-0 shadow-glow-coral">
              <Trophy size={22} />
            </div>
            <div>
              <div className="text-xl font-display font-extrabold text-slate-100">Top 10K</div>
              <div className="text-xs text-slate-400 font-mono">Hacktoberfest SuperContributor</div>
            </div>
          </div>

          {/* Item 2: 300+ Solved */}
          <div className="flex items-center gap-4 border-b sm:border-b-0 lg:border-r border-white/10 pb-4 sm:pb-0 pr-0 lg:pr-4">
            <div className="w-12 h-12 rounded-2xl bg-[#F6C453]/10 border border-[#F6C453]/30 flex items-center justify-center text-[#F6C453] shrink-0 shadow-glow-amber">
              <Code2 size={22} />
            </div>
            <div>
              <div className="text-xl font-display font-extrabold text-slate-100">300+ DSA</div>
              <div className="text-xs text-slate-400 font-mono">LeetCode Solved</div>
            </div>
          </div>

          {/* Item 3: 80% Reduction */}
          <div className="flex items-center gap-4 border-b sm:border-b-0 lg:border-r border-white/10 pb-4 sm:pb-0 pr-0 lg:pr-4">
            <div className="w-12 h-12 rounded-2xl bg-[#39D98A]/10 border border-[#39D98A]/30 flex items-center justify-center text-[#39D98A] shrink-0 shadow-glow-emerald">
              <TrendingUp size={22} />
            </div>
            <div>
              <div className="text-xl font-display font-extrabold text-slate-100">80% Saved</div>
              <div className="text-xs text-slate-400 font-mono">Manual Triage Automation</div>
            </div>
          </div>

          {/* Item 4: 10,000+ Saplings */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FFE5D9]/10 border border-[#FFE5D9]/30 flex items-center justify-center text-[#FFE5D9] shrink-0">
              <Leaf size={22} />
            </div>
            <div>
              <div className="text-xl font-display font-extrabold text-slate-100">10,000+</div>
              <div className="text-xs text-slate-400 font-mono">Saplings Planted (NSS Lead)</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

