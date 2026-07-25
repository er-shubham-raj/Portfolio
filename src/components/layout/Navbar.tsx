import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon, Download, Menu, X, FileText, Search, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface NavbarProps {
  onOpenResumeModal: () => void;
  onOpenCmdK?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal, onOpenCmdK }) => {
  const { isScrolled, activeSection } = useScrollPosition();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 transition-all duration-300 pointer-events-none">
      <motion.nav
        initial={{ y: -25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto flex items-center justify-between w-full max-w-6xl rounded-2xl transition-all duration-300 ${
          isScrolled
            ? 'glass-nav py-2.5 px-6 shadow-2xl scale-[0.99] border-white/15'
            : 'glass-panel py-3.5 px-6 border-white/10'
        }`}
      >
        {/* Logo: SR emblem + Name */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#FF6B57] via-[#F6C453] to-[#FFE5D9] p-[1.5px] shadow-glow-coral group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#050816] rounded-[10px] flex items-center justify-center">
              <span className="font-display text-xs font-extrabold text-gradient-coral">
                SR
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-tight text-slate-100 group-hover:text-[#FF6B57] transition-colors">
              SHUBHAM RAJ
            </span>
            <span className="text-[10px] text-[#F6C453] font-mono tracking-wider flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#39D98A] animate-pulse" />
              AVAILABLE FOR HIRE
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative py-1 text-xs font-medium transition-colors flex flex-col items-center gap-1 ${
                  isActive ? 'text-[#FF6B57] font-semibold' : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeNavDot"
                    className="w-1.5 h-1.5 rounded-full bg-[#FF6B57] shadow-[0_0_10px_#FF6B57]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Cmd + K Trigger Button */}
          {onOpenCmdK && (
            <button
              onClick={onOpenCmdK}
              className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 border border-white/12 text-xs font-mono flex items-center gap-2 transition-all group"
              title="Search and Navigate (Cmd+K / Ctrl+K)"
            >
              <Search size={14} className="text-[#FF6B57] group-hover:scale-110 transition-transform" />
              <span className="text-xs font-sans text-slate-300">Search</span>
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] font-mono text-slate-400 border border-white/10">⌘K</kbd>
            </button>
          )}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition-colors"
            title="Toggle Theme"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={15} className="text-[#F6C453]" /> : <Moon size={15} className="text-[#FF6B57]" />}
          </button>

          {/* Resume Button */}
          <button
            onClick={onOpenResumeModal}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#FF6B57]/20 to-[#F6C453]/20 hover:from-[#FF6B57]/30 hover:to-[#F6C453]/30 text-[#FFE5D9] border border-[#FF6B57]/40 text-xs font-semibold flex items-center gap-2 transition-all shadow-glow-coral group"
          >
            <Download size={14} className="group-hover:translate-y-0.5 transition-transform" /> Resume
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex sm:hidden items-center gap-2">
          {onOpenCmdK && (
            <button
              onClick={onOpenCmdK}
              className="p-1.5 rounded-xl bg-white/5 text-slate-300 border border-white/10"
              aria-label="Search"
            >
              <Search size={15} className="text-[#FF6B57]" />
            </button>
          )}
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-xl bg-white/5 text-slate-300 border border-white/10"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={15} className="text-[#F6C453]" /> : <Moon size={15} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-xl bg-white/5 text-slate-300 border border-white/10"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="pointer-events-auto absolute top-20 left-4 right-4 p-4 rounded-2xl glass-panel border border-white/15 shadow-2xl flex flex-col gap-2 sm:hidden z-50 bg-[#050816]"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 text-xs font-medium transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                {activeSection === link.href.substring(1) && (
                  <span className="w-2 h-2 rounded-full bg-[#FF6B57]" />
                )}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="mt-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-[#FF6B57] to-[#F6C453] text-[#050816] font-bold text-xs flex items-center justify-center gap-2 shadow-lg"
            >
              <FileText size={14} /> Resume Preview & Download
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

