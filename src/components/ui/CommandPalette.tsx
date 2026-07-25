import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, X, User, Code, Briefcase, Award, 
  Mail, Terminal, ExternalLink, Github, Linkedin, FileText
} from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenResume,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open
          window.dispatchEvent(new CustomEvent('toggle-cmd-k'));
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const navigationItems = [
    { id: 'hero', title: 'Home / Hero Section', icon: User, action: () => scrollTo('hero') },
    { id: 'about', title: 'About & Terminal CLI', icon: Terminal, action: () => scrollTo('about') },
    { id: 'skills', title: 'Skills & Tech Dashboard', icon: Code, action: () => scrollTo('skills') },
    { id: 'projects', title: 'Featured Projects (VitalVision & NyayMitra)', icon: Briefcase, action: () => scrollTo('projects') },
    { id: 'ai-playground', title: 'AI Playground (6 Interactive Mini-Tools)', icon: Code, action: () => scrollTo('ai-playground') },
    { id: 'experience', title: 'Work Experience & Timeline', icon: Briefcase, action: () => scrollTo('experience') },
    { id: 'achievements', title: 'Achievements & Hacktoberfest Top 10k', icon: Award, action: () => scrollTo('achievements') },
    { id: 'contact', title: 'Contact & Email Submission', icon: Mail, action: () => scrollTo('contact') },
    { id: 'resume', title: 'View / Download Official Resume', icon: FileText, action: onOpenResume },
    { id: 'github', title: 'Open GitHub Profile', icon: Github, action: () => window.open('https://github.com/er-shubham-raj', '_blank') },
    { id: 'linkedin', title: 'Open LinkedIn Profile', icon: Linkedin, action: () => window.open('https://linkedin.com/in/shubham-raj-a0979a289', '_blank') },
  ];

  const scrollTo = (id: string) => {
    onClose();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filteredItems = navigationItems.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] flex items-start justify-center pt-20 px-4 bg-black/70 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-2xl bg-[#0B1021] border border-white/15 rounded-2xl shadow-2xl overflow-hidden glass-panel"
        >
          {/* Search Header */}
          <div className="relative flex items-center px-4 py-3.5 border-b border-white/10">
            <Search className="w-5 h-5 text-[#FF6B57] mr-3" />
            <input
              type="text"
              autoFocus
              placeholder="Search sections, projects, profiles, or press Esc..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent text-slate-100 placeholder-slate-500 text-sm font-sans focus:outline-none"
            />
            <button
              onClick={onClose}
              className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search Results List */}
          <div className="max-h-96 overflow-y-auto p-2 divide-y divide-white/5">
            {filteredItems.length === 0 ? (
              <div className="p-8 text-center text-slate-400 text-sm">
                No matching results found for "<span className="text-[#FF6B57]">{query}</span>"
              </div>
            ) : (
              filteredItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      item.action();
                      onClose();
                    }}
                    className="w-full flex items-center justify-between px-3.5 py-3 rounded-xl hover:bg-gradient-to-r hover:from-[#FF6B57]/15 hover:to-[#F6C453]/10 text-left text-slate-200 text-sm transition group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-[#FF6B57]/40 text-[#FF6B57]">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="font-medium text-slate-200 group-hover:text-white">
                        {item.title}
                      </span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-[#F6C453] opacity-0 group-hover:opacity-100 transition" />
                  </button>
                );
              })
            )}
          </div>

          {/* Footer Shortcuts Info */}
          <div className="px-4 py-2.5 bg-black/40 border-t border-white/5 flex items-center justify-between text-xs text-slate-500 font-mono">
            <span>Use ↑ ↓ keys to navigate</span>
            <div className="flex items-center space-x-2">
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-slate-300 text-[10px]">ESC</kbd>
              <span>to close</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
