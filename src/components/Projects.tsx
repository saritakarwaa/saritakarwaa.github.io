import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { Project } from '../types';

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-slate-200 mb-8">Projects</h2>
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#A888B5] p-6 rounded-lg hover:bg-slate-750 transition-all duration-200 
                     hover:transform hover:scale-[1.02]"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-semibold text-[#3c2954]">{project.title}</h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3c2954] hover:text-[#5a4373] transition-colors duration-200"
              >
                <ExternalLink size={20} />
              </a>
            </div>
            
            <p className="text-[#3c2954] mb-4 leading-relaxed">{project.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-[#EFB6C8] text-[#3c2954] px-2 py-1 rounded text-xs font-medium
                           hover:bg-slate-600 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;