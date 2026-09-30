import { useState } from 'react';
import HeroSection from './components/sections/HeroSection';
import MarqueeSection from './components/sections/MarqueeSection';
import AboutSection from './components/sections/AboutSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ContactModal from './components/common/ContactModal';
import { ArrowUp } from 'lucide-react';

export function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      style={{ overflowX: 'clip' }}
      className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA] font-kanit relative selection:bg-[#BBCCD7] selection:text-[#0C0C0C]"
    >
      {/* 1. HERO SECTION */}
      <HeroSection onContactClick={() => setIsContactOpen(true)} />

      {/* 2. MARQUEE SECTION */}
      <MarqueeSection />

      {/* 3. ABOUT SECTION */}
      <AboutSection onContactClick={() => setIsContactOpen(true)} />

      {/* 4. PROJECTS SECTION */}
      <ProjectsSection />

      {/* Footer */}
      <footer className="bg-[#0C0C0C] text-[#D7E2EA] px-6 sm:px-10 py-12 border-t border-[#D7E2EA]/10 flex flex-col sm:flex-row items-center justify-between gap-6 z-20 relative">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <span className="hero-heading font-black text-2xl uppercase tracking-tight">
            Aryan
          </span>
          <p className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-light">
            A Student &bull; Explorer
          </p>
        </div>

        <div className="flex items-center gap-5 sm:gap-6 text-sm uppercase tracking-wider font-light text-[#D7E2EA]/70 flex-wrap justify-center">
          <button
            onClick={() => setIsContactOpen(true)}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Get In Touch
          </button>
          <a
            href="https://github.com/Aryan1419"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/aryan-beltharia-318594236"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="/resume.pdf"
            id="resume-link"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Resume
          </a>
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#D7E2EA]/20 hover:border-[#D7E2EA]/50 text-xs uppercase tracking-wider transition-colors cursor-pointer"
          aria-label="Scroll to top"
        >
          <span>Back to top</span>
          <ArrowUp size={14} />
        </button>
      </footer>

      {/* Interactive Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}

export default App;
