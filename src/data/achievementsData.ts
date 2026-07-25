export interface Achievement {
  id: string;
  category: "Coding" | "OpenSource" | "Leadership" | "Community" | "Academic";
  title: string;
  organization: string;
  statNumber: string;
  statLabel: string;
  description: string;
  iconName: string;
  highlightColor: string;
}

export const achievementsData: Achievement[] = [
  {
    id: "hacktoberfest-top10k",
    category: "OpenSource",
    title: "Hacktoberfest SuperContributor",
    organization: "DigitalOcean & GitHub",
    statNumber: "Top 10k",
    statLabel: "Global Rank Worldwide",
    description: "Successfully submitted 6+ merged pull requests across global open-source projects, earning SuperContributor badge and worldwide recognition.",
    iconName: "FaGithub",
    highlightColor: "from-indigo-400 to-indigo-200"
  },
  {
    id: "leetcode-dsa",
    category: "Coding",
    title: "LeetCode Competitive Solver",
    organization: "LeetCode Platform",
    statNumber: "300+",
    statLabel: "DSA Problems Solved (Rank 650K+)",
    description: "Solved 300+ DSA problems spanning Arrays, Graphs, Dynamic Programming, Trees, Greedy, and Binary Search. Global Rank 650K+ worldwide.",
    iconName: "SiLeetcode",
    highlightColor: "from-indigo-400 to-indigo-200"
  },
  {
    id: "nss-plantation",
    category: "Leadership",
    title: "Group Lead - Mega Plantation Drive",
    organization: "NSS Club VIT Bhopal",
    statNumber: "10,000",
    statLabel: "Saplings Planted",
    description: "Organized and executed large-scale environmental sustainability initiatives at VIT Bhopal, leading volunteers to plant and document 10,000 saplings.",
    iconName: "FaSeedling",
    highlightColor: "from-indigo-400 to-indigo-200"
  },
  {
    id: "chegg-expert",
    category: "Community",
    title: "Student Expert (CS / Chemistry)",
    organization: "Chegg, Inc.",
    statNumber: "1,000+",
    statLabel: "Students Mentored",
    description: "Provided expert academic resolution in Computer Science and Chemistry, guiding over 1,000 international students in technical coursework.",
    iconName: "FaGraduationCap",
    highlightColor: "from-indigo-400 to-indigo-200"
  },
  {
    id: "ai-club-lead",
    category: "Leadership",
    title: "Core Team & Tech Lead",
    organization: "AI Club, ML Team, GDSC VIT Bhopal",
    statNumber: "Core Lead",
    statLabel: "Technical Leadership",
    description: "Orchestrated collaborative tech efforts, organized hands-on machine learning workshops, and led peer technical sessions at VIT Bhopal.",
    iconName: "FaRobot",
    highlightColor: "from-indigo-400 to-indigo-200"
  },
  {
    id: "sebi-quiz",
    category: "Academic",
    title: "Income Tax Quiz Participant",
    organization: "SEBI (Securities & Exchange Board of India)",
    statNumber: "2024 & 2025",
    statLabel: "National Participation",
    description: "Participated in national financial literacy and income tax awareness quizzes organized by SEBI in consecutive years.",
    iconName: "FaAward",
    highlightColor: "from-indigo-400 to-indigo-200"
  }
];
