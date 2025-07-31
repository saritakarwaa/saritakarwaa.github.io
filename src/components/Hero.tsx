import { siteConfig } from "../config";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative isolate overflow-hidden bg-white py-24 md:h-screen"
      style={{
        // Tailwind doesn't support custom props directly
        // So we can use inline styles for the background overlay
        // or handle it via CSS vars in a CSS file
        //@ts-ignore
        "--accent-color": siteConfig.accentColor,
      }}
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(ellipse 800px 1200px at 0% 0%, ${siteConfig.accentColor}40 0%, ${siteConfig.accentColor}25 20%, ${siteConfig.accentColor}10 40%, rgba(255, 255, 255, 0.3) 70%, rgba(255, 255, 255, 0.8) 90%, white 100%)`,
        }}
      ></div>

      <div className="h-full mx-auto p-8 sm:p-12 md:p-24 flex items-center">
        <div>
          <h2 className="text-pretty text-xl sm:text-2xl md:text-5xl font-bold tracking-tight text-gray-700 animate-fade-in">
            Hello! 👋
          </h2>
          <h1 className="mt-6 sm:mt-8 md:mt-10 text-pretty text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight text-gray-800 animate-fade-in animation-delay-200">
            I'm <span style={{ color: siteConfig.accentColor }}>{siteConfig.name}</span>
          </h1>
          <p className="mt-4 sm:mt-6 md:mt-8 text-pretty text-base sm:text-lg md:text-xl/8 font-medium text-gray-600 animate-fade-in animation-delay-400">
            {siteConfig.title}
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 md:p-24 flex gap-x-4 sm:gap-x-6 md:gap-x-8 text-gray-700 animate-fade-in animation-delay-600">
        {siteConfig.social?.email && (
          <a
            href={`mailto:${siteConfig.social.email}`}
            aria-label="Email"
            className="transition-colors duration-300 hover:text-[var(--accent-color)]"
          >
            <Mail className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
          </a>
        )}

        {siteConfig.social?.linkedin && (
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors duration-300 hover:text-[var(--accent-color)]"
          >
            <Linkedin className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
          </a>
        )}

        {siteConfig.social?.twitter && (
          <a
            href={siteConfig.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="transition-colors duration-300 hover:text-[var(--accent-color)]"
          >
            <Twitter className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
          </a>
        )}

        {siteConfig.social?.github && (
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors duration-300 hover:text-[var(--accent-color)]"
          >
            <Github className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
          </a>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  );
};

export default Hero;
