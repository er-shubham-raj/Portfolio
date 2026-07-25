import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What full-time roles is Shubham Raj looking for?',
      a: 'Shubham is seeking full-time opportunities as a Full Stack Engineer, AI/ML Engineer, Backend Microservices Developer, or Cloud Software Engineer starting upon graduation.'
    },
    {
      q: 'What makes Shubham\'s engineering background unique?',
      a: 'Shubham combines high-level AI/ML specialization (VitalVision Health-Hack 2025, NyayMitra NLP) with rigorous competitive coding (300+ LeetCode solved) and worldwide open-source recognition (Hacktoberfest SuperContributor Top 10k).'
    },
    {
      q: 'How does the EmailJS integration work on this site?',
      a: 'All submitted contact messages are dispatched directly to er.rajshubham@gmail.com with auto-captured metadata (date/time, browser details, device orientation) for instant notification.'
    },
    {
      q: 'What tech stack powers this portfolio?',
      a: 'Built with React 19, Next.js 15 concepts, TypeScript, TailwindCSS, Framer Motion, Lenis Smooth Scroll, Three.js / React Three Fiber, and EmailJS.'
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#050816] bg-noise border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 z-10 relative">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111827] border border-[#FF6B57]/30 text-[#FFE5D9] text-xs font-mono tracking-widest uppercase shadow-glow-coral">
            <HelpCircle size={13} className="text-[#FF6B57]" /> Common Questions
          </div>
          <h2 className="text-4xl font-display font-extrabold text-slate-100 tracking-tight">
            Frequently Asked <span className="text-gradient-coral">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-3xl glass-panel border-white/15 bg-[#111827]/85 overflow-hidden transition-all duration-300 shadow-glass-luxury"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-display font-bold text-base text-slate-100 flex items-center gap-2.5">
                    <Sparkles size={15} className="text-[#F6C453] shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-[#FF6B57] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans border-t border-white/5"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
