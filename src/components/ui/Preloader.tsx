import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LOADING_STEPS = [
  "INITIALIZING PORTFOLIO ENGINE",
  "CONNECTING R3F 3D CANVAS...",
  "LOADING VITALVISION ML PIPELINE...",
  "READY"
];

export const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    const hasSeenPreloader = sessionStorage.getItem('shubham_preloader_seen');
    if (hasSeenPreloader) {
      setIsVisible(false);
      onComplete();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 15) + 6;
        if (next >= 25 && next < 50) setStepIndex(1);
        if (next >= 50 && next < 85) setStepIndex(2);
        if (next >= 85) setStepIndex(3);

        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            sessionStorage.setItem('shubham_preloader_seen', 'true');
            onComplete();
          }, 350);
          return 100;
        }
        return next;
      });
    }, 65);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050816] text-white"
      >
        <div className="relative flex flex-col items-center">
          {/* Logo animation */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="w-20 h-20 rounded-2xl bg-[#FF6B57]/10 border border-[#FF6B57]/30 flex items-center justify-center mb-6 shadow-glow-coral relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6B57]/20 via-transparent to-[#F6C453]/20" />
            <span className="font-display text-2xl font-extrabold text-gradient-coral">
              SR
            </span>
          </motion.div>

          <h2 className="text-lg font-display font-extrabold tracking-widest text-slate-100 mb-1">
            SHUBHAM RAJ
          </h2>
          <p className="text-[11px] text-[#F6C453] tracking-widest font-mono mb-6 h-4 transition-all duration-300">
            {LOADING_STEPS[stepIndex]}
          </p>

          {/* Progress bar */}
          <div className="w-64 h-1.5 bg-slate-900/90 rounded-full overflow-hidden relative border border-white/5">
            <motion.div
              className="h-full bg-gradient-to-r from-[#FF6B57] via-[#F6C453] to-[#FFE5D9] rounded-full"
              style={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>
          <span className="mt-3 font-mono text-xs text-[#FF6B57] font-semibold">{Math.min(progress, 100)}%</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

