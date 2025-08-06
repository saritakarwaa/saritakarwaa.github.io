import React from "react";
import { Calendar, ExternalLink } from "lucide-react";
import type { ExperienceItem } from "../types";

interface ExperienceProps {
  experiences: ExperienceItem[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold text-[#F2E9E4] mb-8">Experience</h2>
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#C9ADA7]" />
      {experiences.map((exp, idx) => (
        <div key={idx} className="relative pl-12 pb-12 last:pb-0">
          <div className="absolute left-2.5 w-3 h-3 bg-[#C9ADA7] rounded-full border-2 border-[#4A4E69]" />
          <div className="bg-[#4A4E69] p-6 rounded-lg hover:bg-[#5A5E7A] transition-colors duration-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
              <div>
                <h3 className="text-xl font-semibold text-[#F2E9E4]">{exp.title}</h3>
                <div className="flex items-center gap-2 text-[#C9ADA7]">
                  {exp.link ? (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#E6D6CF] transition-colors duration-200 flex items-center gap-1"
                    >
                      {exp.company}
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <span>{exp.company}</span>
                  )}
                  <span className="text-[#9A8C98]">• {exp.location}</span>
                </div>
              </div>
              <div className="flex items-center gap-1 text-[#9A8C98] mt-2 md:mt-0">
                <Calendar size={16} />
                <span className="text-sm">{exp.date}</span>
              </div>
            </div>
            <ul className="space-y-2 mb-4">
              {exp.description.map((d, i) => (
                <li key={i} className="text-[#f2e9e4] text-sm leading-relaxed flex">
                  <span className="text-[#C9ADA7] mr-2 mt-1.5 w-1 h-1 bg-current rounded-full flex-shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
            {/* <div className="flex flex-wrap gap-2">
              {exp.techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-[#C9ADA7] text-[#22223B] px-2 py-1 rounded text-xs font-medium hover:bg-[#E6D6CF] transition-colors duration-200"
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

export default Experience;


