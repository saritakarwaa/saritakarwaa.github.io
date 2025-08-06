import React from 'react';
import { Calendar, ExternalLink } from 'lucide-react';
import type { ExperienceItem } from '../types';

interface ExperienceProps {
  experiences: ExperienceItem[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white mb-8">Experience</h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#3c2954]"></div>

        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-12 pb-12 last:pb-0">
            {/* Timeline dot */}
            <div className="absolute left-2.5 w-3 h-3 bg-[#FFD2A0] rounded-full border-2 border-[#3c2954]"></div>

            <div className="bg-[#A888B5] p-6 rounded-lg hover:bg-[#C8A4CE] transition-colors duration-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-[#3c2954]">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-[#3c2954] font-medium">
                    {exp.link ? (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#5a4373] transition-colors duration-200 flex items-center gap-1"
                      >
                        {exp.company}
                        <ExternalLink size={14} />
                      </a>
                    ) : (
                      <span>{exp.company}</span>
                    )}
                    <span className="text-[#5e4c6d]">• {exp.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[#5e4c6d] mt-2 md:mt-0">
                  <Calendar size={16} />
                  <span className="text-sm">{exp.date}</span>
                </div>
              </div>

              {/* Description */}
              <ul className="space-y-2 mb-4">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-[#3c2954] text-sm leading-relaxed flex">
                    <span className="text-[#FFD2A0] mr-2 mt-1.5 w-1 h-1 bg-current rounded-full flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              {/* <div className="flex flex-wrap gap-2">
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-[#FFD2A0] text-[#3c2954] px-2 py-1 rounded text-xs font-medium
                               hover:bg-[#ffe0ba] transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;


