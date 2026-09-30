import React, { useRef, useState, useEffect } from 'react';
import { galleryPhotos, type GalleryPhoto } from '../../data/galleryPhotos';

interface PhotoCardProps {
  photo: GalleryPhoto;
  index: number;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ photo, index }) => {
  return (
    <div
      className="group relative flex-shrink-0 w-[280px] h-[190px] sm:w-[380px] sm:h-[255px] md:w-[460px] md:h-[310px] lg:w-[500px] lg:h-[335px] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#121212] border border-white/10 shadow-[0_14px_35px_rgba(0,0,0,0.8)] transition-all duration-500 ease-out hover:scale-[1.025] hover:border-white/30 hover:shadow-[0_0_35px_rgba(187,204,215,0.22)] select-none cursor-pointer"
    >
      <picture>
        <source srcSet={photo.webpSrc} type="image/webp" />
        <img
          src={photo.src}
          alt={photo.alt}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </picture>

      {/* Subtle vignette gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300 pointer-events-none" />

      {/* Tasteful location & title overlay */}
      <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-5 z-10 pointer-events-none transition-transform duration-300 group-hover:translate-y-[-2px]">
        <span className="text-[10px] sm:text-xs font-mono tracking-widest uppercase text-[#BBCCD7] block mb-0.5 opacity-80">
          {photo.location}
        </span>
        <h4 className="text-white font-medium text-xs sm:text-sm md:text-base tracking-wide drop-shadow-md">
          {photo.title}
        </h4>
      </div>

      {/* Index indicator */}
      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[9px] sm:text-[10px] font-mono text-white/70 pointer-events-none">
        0{index + 1}
      </div>
    </div>
  );
};

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState<number>(0);

  // Row 1: Repeat 5 photos 3 times = 15 cards
  const row1Base = [...galleryPhotos];
  const row1 = [...row1Base, ...row1Base, ...row1Base];

  // Row 2: Reverse order 5 photos repeated 3 times = 15 cards
  const row2Base = [...galleryPhotos].reverse();
  const row2 = [...row2Base, ...row2Base, ...row2Base];

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const currentOffset = window.scrollY - sectionTop + window.innerHeight;
      setOffset(currentOffset);
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    handleScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Parallax calculations: Row 1 moves right at speed 0.28, Row 2 moves left at speed 0.42
  const row1X = offset * 0.28 - 450;
  const row2X = -(offset * 0.42) + 200;

  // Subtle vertical drift for floating depth
  const row1Y = Math.sin(offset * 0.0018) * 8;
  const row2Y = -Math.sin(offset * 0.0018) * 8;

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-20 sm:pt-28 md:pt-36 pb-12 sm:pb-20 overflow-hidden w-full select-none relative"
      aria-label="Photo Showcase Gallery"
    >
      <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 w-full">
        {/* Row 1: Moves right on scroll with speed factor 0.28 */}
        <div
          className="flex gap-4 sm:gap-6 md:gap-8"
          style={{
            transform: `translate3d(${row1X}px, ${row1Y}px, 0)`,
            willChange: 'transform',
          }}
        >
          {row1.map((photo, index) => (
            <PhotoCard
              key={`row1-${photo.id}-${index}`}
              photo={photo}
              index={index % galleryPhotos.length}
            />
          ))}
        </div>

        {/* Row 2: Moves left on scroll with speed factor 0.42 for depth */}
        <div
          className="flex gap-4 sm:gap-6 md:gap-8"
          style={{
            transform: `translate3d(${row2X}px, ${row2Y}px, 0)`,
            willChange: 'transform',
          }}
        >
          {row2.map((photo, index) => (
            <PhotoCard
              key={`row2-${photo.id}-${index}`}
              photo={photo}
              index={index % galleryPhotos.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
