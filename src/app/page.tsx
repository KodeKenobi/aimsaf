'use client'

import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const sections = ['Section 1', 'Section 2', 'Section 3', 'Section 4'];

const Section = ({ id, children }: any) => {
  const [ref] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const variants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0.95 },
  };

  return (
    <motion.div
      ref={ref}
      id={id}
      className="h-screen flex items-center justify-center text-3xl snap-start border border-gray-400"
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  const containerRef = useRef<HTMLInputElement>(null);
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (isScrollingRef.current) return;

      isScrollingRef.current = true;

      const container = containerRef.current;
      if (!container) return;

      if (event.deltaY > 0) {
        container.scrollBy({ top: window.innerHeight, left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ top: -window.innerHeight, left: 0, behavior: 'smooth' });
      }

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 1250); 
    };

    window.addEventListener('wheel', handleWheel);
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div ref={containerRef} className="h-screen overflow-hidden snap-y snap-mandatory">
      {sections.map((section, index) => (
        <Section key={index} id={`section-${index}`}>
          {section}
        </Section>
      ))}
    </div>
  );
};

export default Home;