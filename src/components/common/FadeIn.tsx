import React from 'react';
import { motion } from 'framer-motion';

interface FadeInProps {
  children?: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  style?: React.CSSProperties;
}

const motionDiv = motion.create('div');
const motionSection = motion.create('section');
const motionNav = motion.create('nav');
const motionH1 = motion.create('h1');
const motionH2 = motion.create('h2');
const motionP = motion.create('p');
const motionSpan = motion.create('span');

const motionMap: Record<string, any> = {
  div: motionDiv,
  section: motionSection,
  nav: motionNav,
  h1: motionH1,
  h2: motionH2,
  p: motionP,
  span: motionSpan,
};

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className = '',
  as = 'div',
  style,
}) => {
  const Component = motionMap[as] || motionDiv;

  return (
    <Component
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
      style={style}
    >
      {children}
    </Component>
  );
};

export default FadeIn;
