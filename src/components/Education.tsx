import React from "react";
import { Calendar, Award, BookOpen } from "lucide-react";
import type { EducationItem } from "../types";

interface EducationProps {
  education: EducationItem[];
}

const Education: React.FC<EducationProps> = ({ education }) => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold text-[#F2E9E4] mb-8">Education</h2>
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#C9ADA7]" />
      {education.map((edu, idx) => (
        <div key={idx} className="relative pl-12 pb-12 last:pb-0">
          <div className="absolute left-2.5 w-3 h-3 bg-[#C9ADA7] rounded-full border-2 border-[#4A4E69]" />
          <div className="bg-[#4A4E69] p-6 rounded-lg hover:bg-[#5A5E7A] transition-colors duration-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
              <div>
                <h3 className="text-xl font-semibold text-[#F2E9E4]">{edu.degree}</h3>
                <div className="flex items-center gap-2 text-[#C9ADA7] font-medium">
                  <span>{edu.institution}</span>
                  <span className="text-[#9A8C98]">• {edu.location}</span>
                </div>
              </div>
              <div className="flex items-center gap-1 text-[#9A8C98] mt-2 md:mt-0">
                <Calendar size={16} />
                <span className="text-sm">{edu.date}</span>
              </div>
            </div>
            {edu.description && (
              <ul className="space-y-2 mb-4">
                {edu.description.map((item, i) => (
                  <li key={i} className="text-[#C9ADA7] text-sm leading-relaxed flex">
                    <span className="text-[#C9ADA7] mr-2 mt-1.5 w-1 h-1 bg-current rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {edu.honors && (
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Award size={16} className="text-[#C9ADA7]" />
                  <span className="text-[#C9ADA7] text-sm font-semibold">Honors & Awards</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {edu.honors.map((honor) => (
                    <span
                      key={honor}
                      className="bg-[#C9ADA7] bg-opacity-20 text-[#C9ADA7] px-2 py-1 rounded text-xs font-medium border border-[#C9ADA7] border-opacity-30"
                    >
                      {honor}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {edu.relevantCourses && (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen size={16} className="text-[#C9ADA7]" />
                  <span className="text-[#C9ADA7] text-sm font-semibold">Relevant Coursework</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {edu.relevantCourses.map((course) => (
                    <span
                      key={course}
                      className="bg-[#C9ADA7] text-[#22223B] px-2 py-1 rounded text-xs font-medium hover:bg-[#E6D6CF] transition-colors duration-200"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Education;
