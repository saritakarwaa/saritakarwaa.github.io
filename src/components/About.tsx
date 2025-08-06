import React from "react";

interface AboutProps {
  skills: string[];
}

const About: React.FC<AboutProps> = ({ skills }) => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>

    <div className="space-y-4 text-[#F2E9E4] leading-relaxed bg-[#4A4E69] p-6 rounded-lg">
      <p>
        I'm Sarita Karwa, a final‑year Computer Science student at IGDTUW, transforming ideas into interfaces —
        one keystroke at a time. My journey began with curiosity about how websites work, and it has evolved 
        into a passion for solving real-world problems through thoughtful code and design.
      </p>
      <p>
        I'm deeply passionate about core CS topics—data structures, algorithms, backend systems, and system design.
        I enjoy problem-solving, experimenting with new tech, and constantly expanding my knowledge across frontend
        and backend.
      </p>
      <p>
        When I'm not coding, I'm exploring the latest in web technologies or learning something new. Outside tech,
        I love movies, music, and quality time with friends and family.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-[#F2E9E4] mb-4">Core Skills</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-[#C9ADA7] text-[#22223B] px-3 py-2 rounded-lg text-sm font-medium hover:bg-[#E6D6CF] transition-colors duration-200"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default About;
