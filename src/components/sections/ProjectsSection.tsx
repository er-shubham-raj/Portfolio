import React from 'react';
import { motion } from 'framer-motion';
import { projectsData, Project } from '../../data/projectsData';
import { Github, ExternalLink, Sparkles, CheckCircle2, ArrowRight, Code, ShieldCheck } from 'lucide-react';
import toast from 'react-hot-toast';

interface ProjectsSectionProps {
  onOpenCaseStudy: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenCaseStudy }) => {
  const handleLiveDemo = (e: React.MouseEvent, project: Project) => {
    e.stopPropagation();
    if (project.liveDemoUrl === '#' || !project.liveDemoUrl) {
      toast('Live Demo is currently being deployed to cloud staging!', {
        icon: '🚀',
        style: {
          background: '#111827',
          color: '#F6C453',
          border: '1px solid rgba(246, 196, 83, 0.3)',
        },
      });
    } else {
      window.open(project.liveDemoUrl, '_blank');
    }
  };

  return (
    <section id="projects" className="py-28 relative overflow-hidden bg-[#050816] bg-noise">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-[#FF6B57]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 z-10 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111827] border border-[#FF6B57]/30 text-[#FFE5D9] text-xs font-mono tracking-widest uppercase shadow-glow-coral">
            <Sparkles size={13} className="text-[#FF6B57]" /> Featured Engineering Projects
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-100 tracking-tight">
            AI & Backend <span className="text-gradient-coral">Case Studies</span>
          </h2>
          <p className="text-sm text-slate-300 font-sans leading-relaxed">
            In-depth architectural analysis of production-grade AI patient triage systems and legal NLP engines.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <div className="p-8 h-full rounded-3xl glass-panel border-white/15 bg-[#111827]/85 card-hover flex flex-col justify-between group shadow-glass-luxury relative overflow-hidden">
                {/* Gradient Accent Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#FF6B57]/20 via-transparent to-transparent pointer-events-none" />

                <div>
                  {/* Card Banner Header */}
                  <div className="w-full p-6 rounded-2xl bg-[#050816]/90 border border-white/10 relative overflow-hidden mb-6 shadow-inner">
                    <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#FF6B57]/10 text-[#FFE5D9] border border-[#FF6B57]/30">
                        {project.date}
                      </span>
                      {project.badgeText && (
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#F6C453]/15 text-[#F6C453] border border-[#F6C453]/30 flex items-center gap-1.5">
                          <ShieldCheck size={13} /> {project.badgeText}
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl font-display font-bold text-slate-100 group-hover:text-[#FF6B57] transition-colors">
                      {project.title.split('–')[0]}
                    </h3>
                    <p className="text-xs text-[#F6C453] font-mono mt-1">
                      {project.title.split('–')[1] || project.subtitle}
                    </p>
                  </div>

                  {/* Problem Statement */}
                  <div className="mb-5">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">Problem Statement</div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                      {project.problemStatement}
                    </p>
                  </div>

                  {/* Key Accomplishments */}
                  <div className="mb-6">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">Key Highlights</div>
                    <ul className="space-y-2">
                      {project.features.slice(0, 2).map((feat, fIdx) => (
                        <li key={fIdx} className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed">
                          <CheckCircle2 size={15} className="text-[#39D98A] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stats Badges Row */}
                  <div className="grid grid-cols-3 gap-2 mb-6 p-3 rounded-2xl bg-[#050816]/70 border border-white/5 text-center">
                    {project.stats.map((s, stIdx) => (
                      <div key={stIdx} className="space-y-0.5">
                        <div className="text-sm font-display font-extrabold text-[#FF6B57]">{s.metric}</div>
                        <div className="text-[10px] text-slate-400 font-mono leading-tight">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-xl bg-[#050816] text-slate-300 text-xs font-mono border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 text-xs font-medium flex items-center gap-1.5 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={14} /> GitHub Repo
                    </a>

                    <button
                      onClick={(e) => handleLiveDemo(e, project)}
                      className="px-4 py-2 rounded-xl bg-[#F6C453]/10 hover:bg-[#F6C453]/20 text-[#F6C453] border border-[#F6C453]/30 text-xs font-medium flex items-center gap-1.5 transition-colors"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </button>
                  </div>

                  <button
                    onClick={() => onOpenCaseStudy(project)}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#FF6B57] to-[#F6C453] text-[#050816] font-display font-bold text-xs flex items-center gap-1.5 shadow-glow-coral transition-all hover:scale-[1.02]"
                  >
                    Case Study <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

