import { Github, Linkedin,Mail,Code} from 'lucide-react';
import type {Project, SocialLink, NavigationItem, EducationItem } from './types';

export const education: EducationItem[] = [
  {
    degree: "Master of Computer Applications",
    institution: "IGDTUW",
    location: "Delhi",
    date: "2024-2026",
    gpa: "8.5/10",
    relevantCourses: ["Data Structures", "Algorithms", "Database Systems", "Software Engineering","Computer Networks"]
  },
  {
    degree: "Bachelor of Computer Applications",
    institution: "Kuchaman College",
    location: "Rajasthan",
    date: "2021-2024",
    gpa: "8.05/10",
    relevantCourses: ["Web Development","CyberSecurity","Operating Systems"]
  }
];

export const projects: Project[] = [
  {
    title: "Inkspire",
    description: "A live collaborative whiteboard where users can sketch, brainstorm, and share ideas simultaneously.",
    techStack: ["Canvas", "Node.js", "Prisma+Postgresql", "Next.js","Websocket", "Tailwind CSS","Express.js","Typescript"],
    link: "https://github.com/saritakarwaa/inkspire"
  },
  {
    title: "AI Integrated Blog App",
    description: "A modern blog platform enhanced with AI to assist content creation and personalization.",
    techStack: ["React.js", "MongoDB", "Node.js", "Express.js","Docker","Redis","HuggingFace","Tailwind CSS","Cloudinary","Typescript"],
    link: "https://github.com/saritakarwaa/Blog-Frontend"
  },
  {
    title: "Notesmith AI",
    description: "An AI-powered tool that turns long notes into concise summaries and interactive quizzes.",
    techStack: ["React", "Node.js","Express.js", "Gemini API","Tailwind CSS","Typescript"],
    link: "https://github.com/saritakarwaa/notesmith-ai"
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
  { id: 'projects', label: 'Projects' }
];

export const skills = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js',
  'HTML5', 'CSS3', 'Tailwind CSS', 'WebSocket', 'GraphQL', 'REST APIs','MongoDB','Postgresql','Redis','Docker'
];