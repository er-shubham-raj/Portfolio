import React from 'react';
import { Modal } from '../ui/Modal';
import { Download, FileText, Briefcase, BookOpen, GraduationCap, Award, Code2, Globe, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { profileData } from '../../data/profileData';

interface ResumeViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeViewerModal: React.FC<ResumeViewerModalProps> = ({ isOpen, onClose }) => {
  const handleDownload = () => {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
    });

    const staticLink = document.createElement('a');
    staticLink.href = '/resume/Shubham_Raj_Resume_Final.pdf';
    staticLink.download = 'Shubham_Raj_Resume_Final.pdf';
    document.body.appendChild(staticLink);
    staticLink.click();
    document.body.removeChild(staticLink);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Shubham Raj — Official Resume" maxWidth="max-w-4xl">
      <div className="space-y-5" data-lenis-prevent>
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-[#111827] border border-white/12 shadow-glass-luxury">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FF6B57]/10 border border-[#FF6B57]/30 flex items-center justify-center text-[#FF6B57] shadow-glow-coral">
              <FileText size={20} />
            </div>
            <div>
              <div className="text-sm font-display font-bold text-slate-100">Shubham_Raj_Resume_Final.pdf</div>
              <div className="text-xs text-slate-400 font-mono">Official Executive Document • VIT Bhopal B.Tech CS</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/resume/Shubham_Raj_Resume_Final.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 font-display font-semibold text-xs flex items-center gap-2 border border-white/15 transition-all"
            >
              <ExternalLink size={15} /> View PDF
            </a>
            <button
              onClick={handleDownload}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#FF6B57] to-[#F6C453] hover:from-[#E05340] hover:to-[#D9A326] text-[#050816] font-display font-extrabold text-xs flex items-center gap-2 shadow-glow-coral transition-all hover:scale-105"
            >
              <Download size={15} /> Download PDF Resume
            </button>
          </div>
        </div>

        {/* Structured Executive Resume Paper */}
        <div className="p-6 sm:p-10 rounded-2xl bg-white text-slate-900 font-sans shadow-2xl leading-relaxed space-y-6 border border-slate-300 max-h-[72vh] overflow-y-auto scrollbar-thin">
          {/* Header */}
          <div className="border-b-2 border-slate-900 pb-4 text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 uppercase font-display">SHUBHAM RAJ</h1>
            <div className="text-xs text-slate-700 font-medium mt-2 flex flex-wrap justify-center items-center gap-x-4 gap-y-1">
              <span className="flex items-center gap-1 font-mono">📞 +91 7461084271</span>
              <span className="flex items-center gap-1 font-mono">✉️ er.rajshubham@gmail.com</span>
              <span className="flex items-center gap-1 font-mono">🔗 linkedin.com/in/shubham-raj-a0979a289</span>
              <span className="flex items-center gap-1 font-mono">💻 github.com/er-shubham-raj</span>
              <span className="flex items-center gap-1 font-mono">📍 Supaul, India</span>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-bold text-slate-900 border-b-2 border-slate-900 pb-1 flex items-center gap-2 uppercase tracking-widest font-mono">
              <Briefcase size={14} className="text-[#FF6B57]" /> WORK EXPERIENCE
            </h2>

            <div className="mt-3 space-y-4">
              <div>
                <div className="flex justify-between items-baseline font-bold text-slate-900 text-xs sm:text-sm">
                  <span>SuperContributor — Hacktoberfest</span>
                  <span className="font-mono text-xs text-slate-600">Oct 2024 – Present | Remote</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-700 space-y-1 mt-1.5 leading-relaxed">
                  <li>Earned <strong>SuperContributor</strong> recognition by successfully completing <strong>6+ merged pull requests</strong> across multiple open-source repositories during Hacktoberfest.</li>
                  <li>Ranked among the <strong>Top 10,000 contributors worldwide</strong>, receiving all Hacktoberfest badges and official T-shirt eligibility.</li>
                  <li>Contributed bug fixes, feature enhancements, documentation improvements, and code refactoring using Git and GitHub workflows.</li>
                  <li>Collaborated with repository maintainers through pull request reviews, issue discussions, and code feedback, ensuring high-quality contributions.</li>
                  <li>Strengthened expertise in version control, collaborative software development, Agile workflows, and open-source best practices.</li>
                </ul>
                <div className="text-[11px] font-mono text-slate-600 mt-1"><strong>Technologies / Skills Used:</strong> Git, GitHub</div>
              </div>

              <div>
                <div className="flex justify-between items-baseline font-bold text-slate-900 text-xs sm:text-sm">
                  <span>Web Developer Internship — Codsoft</span>
                  <span className="font-mono text-xs text-slate-600">Mar 2024 – Apr 2024 | Remote</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-700 space-y-1 mt-1.5 leading-relaxed">
                  <li>Developed and deployed 5+ responsive web applications using HTML, CSS, and JavaScript, ensuring cross-browser compatibility and mobile-first responsiveness.</li>
                  <li>Optimized front-end performance by implementing dynamic UI components, reducing page load time by 30% and improving overall user experience.</li>
                  <li>Built interactive features including form validation, DOM manipulation, and responsive navigation, increasing application usability and accessibility.</li>
                  <li>Debugged and tested web applications, resolving 25+ UI and functionality issues while improving performance and code reliability.</li>
                  <li>Collaborated on multiple development tasks, delivering 100% of assigned milestones within project deadlines while following structured development practices.</li>
                </ul>
                <div className="text-[11px] font-mono text-slate-600 mt-1"><strong>Technologies / Skills Used:</strong> HTML, CSS, JavaScript</div>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-bold text-slate-900 border-b-2 border-slate-900 pb-1 flex items-center gap-2 uppercase tracking-widest font-mono">
              <BookOpen size={14} className="text-[#FF6B57]" /> PROJECTS
            </h2>

            <div className="mt-3 space-y-4">
              <div>
                <div className="flex justify-between items-baseline font-bold text-slate-900 text-xs sm:text-sm">
                  <span>VitalVision – AI-Powered Patient Risk Scheduler</span>
                  <span className="font-mono text-xs text-slate-600">Oct 2025 – Nov 2025</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-700 space-y-1 mt-1.5 leading-relaxed">
                  <li>Built an AI-powered patient triage system using Python, Scikit-learn, Pandas, Flask/FastAPI, generating risk scores for <strong>100+ simulated patient records</strong>.</li>
                  <li>Designed a priority scheduling algorithm that <strong>reduced manual triage effort by 80%</strong> and automated high-risk patient prioritization.</li>
                  <li>Advanced to <strong>Round 2 of Health-Hack 2025</strong>, competing against <strong>236+ teams</strong>.</li>
                </ul>
                <div className="text-[11px] font-mono text-slate-600 mt-1"><strong>Technologies / Tools Used:</strong> Python, Machine Learning, Flask, FastAPI, Scikit-learn, Pandas, NumPy, Git</div>
              </div>

              <div>
                <div className="flex justify-between items-baseline font-bold text-slate-900 text-xs sm:text-sm">
                  <span>NyayMitra – AI Legal Assistant</span>
                  <span className="font-mono text-xs text-slate-600">Oct 2024 – Nov 2024</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-700 space-y-1 mt-1.5 leading-relaxed">
                  <li>Developed a scalable AI-powered legal assistant using Python and NLP.</li>
                  <li>Built an NLP pipeline handling <strong>100+ legal queries</strong>, providing structured guidance across multiple legal domains.</li>
                  <li>Integrated AI-powered document summarization, <strong>reducing legal information retrieval time by 70%</strong>.</li>
                </ul>
                <div className="text-[11px] font-mono text-slate-600 mt-1"><strong>Technologies / Tools Used:</strong> Python, Machine Learning, APIs, NLP, Cloud</div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold text-slate-900 border-b-2 border-slate-900 pb-1 flex items-center gap-2 uppercase tracking-widest font-mono">
              <Code2 size={14} className="text-[#FF6B57]" /> TECHNICAL SKILLS
            </h2>
            <div className="mt-3 space-y-1.5 text-xs text-slate-800 leading-relaxed font-sans">
              <div><strong>Programming Languages:</strong> C++, Java, Python, SQL, JavaScript</div>
              <div><strong>Frameworks & Libraries:</strong> React.js, Bootstrap, TensorFlow, Next.js</div>
              <div><strong>Backend:</strong> Backend Development, REST APIs, Flask, FastAPI</div>
              <div><strong>Frontend:</strong> HTML, CSS, JavaScript, React</div>
              <div><strong>Databases:</strong> MySQL, MongoDB</div>
              <div><strong>Cloud & DevOps:</strong> AWS, Docker, Git, GitHub, Terraform, Postman</div>
              <div><strong>Core CS:</strong> Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, DBMS, Computer Networks</div>
            </div>
          </div>

          {/* Educations */}
          <div>
            <h2 className="text-xs font-bold text-slate-900 border-b-2 border-slate-900 pb-1 flex items-center gap-2 uppercase tracking-widest font-mono">
              <GraduationCap size={14} className="text-[#FF6B57]" /> EDUCATIONS
            </h2>
            <div className="mt-3 space-y-3 text-xs text-slate-800">
              <div>
                <div className="flex justify-between font-bold text-slate-900 text-xs sm:text-sm">
                  <span>Vellore Institute Of Technology, Bhopal — B.Tech in Computer Science</span>
                  <span className="font-mono text-xs text-slate-600">Sep 2023 – Sep 2027</span>
                </div>
                <div className="text-slate-800 font-semibold mt-0.5">CGPA: 8.86 / 10.0</div>
                <div className="text-slate-600 text-[11px] mt-0.5">Coursework: Computer Architecture, Comparison of Learning Algorithms, Computational Theory</div>
              </div>

              <div>
                <div className="flex justify-between font-bold text-slate-900 text-xs sm:text-sm">
                  <span>BSS College, Supaul — Higher Secondary</span>
                  <span className="font-mono text-xs text-slate-600">Mar 2020 – Apr 2022</span>
                </div>
                <div className="text-slate-800 font-semibold mt-0.5">Percentage: 89%</div>
                <div className="text-slate-600 text-[11px] mt-0.5">Coursework: Physics, Chemistry, Mathematics</div>
              </div>
            </div>
          </div>

          {/* Extra Curricular */}
          <div>
            <h2 className="text-xs font-bold text-slate-900 border-b-2 border-slate-900 pb-1 flex items-center gap-2 uppercase tracking-widest font-mono">
              <Award size={14} className="text-[#FF6B57]" /> EXTRA CURRICULAR
            </h2>
            <ul className="mt-3 list-disc list-inside text-xs text-slate-700 space-y-1.5 leading-relaxed">
              <li><strong>Group Lead for Mega Plantation Drive (NSS Club VIT Bhopal):</strong> Planted 10,000 saplings.</li>
              <li>Participated in the Income Tax Quiz organized by Securities and Exchange Board of India (SEBI) in 2024 and 2025.</li>
              <li>Orchestrated collaborative efforts as a core team member in the AI Club, ML Team, GDSC VIT Bhopal while also serving as tech leads in different clubs.</li>
              <li>Assisted 1,000+ students in their educational journey as a student expert (Computer Science/Chemistry) at Chegg, Inc.</li>
            </ul>
          </div>

          {/* Co-Curricular */}
          <div>
            <h2 className="text-xs font-bold text-slate-900 border-b-2 border-slate-900 pb-1 flex items-center gap-2 uppercase tracking-widest font-mono">
              <Code2 size={14} className="text-[#FF6B57]" /> CO-CURRICULAR
            </h2>
            <div className="mt-3 text-xs text-slate-700 leading-relaxed font-sans">
              <strong>Coding:</strong> Solved 210+ DSA problems on LeetCode covering Arrays, Graphs, Trees, Dynamic Programming, Greedy, Binary Search and Linked Lists. — <strong>Global Rank: 6,57,540</strong> (Out of 50,00,000+)
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
