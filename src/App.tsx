import { useState } from "react";
import Sidebar from "./components/Sidebar";
import { navigationItems, socialLinks, education, projects,skills, experiences} from "./config";
import MainContent from "./components/MainContent";


export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  return (
    <div className="min-h-screen bg-[#8174A0] text-slate-100">
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto">
        <Sidebar
          activeSection={activeSection}
          onSectionChange={setActiveSection}
          navigationItems={navigationItems}
          socialLinks={socialLinks}
        />
        <MainContent
          activeSection={activeSection}
          experiences={experiences}
          education={education}
          projects={projects}
          skills={skills}
        />
      </div>
    </div>
  );
}
