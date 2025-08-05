import React from 'react';
import type {Project, EducationItem } from '../types';
import About from './About';

import Education from './Education';
import Projects from './Projects';

interface MainContentProps {
  activeSection: string;
  education: EducationItem[];
  projects: Project[];
  skills: string[];
}

const MainContent: React.FC<MainContentProps> = ({
  activeSection,
  education,
  projects,
  skills
}) => {
  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return <About skills={skills} />;
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