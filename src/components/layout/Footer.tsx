import React from 'react';
import { profileData } from '../../data/profileData';
import { Github, Linkedin, Mail, ArrowUp, Sparkles, Heart } from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050816] border-t border-white/10 pt-16 pb-12 text-slate-400 overflow-hidden">
      {/* Glow background accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-gradient-to-t from-[#FF6B57]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Bio */}
          <div className="md:col-span-2 space-y-4">
            <a href="#home" className="inline-flex items-center gap-2 group">
              <span className="font-display text-xl font-extrabold text-white tracking-tight">
                SHUBHAM <span className="text-gradient-coral font-mono">RAJ</span>
              </span>
            </a>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed">
              Final Year B.Tech Computer Science Engineer at VIT Bhopal University. Specialized in AI/ML triage engines, cloud automation, high-performance web microservices, and open-source software engineering.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-[#FF6B57]/20 hover:text-[#FFE5D9] border border-white/10 hover:border-[#FF6B57]/40 transition-all duration-300 shadow-md"
                aria-label="GitHub"
              >
                <Github size={17} />
              </a>
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-[#FF6B57]/20 hover:text-[#FFE5D9] border border-white/10 hover:border-[#FF6B57]/40 transition-all duration-300 shadow-md"
                aria-label="LinkedIn"
              >
                <Linkedin size={17} />
              </a>
              <a
                href={profileData.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-[#F6C453]/20 hover:text-[#F6C453] border border-white/10 hover:border-[#F6C453]/40 transition-all duration-300 shadow-md"
                aria-label="LeetCode"
              >
                <SiLeetcode size={17} />
              </a>
              <a
                href={profileData.socials.email}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-[#FF6B57]/20 hover:text-[#FFE5D9] border border-white/10 hover:border-[#FF6B57]/40 transition-all duration-300 shadow-md"
                aria-label="Email"
              >
                <Mail size={17} />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-semibold text-slate-100 uppercase font-mono tracking-widest mb-4 flex items-center gap-1.5">
              <Sparkles size={13} className="text-[#FF6B57]" /> Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#about" className="hover:text-[#FF6B57] transition-colors">About & Terminal</a></li>
              <li><a href="#skills" className="hover:text-[#FF6B57] transition-colors">Technical Dashboard</a></li>
              <li><a href="#projects" className="hover:text-[#FF6B57] transition-colors">Featured Projects</a></li>
              <li><a href="#ai-playground" className="hover:text-[#F6C453] transition-colors">AI Playground</a></li>
              <li><a href="#experience" className="hover:text-[#FF6B57] transition-colors">Experience & Hacktoberfest</a></li>
              <li><a href="#contact" className="hover:text-[#FF6B57] transition-colors">Contact Form</a></li>
            </ul>
          </div>

          {/* Col 3: Contact & Status */}
          <div>
            <h4 className="text-xs font-semibold text-slate-100 uppercase font-mono tracking-widest mb-4">Contact Info</h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li className="text-slate-300 flex items-center gap-2">
                <Mail size={13} className="text-[#FF6B57]" />
                <a href="mailto:er.rajshubham@gmail.com" className="hover:text-[#FF6B57] transition-colors">
                  er.rajshubham@gmail.com
                </a>
              </li>
              <li className="text-slate-300">{profileData.phone}</li>
              <li className="text-slate-400">{profileData.location}</li>
              <li className="pt-2">
                <span className="px-2.5 py-1 rounded-full bg-[#39D98A]/10 text-[#39D98A] border border-[#39D98A]/30 text-[10px] font-mono tracking-wider">
                  ● Available for Full-Time Roles
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="flex items-center gap-1">
            © {new Date().getFullYear()} Shubham Raj. Crafted with <Heart size={12} className="text-[#FF6B57] fill-[#FF6B57]" /> & React 19.
          </p>
          <button
            onClick={scrollToTop}
            className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-[#FF6B57]/20 text-slate-200 border border-white/10 hover:border-[#FF6B57]/40 flex items-center gap-2 transition-all group"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform text-[#FF6B57]" />
          </button>
        </div>
      </div>
    </footer>
  );
};

