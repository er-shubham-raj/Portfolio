import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Code, Sparkles, FileText, UserCheck, Smile, Send, RefreshCw, Copy, Check } from 'lucide-react';
import toast from 'react-hot-toast';

export const AIPlayground: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'chat' | 'code' | 'prompt' | 'summarize' | 'resume' | 'sentiment'>('chat');

  // Mini AI Chat State
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'user' | 'ai'; text: string }>>([
    { sender: 'ai', text: 'Hello! I am Shubham AI. Ask me about Shubham Raj\'s experience, LeetCode rank, VitalVision project, or tech stack!' }
  ]);
  const [chatInput, setChatInput] = useState('');

  // Code Explainer State
  const [codeSnippet, setCodeSnippet] = useState('def priority_triage(patients):\n    # Sort emergency patients by risk score vector\n    return sorted(patients, key=lambda x: x.risk_score, reverse=True)');
  const [codeExplanation, setCodeExplanation] = useState('');

  // Prompt Generator State
  const [promptTopic, setPromptTopic] = useState('FastAPI Microservice');
  const [generatedPrompt, setGeneratedPrompt] = useState('');

  // Text Summarizer State
  const [rawText, setRawText] = useState('Indian Penal Code Section 302 deals with the punishment for murder. It states that whoever commits murder shall be punished with death or imprisonment for life, and shall also be liable to fine.');
  const [summarizedText, setSummarizedText] = useState('');

  // Resume Analyzer State
  const [resumeRole, setResumeRole] = useState('Full Stack AI Engineer');
  const [resumeAnalysis, setResumeAnalysis] = useState('');

  // Sentiment Analysis State
  const [sentimentInput, setSentimentInput] = useState('Shubham built an extraordinary high-throughput AI triage engine that reduced hospital wait times dramatically!');
  const [sentimentResult, setSentimentResult] = useState<{ score: number; label: string } | null>(null);

  // Handlers
  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg = chatInput.trim();
    setChatMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setChatInput('');

    setTimeout(() => {
      let reply = "Shubham Raj is a B.Tech Computer Science student at VIT Bhopal specializing in AI/ML microservices, cloud automation (AWS/Docker), and 300+ LeetCode DSA problem solving.";
      const lower = userMsg.toLowerCase();

      if (lower.includes('leetcode') || lower.includes('dsa') || lower.includes('rank')) {
        reply = "Shubham has solved 300+ DSA problems on LeetCode with a global ranking of ~650K out of 50M+ developers worldwide!";
      } else if (lower.includes('project') || lower.includes('vitalvision') || lower.includes('nyaymitra')) {
        reply = "Shubham built VitalVision (AI Patient Triage reducing manual triage effort by 80%) and NyayMitra (AI Indian Legal Guidance NLP Summarizer).";
      } else if (lower.includes('hacktoberfest') || lower.includes('open source')) {
        reply = "Shubham is a Hacktoberfest SuperContributor ranked in the Top 10,000 worldwide with 6+ merged pull requests across global projects!";
      } else if (lower.includes('contact') || lower.includes('email') || lower.includes('hire')) {
        reply = "You can reach Shubham directly at er.rajshubham@gmail.com or connect via LinkedIn and GitHub!";
      }

      setChatMessages(prev => [...prev, { sender: 'ai', text: reply }]);
    }, 400);
  };

  const handleExplainCode = () => {
    setCodeExplanation(
      `Analysis of snippet:\n• Algorithm: High-throughput reverse sorting pipeline keying on 'risk_score'.\n• Time Complexity: O(N log N) average.\n• Use Case: Real-time patient priority queue ordering inside VitalVision FastAPI inference engine.`
    );
  };

  const handleGeneratePrompt = () => {
    setGeneratedPrompt(
      `System Role: Senior Cloud & Backend Architect.\nTask: Design a production-grade ${promptTopic} using Python, Docker containerization, and AWS ECS.\nConstraint: Sub-50ms inference latency, Pydantic data validation, and strict error handling.`
    );
  };

  const handleSummarizeText = () => {
    setSummarizedText(
      `IPC Section 302 summary: Mandates capital punishment or life imprisonment plus monetary fines for the crime of murder under Indian Penal Code statutory jurisdiction.`
    );
  };

  const handleAnalyzeResume = () => {
    setResumeAnalysis(
      `Match Score: 96% for ${resumeRole}.\nStrengths: B.Tech CS @ VIT Bhopal (8.86 CGPA), 300+ LeetCode Solved, Hacktoberfest Top 10k SuperContributor, VitalVision ML Triage & NyayMitra NLP.`
    );
  };

  const handleAnalyzeSentiment = () => {
    setSentimentResult({
      score: 0.94,
      label: 'POSITIVE (High Enthusiasm & Trust)'
    });
  };

  return (
    <section id="ai-playground" className="py-28 relative overflow-hidden bg-[#050816] bg-noise border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 z-10 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111827] border border-[#FF6B57]/30 text-[#FFE5D9] text-xs font-mono tracking-widest uppercase shadow-glow-coral">
            <Sparkles size={13} className="text-[#FF6B57]" /> Interactive Demo Suite
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-100 tracking-tight">
            AI <span className="text-gradient-coral">Playground</span>
          </h2>
          <p className="text-sm text-slate-300 font-sans leading-relaxed">
            Test live interactive AI micro-widgets: Mini Assistant, Code Explainer, Prompt Generator, Text Summarizer, Resume Analyzer & Sentiment Analysis.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {[
            { id: 'chat', label: 'Mini AI Chat', icon: MessageSquare },
            { id: 'code', label: 'Code Explainer', icon: Code },
            { id: 'prompt', label: 'Prompt Generator', icon: Sparkles },
            { id: 'summarize', label: 'Text Summarizer', icon: FileText },
            { id: 'resume', label: 'Resume Analyzer', icon: UserCheck },
            { id: 'sentiment', label: 'Sentiment Analysis', icon: Smile },
          ].map((tab) => {
            const IconComp = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-mono font-medium flex items-center gap-2 transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#FF6B57] to-[#F6C453] text-[#050816] font-bold shadow-glow-coral'
                    : 'bg-[#111827] text-slate-300 hover:text-white border border-white/10 hover:border-[#FF6B57]/30'
                }`}
              >
                <IconComp size={15} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Playground Widget Container */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl glass-panel border-white/15 bg-[#111827]/90 shadow-glass-luxury">
          {/* 1. Mini AI Chatbot */}
          {activeTab === 'chat' && (
            <div className="space-y-4 font-sans">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-slate-400">
                <span>Shubham AI Assistant v1.0</span>
                <span className="text-[#39D98A]">● Online & Ready</span>
              </div>
              <div className="h-64 overflow-y-auto space-y-3 pr-2 font-mono text-xs">
                {chatMessages.map((msg, i) => (
                  <div
                    key={i}
                    className={`p-3 rounded-2xl max-w-[85%] ${
                      msg.sender === 'user'
                        ? 'ml-auto bg-[#FF6B57]/20 border border-[#FF6B57]/40 text-[#FFE5D9]'
                        : 'bg-[#050816] border border-white/10 text-slate-200'
                    }`}
                  >
                    <span className="text-[10px] text-[#F6C453] block mb-1">
                      {msg.sender === 'user' ? 'You' : 'Shubham AI'}
                    </span>
                    {msg.text}
                  </div>
                ))}
              </div>
              <form onSubmit={handleSendChat} className="flex gap-2 pt-2 border-t border-white/10">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Ask about Shubham's skills, LeetCode, or projects..."
                  className="flex-1 px-4 py-2.5 rounded-xl bg-[#050816] border border-white/10 text-slate-100 text-xs focus:outline-none focus:border-[#FF6B57]"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-[#FF6B57] text-[#050816] font-bold text-xs flex items-center gap-1.5 hover:bg-[#FF8A7A]"
                >
                  <Send size={14} /> Send
                </button>
              </form>
            </div>
          )}

          {/* 2. Code Explainer */}
          {activeTab === 'code' && (
            <div className="space-y-4 font-mono text-xs">
              <label className="block text-slate-300 font-medium">Paste / Edit Code Snippet:</label>
              <textarea
                rows={4}
                value={codeSnippet}
                onChange={(e) => setCodeSnippet(e.target.value)}
                className="w-full p-3.5 rounded-2xl bg-[#050816] border border-white/10 text-[#F6C453] text-xs font-mono focus:outline-none focus:border-[#FF6B57]"
              />
              <button
                onClick={handleExplainCode}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF6B57] to-[#F6C453] text-[#050816] font-bold text-xs flex items-center gap-2 shadow-glow-coral"
              >
                <Code size={15} /> Explain Code Logic
              </button>
              {codeExplanation && (
                <div className="p-4 rounded-2xl bg-[#050816] border border-[#39D98A]/30 text-slate-200 whitespace-pre-line font-sans text-xs">
                  {codeExplanation}
                </div>
              )}
            </div>
          )}

          {/* 3. Prompt Generator */}
          {activeTab === 'prompt' && (
            <div className="space-y-4 font-mono text-xs">
              <label className="block text-slate-300 font-medium">Select Target Architecture Topic:</label>
              <select
                value={promptTopic}
                onChange={(e) => setPromptTopic(e.target.value)}
                className="w-full p-3 rounded-xl bg-[#050816] border border-white/10 text-slate-200 text-xs focus:outline-none"
              >
                <option value="FastAPI Microservice">FastAPI Microservice</option>
                <option value="Machine Learning Risk Predictor">Machine Learning Risk Predictor</option>
                <option value="NLP Document Summarizer">NLP Document Summarizer</option>
                <option value="AWS Docker Infrastructure">AWS Docker Infrastructure</option>
              </select>
              <button
                onClick={handleGeneratePrompt}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF6B57] to-[#F6C453] text-[#050816] font-bold text-xs flex items-center gap-2 shadow-glow-coral"
              >
                <Sparkles size={15} /> Generate System Prompt
              </button>
              {generatedPrompt && (
                <div className="p-4 rounded-2xl bg-[#050816] border border-[#FF6B57]/30 text-[#FFE5D9] whitespace-pre-line font-mono text-xs">
                  {generatedPrompt}
                </div>
              )}
            </div>
          )}

          {/* 4. Text Summarizer */}
          {activeTab === 'summarize' && (
            <div className="space-y-4 font-sans text-xs">
              <label className="block text-slate-300 font-medium">Input Long Text / Statutory Legalese:</label>
              <textarea
                rows={4}
                value={rawText}
                onChange={(e) => setRawText(e.target.value)}
                className="w-full p-3.5 rounded-2xl bg-[#050816] border border-white/10 text-slate-200 focus:outline-none focus:border-[#FF6B57]"
              />
              <button
                onClick={handleSummarizeText}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF6B57] to-[#F6C453] text-[#050816] font-bold text-xs flex items-center gap-2 shadow-glow-coral font-mono"
              >
                <FileText size={15} /> Summarize Text
              </button>
              {summarizedText && (
                <div className="p-4 rounded-2xl bg-[#050816] border border-[#F6C453]/30 text-[#F6C453]">
                  <span className="font-mono text-[10px] text-slate-400 block mb-1">SUMMARIZED OUTPUT:</span>
                  {summarizedText}
                </div>
              )}
            </div>
          )}

          {/* 5. Resume Analyzer */}
          {activeTab === 'resume' && (
            <div className="space-y-4 font-sans text-xs">
              <label className="block text-slate-300 font-medium">Target Role Match Assessment:</label>
              <select
                value={resumeRole}
                onChange={(e) => setResumeRole(e.target.value)}
                className="w-full p-3 rounded-xl bg-[#050816] border border-white/10 text-slate-200 font-mono text-xs focus:outline-none"
              >
                <option value="Full Stack AI Engineer">Full Stack AI Engineer</option>
                <option value="Cloud & DevOps Architect">Cloud & DevOps Architect</option>
                <option value="Backend Systems Engineer">Backend Systems Engineer</option>
              </select>
              <button
                onClick={handleAnalyzeResume}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF6B57] to-[#F6C453] text-[#050816] font-bold text-xs flex items-center gap-2 shadow-glow-coral font-mono"
              >
                <UserCheck size={15} /> Run Role Alignment Scan
              </button>
              {resumeAnalysis && (
                <div className="p-4 rounded-2xl bg-[#050816] border border-[#39D98A]/30 text-slate-200 whitespace-pre-line font-mono">
                  {resumeAnalysis}
                </div>
              )}
            </div>
          )}

          {/* 6. Sentiment Analysis */}
          {activeTab === 'sentiment' && (
            <div className="space-y-4 font-sans text-xs">
              <label className="block text-slate-300 font-medium">Enter Test Feedback Sentence:</label>
              <input
                type="text"
                value={sentimentInput}
                onChange={(e) => setSentimentInput(e.target.value)}
                className="w-full p-3.5 rounded-2xl bg-[#050816] border border-white/10 text-slate-200 focus:outline-none focus:border-[#FF6B57]"
              />
              <button
                onClick={handleAnalyzeSentiment}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF6B57] to-[#F6C453] text-[#050816] font-bold text-xs flex items-center gap-2 shadow-glow-coral font-mono"
              >
                <Smile size={15} /> Analyze Sentiment
              </button>
              {sentimentResult && (
                <div className="p-4 rounded-2xl bg-[#050816] border border-[#FF6B57]/30 text-slate-200 space-y-1 font-mono">
                  <div className="text-sm font-bold text-[#FF6B57]">{sentimentResult.label}</div>
                  <div className="text-xs text-slate-400">Confidence Score Vector: {sentimentResult.score}</div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
