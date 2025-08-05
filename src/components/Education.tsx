import React from 'react';
import { Calendar, Award, BookOpen } from 'lucide-react';
import type { EducationItem } from '../types';

interface EducationProps {
  education: EducationItem[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white mb-8">Education</h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#3c2954]"></div>

        {education.map((edu, index) => (
          <div key={index} className="relative pl-12 pb-12 last:pb-0">
            {/* Timeline dot */}
            <div className="absolute left-2.5 w-3 h-3 bg-[#FFD2A0] rounded-full border-2 border-[#3c2954]"></div>

            <div className="bg-[#A888B5] p-6 rounded-lg hover:bg-[#C8A4CE] transition-colors duration-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-[#3c2954]">{edu.degree}</h3>
                  <div className="flex items-center gap-2 text-[#3c2954] font-medium">
                    <span>{edu.institution}</span>
                    <span className="text-[#5e4c6d]">• {edu.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[#5e4c6d] mt-2 md:mt-0">
                  <Calendar size={16} />
                  <span className="text-sm">{edu.date}</span>
                </div>
              </div>

              {edu.gpa && (
                <div className="mb-3">
                  <span className="text-[#3c2954] text-sm font-medium">GPA: {edu.gpa}</span>
                </div>
              )}

              {edu.description && (
                <ul className="space-y-2 mb-4">
                  {edu.description.map((item, i) => (
                    <li key={i} className="text-[#3c2954] text-sm leading-relaxed flex">
                      <span className="text-[#FFD2A0] mr-2 mt-1.5 w-1 h-1 bg-current rounded-full flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {edu.honors && edu.honors.length > 0 && (
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Award size={16} className="text-[#EFB6C8]" />
                    <span className="text-[#3c2954] text-sm font-semibold">Honors & Awards</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.honors.map((honor) => (
                      <span
                        key={honor}
                        className="bg-[#EFB6C8] bg-opacity-20 text-[#3c2954] px-2 py-1 rounded text-xs font-medium
                                   border border-[#3c2954] border-opacity-30"
                      >
                        {honor}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {edu.relevantCourses && edu.relevantCourses.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen size={16} className="text-[#EFB6C8]" />
                    <span className="text-[#3c2954] text-sm font-semibold">Relevant Coursework</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.relevantCourses.map((course) => (
                      <span
                        key={course}
                        className="bg-[#FFD2A0] text-[#3c2954] px-2 py-1 rounded text-xs font-medium
                                   hover:bg-[#ffe0ba] transition-colors duration-200"
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
};

export default Education;
