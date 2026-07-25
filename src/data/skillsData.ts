export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: number; // 0 to 100
    iconName: string;
    highlight?: string;
  }[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend",
    description: "Modern reactive web interfaces & full-stack frameworks",
    skills: [
      { name: "React", level: 94, iconName: "SiReact", highlight: "Hooks, SPA & State" },
      { name: "Next.js", level: 88, iconName: "SiNextdotjs", highlight: "SSR & App Router" },
      { name: "TypeScript", level: 90, iconName: "SiTypescript", highlight: "Strict Typing & Design Patterns" },
      { name: "JavaScript", level: 92, iconName: "SiJavascript", highlight: "ES6+, Async & DOM" },
      { name: "TailwindCSS", level: 95, iconName: "SiTailwindcss", highlight: "Awwwards-Level Responsive UI" }
    ]
  },
  {
    category: "Backend",
    description: "High-throughput microservices & REST APIs",
    skills: [
      { name: "FastAPI", level: 90, iconName: "SiFastapi", highlight: "Async REST Endpoints & Pydantic" },
      { name: "Flask", level: 88, iconName: "SiFlask", highlight: "Python Microservice Gateways" },
      { name: "REST APIs", level: 95, iconName: "FaServer", highlight: "Sub-50ms Inference Latency" }
    ]
  },
  {
    category: "AI & Machine Learning",
    description: "Predictive ML triage & Natural Language Processing",
    skills: [
      { name: "Python", level: 94, iconName: "SiPython", highlight: "AI Triage & Data Science" },
      { name: "Scikit Learn", level: 88, iconName: "SiScikitlearn", highlight: "VitalVision Patient Scheduler" },
      { name: "TensorFlow", level: 82, iconName: "SiTensorflow", highlight: "Deep Neural Networks" },
      { name: "NumPy", level: 90, iconName: "SiNumpy", highlight: "Numerical Vector Operations" },
      { name: "Pandas", level: 90, iconName: "SiPandas", highlight: "Data Frame Analytics" }
    ]
  },
  {
    category: "Cloud & DevOps",
    description: "Cloud infrastructure automation & container orchestration",
    skills: [
      { name: "AWS", level: 84, iconName: "FaAws", highlight: "EC2, S3, Cloud Architecture" },
      { name: "Docker", level: 88, iconName: "SiDocker", highlight: "Containerization & Microservices" },
      { name: "Terraform", level: 82, iconName: "SiTerraform", highlight: "Infrastructure as Code" }
    ]
  },
  {
    category: "Programming Languages",
    description: "Core DSA, high-performance & enterprise logic",
    skills: [
      { name: "C++", level: 92, iconName: "SiCplusplus", highlight: "300+ LeetCode DSA Solved" },
      { name: "Python", level: 94, iconName: "SiPython", highlight: "AI/ML & Automation" },
      { name: "Java", level: 86, iconName: "FaJava", highlight: "OOP & Enterprise Foundations" },
      { name: "JavaScript", level: 92, iconName: "SiJavascript", highlight: "Async / Web Architecture" }
    ]
  },
  {
    category: "Database",
    description: "Relational queries & NoSQL document stores",
    skills: [
      { name: "MySQL", level: 88, iconName: "SiMysql", highlight: "Relational Schema & Indexing" },
      { name: "MongoDB", level: 85, iconName: "SiMongodb", highlight: "Document Aggregation Pipelines" }
    ]
  },
  {
    category: "Tools & Workflow",
    description: "Version control, API testing & open-source collaboration",
    skills: [
      { name: "Git", level: 96, iconName: "SiGit", highlight: "Hacktoberfest Top 10k SuperContributor" },
      { name: "GitHub", level: 96, iconName: "SiGithub", highlight: "6+ Merged Open Source PRs" },
      { name: "Postman", level: 92, iconName: "SiPostman", highlight: "Automated API Test Suites" }
    ]
  }
];

