import React from 'react';
import { cn } from '../../lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        'glass-panel rounded-2xl p-6 relative overflow-hidden transition-all duration-300 card-hover',
        onClick && 'cursor-pointer',
        className
      )}
    >
      {/* Subtle top reflection line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
      {children}
    </div>
  );
};
