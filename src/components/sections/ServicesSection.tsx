import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layout, Server, Cloud, Brain, Zap, Sparkles, Check } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 'ai-solutions',
      title: 'AI Solutions',
      icon: Cpu,
      description: 'End-to-end AI integration, automated patient triage engines, NLP legal summarization, and custom predictive model deployment.',
      highlights: ['Predictive ML Models', 'Class Imbalance Mitigation', 'Sub-50ms Inference']
    },
    {
      id: 'fullstack',
      title: 'Full Stack Development',
      icon: Layout,
      description: 'Crafting luxury, high-performance web applications using React, Next.js 15, TypeScript, TailwindCSS, Framer Motion, and Three.js.',
      highlights: ['Next.js 15 & React 19', 'Awwwards-Level Design', '60 FPS Motion']
    },
    {
      id: 'rest-apis',
      title: 'REST APIs & Microservices',
      icon: Server,
      description: 'Designing high-throughput async microservices with FastAPI and Flask, Pydantic data validation, and strict API contracts.',
      highlights: ['FastAPI Async Endpoints', 'Postman Automated Testing', 'OpenAPI Schema']
    },
    {
      id: 'cloud',
      title: 'Cloud Deployment',
      icon: Cloud,
      description: 'Architecting resilient cloud infrastructure on AWS (EC2, S3), containerizing services via Docker, and Infrastructure as Code with Terraform.',
      highlights: ['AWS Infrastructure', 'Docker Containerization', 'Terraform Provisioning']
    },
    {
      id: 'ml-apps',
      title: 'Machine Learning Applications',
      icon: Brain,
      description: 'Feature engineering, Random Forest / Neural Network model training using Scikit-Learn, TensorFlow, Pandas, and NumPy.',
      highlights: ['Custom ML Pipelines', 'Feature Vector Tuning', 'Real-Time Risk Scoring']
    },
    {
      id: 'automation',
      title: 'Automation & DevOps',
      icon: Zap,
      description: 'Streamlining CI/CD workflows, automated triage queues, Git/GitHub collaborative maintainer reviews, and script automation.',
      highlights: ['80% Effort Reduction', 'Agile CI/CD Pipelines', 'Git SuperContributor']
    }
  ];

  return (
    <section id="services" className="py-28 relative overflow-hidden bg-[#050816] bg-noise border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 z-10 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111827] border border-[#FF6B57]/30 text-[#FFE5D9] text-xs font-mono tracking-widest uppercase shadow-glow-coral">
            <Sparkles size={13} className="text-[#FF6B57]" /> Engineering Services
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-100 tracking-tight">
            Specialized <span className="text-gradient-coral">Engineering Services</span>
          </h2>
          <p className="text-sm text-slate-300 font-sans leading-relaxed">
            High-value technical capabilities tailored for startups, enterprise systems, and open-source ecosystems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const IconComp = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <div className="p-7 rounded-3xl glass-panel border-white/15 bg-[#111827]/85 card-hover h-full flex flex-col justify-between group shadow-glass-luxury">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#FF6B57]/10 border border-[#FF6B57]/30 flex items-center justify-center text-[#FF6B57] shadow-glow-coral mb-5 group-hover:scale-110 transition-transform">
                      <IconComp size={24} />
                    </div>

                    <h3 className="text-xl font-display font-bold text-slate-100 group-hover:text-[#FF6B57] transition-colors mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans mb-5">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 space-y-1.5">
                    {service.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                        <Check size={13} className="text-[#39D98A]" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
