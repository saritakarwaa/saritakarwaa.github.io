import React from 'react';
import type { NavigationItem, SocialLink } from '../types';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  navigationItems: NavigationItem[];
  socialLinks: SocialLink[];
}

const Sidebar: React.FC<SidebarProps> = ({
  activeSection,
  onSectionChange,
  navigationItems,
  socialLinks
}) => {
  return (
    <div className="lg:w-1/3 lg:fixed lg:h-screen p-8 lg:p-12 flex flex-col justify-between text-white">
      <div>
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-3">
            Sarita Karwa
          </h1>
          <h2 className="text-xl lg:text-2xl font-medium text-[#FFD2A0] mb-4">
            {/* Front End Engineer */}
          </h2>
          <p className="text-[#d6d6e3] leading-relaxed max-w-xs">
            Learning to architect secure and scalable backend systems that solve real-world problems.
          </p>
        </div>

        {/* Navigation */}
        <nav className="space-y-4">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`block text-left transition-all duration-200 hover:text-[#EFB6C8] hover:transform hover:translate-x-2 ${
                activeSection === item.id
                  ? 'text-[#FFD2A0] font-semibold border-l-2 border-[#EFB6C8] pl-4'
                  : 'text-[#d6d6e3] pl-4'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Social Links */}
      <div className="flex space-x-4 mt-8 lg:mt-0">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="p-2 text-[#d6d6e3]  hover:text-[#EFB6C8] transition-all duration-200 
                     hover:transform hover:scale-110"
          >
            <social.icon size={22} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;