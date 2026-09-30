import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../common/FadeIn';
import LiveProjectButton from '../common/LiveProjectButton';
import { projectsData, type ProjectItem } from '../../data/projectsData';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, totalCards }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  const topOffsetPx = index * 28;

  return (
    <div
      ref={containerRef}
      className={
        totalCards > 1
          ? "h-[85vh] min-h-[580px] flex items-start justify-center relative mb-12 sm:mb-16 md:mb-20 last:mb-28"
          : "flex items-start justify-center relative mb-8 sm:mb-12"
      }
    >
      <motion.div
        style={
          totalCards > 1
            ? {
                scale,
                top: `calc(5.5rem + ${topOffsetPx}px)`,
              }
            : undefined
        }
        className={`${totalCards > 1 ? 'sticky origin-top' : 'relative'} w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 shadow-2xl`}
      >
        {/* Top Row: Number (huge, same style as services), category label, project name, and Live Project button */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 sm:mb-8 pb-4 border-b border-[#D7E2EA]/15">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="font-black text-[#D7E2EA] text-[clamp(2.5rem,7vw,100px)] leading-none select-none tracking-tighter block">
              {project.number}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA]/60 uppercase font-light text-xs sm:text-sm tracking-widest">
                ({project.category})
              </span>
              <h3 className="text-[#D7E2EA] font-medium uppercase text-lg sm:text-2xl md:text-3xl tracking-wide">
                {project.name}
              </h3>
            </div>
          </div>

          <LiveProjectButton href={project.liveUrl} />
        </div>

        {/* Bottom Row: Two-column image grid */}
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6 w-full items-stretch">
          {/* Left Column (40% width) has 2 stacked images */}
          <div className="w-full md:w-[40%] flex flex-col gap-4 sm:gap-6">
            <div className="h-[clamp(130px,16vw,230px)] w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#161616]">
              <img
                src={project.col1Image1}
                alt={`${project.name} preview 1`}
                className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
                loading="lazy"
              />
            </div>
            <div className="h-[clamp(160px,22vw,340px)] w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#161616]">
              <img
                src={project.col1Image2}
                alt={`${project.name} preview 2`}
                className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column (60% width) has 1 tall image */}
          <div className="w-full md:w-[60%] flex">
            <div className="w-full h-[clamp(260px,36vw,594px)] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#161616]">
              <img
                src={project.col2Image}
                alt={`${project.name} main feature`}
                className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] relative px-4 sm:px-8 md:px-10 pt-16 sm:pt-20 md:pt-28 pb-24"
    >
      {/* Heading: "Project" (singular) */}
      <FadeIn delay={0} y={40} className="mb-14 sm:mb-20 md:mb-28 text-center">
        <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none tracking-tight">
          Project
        </h2>
      </FadeIn>

      {/* 3 sticky-stacking project cards */}
      <div className="w-full max-w-6xl mx-auto relative">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            totalCards={projectsData.length}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
