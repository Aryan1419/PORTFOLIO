import React from 'react';
import FadeIn from '../common/FadeIn';
import Magnet from '../common/Magnet';
import ContactButton from '../common/ContactButton';

interface HeroSectionProps {
  onContactClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C]">
      {/* Top Navbar */}
      <FadeIn delay={0} y={-20} className="w-full z-20">
        <nav className="flex items-center justify-between w-full px-6 md:px-10 pt-6 md:pt-8">
          <button
            onClick={() => scrollTo('about')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => scrollTo('projects')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer"
          >
            Projects
          </button>
          <button
            onClick={onContactClick ? onContactClick : () => scrollTo('contact')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer"
          >
            Contact
          </button>
        </nav>
      </FadeIn>

      {/* Hero Heading */}
      <FadeIn delay={0.15} y={40} className="w-full z-10 flex justify-center px-2 sm:px-4 md:px-6">
        <div className="overflow-hidden w-full text-center mt-3 sm:mt-4 md:-mt-5 py-1">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-[0.92] sm:leading-none whitespace-normal sm:whitespace-nowrap w-full text-[clamp(2.5rem,11.5vw,12.5vw)] sm:text-[clamp(3rem,11.2vw,12.5vw)] md:text-[clamp(3.8rem,11.6vw,12.8vw)] lg:text-[12.2vw] xl:text-[12.5vw]">
            <span className="block sm:inline">Hi, i&apos;m </span>
            <span className="block sm:inline">aryan</span>
          </h1>
        </div>
      </FadeIn>

      {/* Centered Hero Portrait with Magnet effect */}
      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto"
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
        >
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
            alt="Aryan - Portrait"
            className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] object-contain drop-shadow-2xl select-none pointer-events-none block"
            loading="eager"
          />
        </Magnet>
      </FadeIn>

      {/* Bottom Bar */}
      <div className="px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 flex justify-between items-end relative z-20 w-full">
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-[clamp(0.75rem,1.4vw,1.5rem)] max-w-[180px] sm:max-w-[260px] md:max-w-[320px]">
            a computer science student driven by building clean, thoughtful and impactful software
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton onClick={onContactClick} />
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
