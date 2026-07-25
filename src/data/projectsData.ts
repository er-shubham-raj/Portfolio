export interface Project {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  featured: boolean;
  heroGradient: string;
  techStack: string[];
  problemStatement: string;
  features: string[];
  architecture: string;
  challenges: string;
  learnings: string;
  githubUrl: string;
  liveDemoUrl: string; // If '#' or empty, shows 'Coming Soon' badge
  badgeText?: string;
  stats: {
    metric: string;
    label: string;
  }[];
}

export const projectsData: Project[] = [
  {
    id: "vitalvision",
    title: "VitalVision – AI-Powered Patient Risk Scheduler",
    subtitle: "Automated AI patient triage and priority scheduling engine",
    date: "Oct 2025 - Nov 2025",
    featured: true,
    heroGradient: "from-blue-600/30 via-indigo-600/20 to-purple-600/30",
    techStack: ["Python", "Machine Learning", "Scikit-Learn", "Pandas", "NumPy", "Flask", "FastAPI", "Git"],
    problemStatement: "Overcrowded hospital emergency rooms face critical delays when manually triaging high-risk patients, leading to dangerous wait times and inefficient medical staff allocation.",
    features: [
      "Generated instant risk prediction scores for 100+ simulated patient medical records",
      "Priority scheduling algorithm that reduced manual triage effort by 80%",
      "Automated real-time patient queue sorting prioritizing critical ICU admissions",
      "FastAPI microservice endpoints with sub-50ms inference latency"
    ],
    architecture: "Microservice layout with a Python FastAPI inference backend executing trained Scikit-learn random forest models, connected to a Flask API gateway serving real-time risk score vectors.",
    challenges: "Handling class imbalance in emergency medical records and optimizing inference response times under heavy concurrent triage loads.",
    learnings: "Advanced feature engineering, custom scikit-learn pipeline optimization, and API speed tuning under competitive hackathon constraints.",
    githubUrl: "https://github.com/er-shubham-raj",
    liveDemoUrl: "#", // Live demo link coming soon
    badgeText: "Round 2 Health-Hack 2025 (Top 236+ Teams)",
    stats: [
      { metric: "80%", label: "Manual Effort Reduction" },
      { metric: "100+", label: "Simulated Records Triaged" },
      { metric: "Round 2", label: "Health-Hack 2025" }
    ]
  },
  {
    id: "nyaymitra",
    title: "NyayMitra – AI Legal Assistant",
    subtitle: "Scalable NLP engine for legal document summarization and domain guidance",
    date: "Oct 2024 - Nov 2024",
    featured: true,
    heroGradient: "from-purple-600/30 via-cyan-600/20 to-blue-600/30",
    techStack: ["Python", "NLP", "Machine Learning", "Cloud APIs", "REST APIs", "Flask"],
    problemStatement: "Citizens and legal professionals spend countless hours analyzing dense, jargon-heavy Indian legal documents and statutory clauses to retrieve actionable insights.",
    features: [
      "Scalable NLP pipeline designed to process and classify 100+ complex legal query domains",
      "AI document summarization engine reducing legal information retrieval time by 70%",
      "Structured domain guidance spanning constitutional law, penal codes, and civil rights",
      "Interactive query response framework with source clause citations"
    ],
    architecture: "Natural Language Processing workflow using tokenization, TF-IDF / transformer summarization pipelines, wrapped in modular Python REST APIs hosted on cloud infrastructure.",
    challenges: "Accurately summarizing complex legalese without losing statutory nuance or hallucinating legal precedents.",
    learnings: "Extensive experience in NLP pipeline architecture, prompt & tokenization design, and optimizing cloud deployment latency.",
    githubUrl: "https://github.com/er-shubham-raj",
    liveDemoUrl: "#", // Live demo link coming soon
    badgeText: "70% Faster Legal Retrieval",
    stats: [
      { metric: "70%", label: "Retrieval Time Saved" },
      { metric: "100+", label: "Legal Queries Handled" },
      { metric: "NLP", label: "Summarization Pipeline" }
    ]
  }
];
