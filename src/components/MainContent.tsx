import React from 'react';
import type {Project, EducationItem,ExperienceItem } from '../types';
import About from './About';
import Education from './Education';
import Projects from './Projects';
import Experience from './Experience';


interface MainContentProps {
  activeSection: string;
  education: EducationItem[];
  experiences: ExperienceItem[];
  projects: Project[];
  skills: string[];
}

const MainContent: React.FC<MainContentProps> = ({
  activeSection,
  education,
  experiences,
  projects,
  skills
}) => {
  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return <About skills={skills} />;
      case 'experience':
        return <Experience experiences={experiences} />;
      case 'education':
        return <Education education={education} />;
      case 'projects':
        return <Projects projects={projects} />;
      default:
        return <About skills={skills} />;
    }
  };

  return (
    <div className="lg:w-2/3 lg:ml-auto p-8 lg:p-12">
      <div className="max-w-3xl">
        {renderContent()}
      </div>
    </div>
  );
};

export default MainContent;