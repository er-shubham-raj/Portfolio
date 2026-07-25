import React from 'react';
import { 
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiPython, SiCplusplus, 
  SiFastapi, SiFlask, SiTensorflow, SiScikitlearn, 
  SiDocker, SiTerraform, SiMongodb, SiMysql, SiGit, SiPostman, SiTailwindcss
} from 'react-icons/si';
import { FaJava, FaAws } from 'react-icons/fa';

export const TechMarquee: React.FC = () => {
  const techStack = [
    { name: 'React', icon: SiReact, color: 'text-cyan-400' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
    { name: 'Python', icon: SiPython, color: 'text-[#F6C453]' },
    { name: 'C++', icon: SiCplusplus, color: 'text-blue-500' },
    { name: 'Java', icon: FaJava, color: 'text-red-400' },
    { name: 'FastAPI', icon: SiFastapi, color: 'text-[#39D98A]' },
    { name: 'Flask', icon: SiFlask, color: 'text-[#FFE5D9]' },
    { name: 'TensorFlow', icon: SiTensorflow, color: 'text-orange-400' },
    { name: 'Scikit-Learn', icon: SiScikitlearn, color: 'text-orange-300' },
    { name: 'AWS', icon: FaAws, color: 'text-[#F6C453]' },
    { name: 'Docker', icon: SiDocker, color: 'text-blue-400' },
    { name: 'Terraform', icon: SiTerraform, color: 'text-purple-400' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-400' },
    { name: 'MySQL', icon: SiMysql, color: 'text-blue-300' },
    { name: 'Git & GitHub', icon: SiGit, color: 'text-[#FF6B57]' },
    { name: 'Postman', icon: SiPostman, color: 'text-orange-500' },
    { name: 'TailwindCSS', icon: SiTailwindcss, color: 'text-cyan-300' },
  ];

  return (
    <div className="py-6 bg-[#050816]/95 border-y border-white/10 overflow-hidden relative">
      {/* Gradient Fades on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#050816] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#050816] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee">
        {/* First Loop */}
        <div className="flex items-center shrink-0 gap-4 pr-4">
          {techStack.map((tech, idx) => {
            const IconComponent = tech.icon;
            return (
              <div
                key={`t1-${idx}`}
                className="flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-slate-300 hover:border-[#FF6B57]/40 hover:bg-white/10 transition-all duration-300 shrink-0 whitespace-nowrap group"
              >
                <IconComponent className={`w-5 h-5 ${tech.color} group-hover:scale-110 transition-transform`} />
                <span className="text-xs font-mono font-medium text-slate-200">{tech.name}</span>
              </div>
            );
          })}
        </div>

        {/* Second Loop (Duplicate for Seamless Marquee) */}
        <div className="flex items-center shrink-0 gap-4 pr-4">
          {techStack.map((tech, idx) => {
            const IconComponent = tech.icon;
            return (
              <div
                key={`t2-${idx}`}
                className="flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-slate-300 hover:border-[#FF6B57]/40 hover:bg-white/10 transition-all duration-300 shrink-0 whitespace-nowrap group"
              >
                <IconComponent className={`w-5 h-5 ${tech.color} group-hover:scale-110 transition-transform`} />
                <span className="text-xs font-mono font-medium text-slate-200">{tech.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

