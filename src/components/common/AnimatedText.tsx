import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface CharProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const AnimatedChar: React.FC<CharProps> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-0 select-none pointer-events-none">{char}</span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0">
        {char}
      </motion.span>
    </span>
  );
};

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  const totalChars = text.length;
  let charCounter = 0;

  return (
    <p ref={containerRef} className={className}>
      {words.map((word, wordIndex) => {
        const characters = word.split('');
        const wordCharElements = characters.map((char) => {
          const start = charCounter / totalChars;
          const end = Math.min(1, (charCounter + 1) / totalChars);
          const element = (
            <AnimatedChar
              key={`char-${charCounter}`}
              char={char}
              progress={scrollYProgress}
              range={[start, end]}
            />
          );
          charCounter++;
          return element;
        });

        // Increment for space between words
        charCounter++;

        return (
          <span
            key={`word-${wordIndex}`}
            className="inline-block whitespace-nowrap mr-[0.28em] last:mr-0"
          >
            {wordCharElements}
          </span>
        );
      })}
    </p>
  );
};

export default AnimatedText;
