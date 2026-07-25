import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Calendar, Clock, ArrowRight, X, Sparkles } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  category: 'AI' | 'React' | 'Cloud' | 'Machine Learning';
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
}

export const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const posts: BlogPost[] = [
    {
      id: 'vitalvision-triage',
      title: 'Architecting an Automated AI Patient Triage Engine with FastAPI & Scikit-Learn',
      category: 'AI',
      date: 'Nov 2025',
      readTime: '5 min read',
      excerpt: 'How we reduced hospital emergency triage delay by 80% using Random Forest prediction vectors and low-latency microservice endpoints.',
      content: `Overcrowded hospital emergency rooms face critical delays when manually triaging high-risk patients. In this article, I break down the architecture of VitalVision—our AI-powered Patient Risk Scheduler designed for Health-Hack 2025.

Key Architectural Takeaways:
1. Feature Engineering: Extracted vital signs, age vectors, and symptom severity coefficients into normalized Scikit-learn pipeline inputs.
2. Latency Optimization: Microservice endpoints built on FastAPI achieved sub-50ms inference times under concurrent load.
3. Queue Prioritization: Real-time sorting algorithms dynamically route high-priority patients directly to ICU triage.`
    },
    {
      id: 'open-source-hacktoberfest',
      title: 'Lessons from Ranking Top 10,000 Worldwide in Hacktoberfest SuperContributor',
      category: 'Cloud',
      date: 'Oct 2024',
      readTime: '4 min read',
      excerpt: 'Strategic code reviews, pull request discipline, and collaborative maintainer workflows across global open-source repositories.',
      content: `Earning the Hacktoberfest SuperContributor badge required submitting 6+ merged pull requests across diverse open-source codebases.

Key Practices for Open Source Impact:
• Rigorous Issue Analysis: Before writing code, engage maintainers in issue discussions to align on design patterns.
• Atomic Commits & Clear PR Descriptions: Make pull requests easy to review by isolating refactoring from functional changes.
• Automated CI Validation: Ensure all linting, unit tests, and typing checks pass seamlessly prior to requesting review.`
    },
    {
      id: 'nyaymitra-nlp',
      title: 'Building NyayMitra: Scalable NLP Pipelines for Indian Legal Document Guidance',
      category: 'Machine Learning',
      date: 'Nov 2024',
      readTime: '6 min read',
      excerpt: 'Tokenization, statutory clause classification, and text summarization to simplify Indian constitutional and penal legalese.',
      content: `Legal legalese presents a huge barrier for citizens needing swift statutory insights. NyayMitra was designed to automate summarization and domain classification across 100+ legal query domains.

Core Technical Implementation:
• Transformer & TF-IDF Summarization: Extracts crucial legal precedents while omitting redundant procedural jargon.
• Domain Triage: Routes queries across constitutional law, criminal penal codes, and civil rights with citation back-references.`
    }
  ];

  return (
    <section id="blog" className="py-28 relative overflow-hidden bg-[#050816] bg-noise border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 z-10 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111827] border border-[#FF6B57]/30 text-[#FFE5D9] text-xs font-mono tracking-widest uppercase shadow-glow-coral">
            <BookOpen size={13} className="text-[#FF6B57]" /> Articles & Thoughts
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-100 tracking-tight">
            Latest Engineering <span className="text-gradient-coral">Articles</span>
          </h2>
          <p className="text-sm text-slate-300 font-sans leading-relaxed">
            Technical writing on AI triage microservices, open-source best practices, and NLP pipelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <div className="p-7 rounded-3xl glass-panel border-white/15 bg-[#111827]/85 card-hover h-full flex flex-col justify-between group shadow-glass-luxury">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#FF6B57]/10 text-[#FFE5D9] border border-[#FF6B57]/30">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-slate-400 text-xs font-mono">
                      <Clock size={13} /> {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-lg font-display font-bold text-slate-100 group-hover:text-[#FF6B57] transition-colors mb-2.5 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans mb-4">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Calendar size={12} /> {post.date}
                  </span>
                  <button
                    onClick={() => setSelectedPost(post)}
                    className="text-xs font-mono font-bold text-[#F6C453] hover:text-[#FF6B57] flex items-center gap-1 transition-colors"
                  >
                    Read Article <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Reader Modal */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-2xl bg-[#0B1021] border border-white/15 rounded-3xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto glass-panel relative shadow-2xl space-y-4"
            >
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
              >
                <X size={18} />
              </button>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#FF6B57]/10 text-[#FFE5D9] border border-[#FF6B57]/30">
                  {selectedPost.category}
                </span>
                <span className="text-xs font-mono text-slate-400">• {selectedPost.readTime}</span>
              </div>
              <h2 className="text-2xl font-display font-bold text-slate-100">{selectedPost.title}</h2>
              <div className="text-xs font-mono text-[#F6C453]">Published: {selectedPost.date}</div>
              <div className="pt-4 border-t border-white/10 text-sm text-slate-300 leading-relaxed whitespace-pre-line font-sans">
                {selectedPost.content}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
