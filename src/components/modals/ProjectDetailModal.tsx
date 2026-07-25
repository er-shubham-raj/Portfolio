import React from 'react';
import { Modal } from '../ui/Modal';
import { Project } from '../../data/projectsData';
import { Github, ExternalLink, Cpu, CheckCircle2, AlertCircle, Lightbulb } from 'lucide-react';
import toast from 'react-hot-toast';

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  if (!project) return null;

  const handleLiveDemoClick = () => {
    if (project.liveDemoUrl === '#' || !project.liveDemoUrl) {
      toast('Live Demo link is coming soon! Update link in src/data/projectsData.ts', {
        icon: '🚀',
        style: {
          background: '#0F172A',
          color: '#34D399',
          border: '1px solid rgba(16, 185, 129, 0.3)',
        },
      });
    } else {
      window.open(project.liveDemoUrl, '_blank');
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={project.title} maxWidth="max-w-4xl">
      <div className="space-y-6">
        {/* Banner Header */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
              {project.date}
            </span>
            <h4 className="text-xl font-bold text-white mt-2">{project.subtitle}</h4>
            {project.badgeText && (
              <p className="text-xs text-emerald-300 font-medium mt-1">🏆 {project.badgeText}</p>
            )}
          </div>
          <div className="flex gap-3 shrink-0">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm flex items-center gap-2 border border-white/10 transition-colors"
            >
              <Github size={16} /> Code
            </a>
            <button
              onClick={handleLiveDemoClick}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm flex items-center gap-2 shadow-lg shadow-emerald-600/20 transition-all border border-emerald-400/30"
            >
              <ExternalLink size={16} /> Live Demo
            </button>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-3 gap-3">
          {project.stats.map((st, i) => (
            <div key={i} className="p-4 rounded-xl bg-slate-900/80 border border-white/5 text-center">
              <div className="text-2xl font-extrabold text-emerald-400">
                {st.metric}
              </div>
              <div className="text-xs text-slate-400 mt-1">{st.label}</div>
            </div>
          ))}
        </div>

        {/* Tech Stack Badges */}
        <div>
          <h5 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
            <Cpu size={16} className="text-emerald-400" /> Technologies Used
          </h5>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg bg-slate-900 text-slate-300 text-xs font-mono border border-white/5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Problem Statement */}
        <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5">
          <h5 className="text-xs font-mono text-slate-400 uppercase mb-2">Problem Statement</h5>
          <p className="text-sm text-slate-300 leading-relaxed">{project.problemStatement}</p>
        </div>

        {/* Features List */}
        <div>
          <h5 className="text-xs font-mono text-slate-400 uppercase mb-3 flex items-center gap-2">
            <CheckCircle2 size={16} className="text-emerald-400" /> Key Engineering Accomplishments
          </h5>
          <ul className="space-y-2">
            {project.features.map((feat, i) => (
              <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                {feat}
              </li>
            ))}
          </ul>
        </div>

        {/* Architecture & Engineering Challenges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5">
            <h5 className="text-xs font-mono text-slate-400 uppercase mb-2 flex items-center gap-2">
              <AlertCircle size={16} className="text-amber-400" /> Technical Challenges
            </h5>
            <p className="text-sm text-slate-300 leading-relaxed">{project.challenges}</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5">
            <h5 className="text-xs font-mono text-slate-400 uppercase mb-2 flex items-center gap-2">
              <Lightbulb size={16} className="text-emerald-400" /> Key Learnings
            </h5>
            <p className="text-sm text-slate-300 leading-relaxed">{project.learnings}</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};
