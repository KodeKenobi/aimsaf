'use client'

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import LandingPage from './clientComponents/landingPage';
import About from './clientComponents/about';
import Philosophy from './clientComponents/philosophy';
import Contact from './clientComponents/contactUs';
import Navigation from './serverComponents/navigation/navigation';

const sections = [<LandingPage />, <About />, <Philosophy />, <Contact />];

const Section = ({ id, children }: any) => {
  const [ref] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const variants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      ref={ref}
      id={id}
      className="h-screen flex items-center justify-center text-3xl snap-start"
      initial="hidden"
      animate="visible"
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);
  const touchStartYRef = useRef(0);
  const touchEndYRef = useRef(0);
  const touchStartedInContainer = useRef(false);
  const touchStartTimeRef = useRef<number | null>(null);

  const SCROLL_THRESHOLD = 50;
  const MAX_TAP_DURATION = 100;

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

    const handleTouchStart = (event: TouchEvent) => {
      const container = containerRef.current;
      touchStartedInContainer.current = container ? container.contains(event.target as Node) : false;
      if (touchStartedInContainer.current) {
        touchStartYRef.current = event.touches[0].clientY;
        touchStartTimeRef.current = Date.now();
      }
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (touchStartedInContainer.current) {
        touchEndYRef.current = event.touches[0].clientY;
      }
    };

    const handleTouchEnd = () => {
      if (isScrollingRef.current || !touchStartedInContainer.current) return;

      const touchDistance = touchStartYRef.current - touchEndYRef.current;
      const touchDuration = Date.now() - (touchStartTimeRef.current ?? 0);

      if (Math.abs(touchDistance) < SCROLL_THRESHOLD || touchDuration < MAX_TAP_DURATION) {
        return;
      }

      isScrollingRef.current = true;

      const container = containerRef.current;
      if (!container) return;

      if (touchDistance > 0) {
        container.scrollBy({ top: window.innerHeight, left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ top: -window.innerHeight, left: 0, behavior: 'smooth' });
      }

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 1250);
    };

    window.addEventListener('wheel', handleWheel);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <div ref={containerRef} className="h-screen bg-hero bg-cover overflow-hidden snap-y snap-mandatory">
      {sections.map((section, index) => (
        <Section key={index} id={`section-${index}`}>
          {section}
        </Section>
      ))}
    </div>
  );
};

export default Home;
