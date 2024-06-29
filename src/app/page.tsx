'use client'

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import LandingPage from '@/clientComponents/landingPage';
import About from '@/clientComponents/about';
import Philosophy from '@/clientComponents/philosophy';
import Contact from '@/clientComponents/contactUs';
import Navigation from '@/clientComponents/navigation';
import PaginationDots from '@/clientComponents/paginationDots';

const sections = [<LandingPage key={1} />, <About key={2} />, <Philosophy key={3} />, <Contact key={4} />];

const Section = ({ id, children, index, setActiveSection }: any) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setActiveSection(index);
    }
  }, [inView, index, setActiveSection]);

  const variants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      ref={ref}
      id={id}
      key={index}
      className="h-screen flex items-center justify-center snap-start"
      initial="hidden"
      animate="visible"
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);
  const touchStartYRef = useRef(0);
  const touchEndYRef = useRef(0);
  const touchStartedInContainer = useRef(false);
  const touchStartTimeRef = useRef<number | null>(null);
  const navbarRef = useRef<HTMLDivElement>(null);

  const SCROLL_THRESHOLD = 50;
  const MAX_TAP_DURATION = 100;

  const scrollToSection = (index: number) => {
    const container = containerRef.current;
    if (container) {
      container.scrollTo({ top: index * window.innerHeight, left: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {

    const handleMouseOver = (event: MouseEvent) => {
      if (event.clientY < 150) {
        navbarRef.current?.classList.add('show-navbar');
      } else {
        navbarRef.current?.classList.remove('show-navbar');
      }
    };
    window.addEventListener('mousemove', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseOver);
    };
  }, []);


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
      <div ref={navbarRef} className="navbar flex justify-between items-center md:px-20 px-8 h-16 md:h-32 absolute w-full bg-secondary z-20 top-0 left-0 show-navbar">
        <Navigation />
      </div>
      {sections.map((section, index) => (
        <Section key={index} id={`section-${index}`} index={index} setActiveSection={setActiveSection}>
          {section}
        </Section>
      ))}
      <PaginationDots total={sections.length} activeIndex={activeSection} onDotClick={scrollToSection} />
    </div>
  );
};

export default Home;