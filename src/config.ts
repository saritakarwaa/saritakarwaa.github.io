import { Github, Linkedin, Instagram,Mail,Code} from 'lucide-react';
import type { ExperienceItem, Project, SocialLink, NavigationItem, EducationItem } from './types';

export const experiences: ExperienceItem[] = [
  {
    title: "Senior Frontend Engineer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    date: "2022 - Present",
    description: [
      "Led the development of a responsive web application serving 100K+ daily users",
      "Implemented accessibility standards (WCAG 2.1 AA) across all product features",
      "Collaborated with design team to create pixel-perfect UI components",
      "Mentored junior developers and established frontend coding best practices"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Next.js", "GraphQL"],
    link: "https://techcorp.com"
  },
];

export const education: EducationItem[] = [
  {
    degree: "Master of Computer Applications",
    institution: "IGDTUW",
    location: "Delhi",
    date: "2024-2026",
    description: [
      "Specialized in Human-Computer Interaction and Web Technologies",
      "Completed thesis on 'Accessibility in Modern Web Applications'",
      "Teaching Assistant for CS106A: Programming Methodology"
    ],
    gpa: "8.5/10",
    honors: ["Dean's List", "Graduate Research Fellowship"],
    relevantCourses: ["Advanced Web Development", "User Interface Design", "Database Systems", "Software Engineering"]
  },
  {
    degree: "Bachelor of Computer Applications",
    institution: "Kuchaman College",
    location: "Rajasthan",
    date: "2021-2024",
    description: [
      "Graduated Magna Cum Laude with focus on Software Engineering",
      "President of Women in Engineering Society",
      "Led team project developing mobile application for campus navigation"
    ],
    gpa: "8.05/10",
    honors: ["Magna Cum Laude", "Phi Beta Kappa", "Outstanding Senior Award"],
    relevantCourses: ["Data Structures", "Algorithms", "Computer Networks", "Operating Systems"]
  }
];

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard.",
    techStack: ["React", "Node.js", "MongoDB", "Stripe API"],
    link: "https://github.com/sarita/ecommerce-platform"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    techStack: ["Vue.js", "Firebase", "Vuetify", "WebSockets"],
    link: "https://github.com/sarita/task-manager"
  },
  {
    title: "Weather Dashboard",
    description: "A responsive weather dashboard with location-based forecasts and interactive maps.",
    techStack: ["React", "Weather API", "Chart.js", "Tailwind CSS"],
    link: "https://github.com/sarita/weather-dashboard"
  }
];

export const socialLinks: SocialLink[] = [
  { icon: Github, href: "https://github.com/saritakarwaa", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sarita-karwa-581354287/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:karwasarita672@gmail.com", label: "Mail" },
  { icon:Code,href: "https://leetcode.com/u/saritakarwaa/", label:"Leetcode"}
];

export const navigationItems: NavigationItem[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' }
];

export const skills = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js',
  'HTML5', 'CSS3', 'Tailwind CSS', 'WebSocket', 'GraphQL', 'REST APIs','MongoDB','Postgresql','Redis'
];