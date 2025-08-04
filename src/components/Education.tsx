import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Master of Computer Applications",
      institution: "IGDTUW",
      location: "Delhi",
      period: "2024 - 2026",
      gpa: "8.5/10",
      description: "Focused on software engineering, data structures, algorithms, and web development. Active member of the Computer Science Club and participated in various hackathons."
    },
    {
      degree: "Bachelor of Computer Applications",
      institution: "Kuchaman College",
      location: "Rajasthan",
      period: "2021 - 2024",
      gpa: "8.05/10",
      description: "Focused on software engineering, data structures, algorithms, and web development. Active member of the Computer Science Club and participated in various hackathons.",
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
        </div>

        {/* Formal Education */}
        <div className="mb-12">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start mb-4">
                <div className="bg-blue-100 rounded-lg p-3 mr-4">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                  <div className="text-blue-600 font-semibold mb-2">{edu.institution}</div>
                  <div className="flex flex-col sm:flex-row gap-4 text-gray-600 text-sm mb-2">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {edu.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {edu.location}
                    </div>
                    <div className="flex items-center">
                      <Award className="w-4 h-4 mr-2" />
                      GPA: {edu.gpa}
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;