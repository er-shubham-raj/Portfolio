export interface ProfileData {
  name: string;
  title: string;
  university: string;
  subtitle: string;
  tagline: string;
  aboutShort: string;
  location: string;
  email: string;
  phone: string;
  socials: {
    github: string;
    linkedin: string;
    leetcode: string;
    email: string;
  };
  metrics: {
    leetcodeSolved: number;
    leetcodeGlobalRank: string;
    cgpa: number; // Only displayed inside Education section
    saplingsPlanted: number;
    openSourcePRs: number;
    studentsHelped: number;
  };
  typingPhrases: string[];
}

export const profileData: ProfileData = {
  name: "Shubham Raj",
  title: "Final Year Computer Science Engineer",
  university: "VIT Bhopal University",
  subtitle: "Cloud Computing & Automation | AI & ML Specialist | Open Source Contributor",
  tagline: "Architecting resilient cloud infrastructure, high-throughput AI systems, and high-performance web software.",
  aboutShort: "I am a Final Year Computer Science Engineering student at VIT Bhopal University specializing in backend microservices, intelligent AI triage systems, and cloud automation. As a Hacktoberfest SuperContributor ranked in the Top 10,000 globally with 300+ solved DSA problems on LeetCode, I focus on software engineering rigor, clean code modularity, and high-throughput systems.",
  location: "Supaul, India",
  email: "er.rajshubham@gmail.com",
  phone: "+91 7461084271",
  socials: {
    github: "https://github.com/er-shubham-raj",
    linkedin: "https://linkedin.com/in/shubham-raj-a0979a289",
    leetcode: "https://leetcode.com/u/Shubham-Raj/",
    email: "mailto:er.rajshubham@gmail.com"
  },
  metrics: {
    leetcodeSolved: 300,
    leetcodeGlobalRank: "650K+",
    cgpa: 8.86,
    saplingsPlanted: 10000,
    openSourcePRs: 6,
    studentsHelped: 1000
  },
  typingPhrases: [
    "Final Year Computer Science Engineer",
    "VIT Bhopal University",
    "Cloud Computing & Automation",
    "Open Source Contributor",
    "300+ LeetCode DSA Solver"
  ]
};
