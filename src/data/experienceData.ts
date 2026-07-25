export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  type: string; // e.g. "Open Source", "Internship"
  period: string;
  location: string;
  bulletPoints: string[];
  technologies: string[];
  badge?: string;
}

export const experienceData: ExperienceItem[] = [
  {
    id: "hacktoberfest",
    role: "SuperContributor",
    company: "Hacktoberfest",
    type: "Open Source",
    period: "Oct 2024 - Present",
    location: "Remote",
    badge: "Top 10,000 Worldwide",
    bulletPoints: [
      "Earned SuperContributor recognition by successfully completing 6+ merged pull requests across multiple open-source repositories during Hacktoberfest.",
      "Ranked among the Top 10,000 contributors worldwide, receiving all official Hacktoberfest badges and T-shirt eligibility.",
      "Contributed bug fixes, feature enhancements, documentation improvements, and code refactoring using Git and GitHub workflows.",
      "Collaborated with repository maintainers through pull request reviews, issue discussions, and code feedback, ensuring high-quality contributions.",
      "Strengthened expertise in version control, collaborative software development, Agile workflows, and open-source best practices."
    ],
    technologies: ["Git", "GitHub", "Open Source", "Code Review", "Agile"]
  },
  {
    id: "codsoft",
    role: "Web Developer Intern",
    company: "Codsoft",
    type: "Internship",
    period: "Mar 2024 - Apr 2024",
    location: "Remote",
    badge: "100% Milestone Delivery",
    bulletPoints: [
      "Developed and deployed 5+ responsive web applications using HTML, CSS, and JavaScript, ensuring cross-browser compatibility and mobile-first responsiveness.",
      "Optimized front-end performance by implementing dynamic UI components, reducing page load time by 30% and improving overall user experience.",
      "Built interactive features including form validation, DOM manipulation, and responsive navigation, increasing application usability and accessibility.",
      "Debugged and tested web applications, resolving 25+ UI and functionality issues while improving performance and code reliability.",
      "Collaborated on multiple development tasks, delivering 100% of assigned milestones within project deadlines while following structured development practices."
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "DOM Manipulation", "UI/UX Optimization"]
  }
];
