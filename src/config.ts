import { Github, Linkedin,Mail,Code} from 'lucide-react';
import type {Project, SocialLink, NavigationItem, EducationItem,ExperienceItem } from './types';
export const education: EducationItem[] = [
  {
    degree: "Master of Computer Applications",
    institution: "IGDTUW",
    location: "Delhi",
    date: "2024-2026",
    gpa: "8.5/10",
    relevantCourses: ["Data Structures", "Algorithms", "Database Systems", "Software Engineering","Computer Networks","Java","Python"]
  },
  {
    degree: "Bachelor of Computer Applications",
    institution: "Kuchaman College",
    location: "Rajasthan",
    date: "2021-2024",
    gpa: "8.05/10",
    relevantCourses: ["Web Development","CyberSecurity","Operating Systems","C++"]
  }
];

export const projects: Project[] = [
  {
    title: "Inkspire",
    description: "A live collaborative whiteboard where users can sketch, brainstorm, and share ideas simultaneously.",
    techStack: ["Canvas", "Node.js", "Prisma+Postgresql", "Next.js","Websocket", "Tailwind CSS","Express.js","Typescript","Turborepo"],
    link: "https://github.com/saritakarwaa/inkspire"
  },
  {
    title: "AI Integrated Blog App",
    description: "A modern blog platform enhanced with AI to assist content creation and personalization.",
    techStack: ["React.js", "MongoDB", "Node.js", "Express.js","Docker","Redis","HuggingFace","Tailwind CSS","Cloudinary","Typescript","OAuth","Nodemailer"],
    link: "https://github.com/saritakarwaa/Blog-Frontend"
  },
  {
    title: "Notesmith AI",
    description: "An AI-powered tool that turns long notes into concise summaries and interactive quizzes.",
    techStack: ["React", "Node.js","Express.js", "Gemini API","Tailwind CSS","Typescript"],
    link: "https://github.com/saritakarwaa/notesmith-ai"
  },
  {
    title: "Commit-muse",
    description: "A Git commit-message hook installer that rewrites your commit messages in any style using Google’s Gemini AI, published as an NPM package",
    techStack: ["NPM", "Bash"],
    link: "https://github.com/saritakarwaa/commit-muse"
  },
  {
    title: "Real Time Location Tracker",
    description: "A web-based real-time location sharing and visualization app built with Node.js, Socket.IO, and Leaflet.js.",
    techStack: ["EJS", "Express.js","Socket.io"],
    link: "https://github.com/saritakarwaa/tracker"
  },
  {
    title: "Drumkit",
    description: "An interactive drum kit built with HTML, CSS, and JavaScript that lets users play sounds with keyboard and mouse clicks in real time.",
    techStack: ["HTML", "CSS","Javascript"],
    link: "https://github.com/saritakarwaa/JS-30"
  },
];

export const socialLinks: SocialLink[] = [
  { icon: Github, href: "https://github.com/saritakarwaa", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sarita-karwa-581354287/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:karwasarita672@gmail.com", label: "Mail" },
  { icon:Code,href: "https://leetcode.com/u/saritakarwaa/", label:"Leetcode"}
];

export const navigationItems: NavigationItem[] = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id:'experience', label: 'Experience'},
  { id: 'projects', label: 'Projects' }
];

export const skills = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js',
  'HTML5', 'CSS3', 'Tailwind CSS', 'WebSocket', 'GraphQL', 'REST APIs','MongoDB','Postgresql','Redis','Docker'
];

export const experiences: ExperienceItem[] = [
  {
    title: "Research Intern",
    company: "ACM Student Chapter",
    location: "IGDTUW, Delhi",
    date: "2024 - 2025",
    description: [
      "Reviewed 35+ research papers to map how Federated Learning is integrated with Cloud Computing.",
  "Co-authored the paper “Federated Learning with Cloud Computing: A Literary Survey” highlighting emerging trends, best practices, and research gaps.",
   "Earned a Certificate of Appreciation for depth of analysis and practical recommendations."
    ],
  },
];