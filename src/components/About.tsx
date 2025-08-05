import React from 'react';

interface AboutProps {
  skills: string[];
}

const About: React.FC<AboutProps> = ({ skills }) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>

        <div className="space-y-4 text-[#3c2954] leading-relaxed bg-[#A888B5] p-6 rounded-lg">
          <p>
            I'm Sarita Karwa, a final-year Computer Science student at IGDTUW, transforming ideas into interfaces, one keystroke at a time. 
            My web development journey started with a curiosity about how websites work, and it has evolved into a 
            into a passion for solving real-world problems through thoughtful code and design.
          </p>
          <p>
            I'm deeply passionate about core computer science subjects and love diving into topics like data structures, algorithms,backend systems, and system design. I enjoy problem-solving, experimenting with new technologies, and constantly expanding my knowledge. My curiosity drives me to explore how things work — from frontend interactions to backend logic.
          </p>
          <p>
            When I'm not coding, you can find me reading about the latest web technologies and learning new tech. In my free time, I love watching movies, listening to music or simply spending quality time with friends and family.
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Core Skills</h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-[#FFD2A0] text-[#3c2954] px-3 py-2 rounded-lg text-sm font-medium 
                         hover:bg-[#ffe1b7] transition-colors duration-200"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
