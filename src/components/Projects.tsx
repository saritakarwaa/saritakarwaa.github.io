
import React from "react";
import { ExternalLink } from "lucide-react";
import type { Project } from "../types";

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold text-[#F2E9E4] mb-8">Projects</h2>
    <div className="grid gap-6">
      {projects.map((project, idx) => (
        <div
          key={idx}
          className="bg-[#4A4E69] p-6 rounded-lg hover:bg-[#5A5E7A]
                     transition-all duration-200 hover:scale-[1.02]"
        >
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-semibold text-[#F2E9E4]">
              {project.title}
            </h3>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C9ADA7] hover:text-[#E6D6CF] transition-colors duration-200"
            >
              <ExternalLink size={20} />
            </a>
          </div>
          <p className="text-[#f2e9e4] mb-4 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="bg-[#C9ADA7] text-[#22223B] px-2 py-1 rounded text-xs font-medium
                           hover:bg-[#E6D6CF] transition-colors duration-200"
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

export default Projects;
