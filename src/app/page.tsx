'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import LandingPage from '@/clientComponents/landingPage';
import About from '@/clientComponents/about';
import Philosophy from '@/clientComponents/philosophy';
import Contact from '@/clientComponents/contactUs';
import Navigation from '@/clientComponents/navigation';
import PaginationDots from '@/clientComponents/paginationDots';

const sections = [
  <LandingPage key={1} />,
  <About key={2} />,
  <Philosophy key={3} />,
  <Contact key={4} />,
];

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
      className="w-full h-screen flex items-center justify-center snap-start" 
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
  const navbarRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (index: number) => {
    const container = containerRef.current;
    if (container) {
      container.scrollTo({
        top: index * window.innerHeight,
        left: 0,
        behavior: 'smooth',
      });
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
    const container = containerRef.current;

    if (!container) return;

    let isScrolling = false;

    const handleWheel = (event: WheelEvent) => {
      if (isScrolling) return;

      isScrolling = true;

      if (event.deltaY > 0) {
        scrollToSection(Math.min(activeSection + 1, sections.length - 1));
      } else {
        scrollToSection(Math.max(activeSection - 1, 0));
      }

      setTimeout(() => (isScrolling = false), 800);
    };

    container.addEventListener('wheel', handleWheel);

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, [activeSection]);


  return (
    <div
      ref={containerRef}
      className="h-screen bg-hero bg-cover snap-y snap-mandatory overflow-y-scroll"
    >
      <div ref={navbarRef} className="navbar fixed top-0 left-0 w-full z-10 bg-secondary">
        <Navigation />
      </div>
      {sections.map((section, index) => (
        <Section
          key={index}
          id={`section-${index}`}
          index={index}
          setActiveSection={setActiveSection}
        >
          {section}
        </Section>
      ))}
      <PaginationDots
        total={sections.length}
        activeIndex={activeSection}
        onDotClick={scrollToSection}
      />
    </div>
  );
};

export default Home;

