export interface Project {
  title: string;
  description: string;
  techStack: string[];
  link: string;
}

export interface SocialLink {
  icon: React.ComponentType<{ size?: number }>;
  href: string;
  label: string;
}

export interface NavigationItem {
  id: string;
  label: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  date: string;
  description?: string[];
  gpa?: string;
  honors?: string[];
  relevantCourses?: string[];
}