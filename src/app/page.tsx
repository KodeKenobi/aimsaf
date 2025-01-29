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
  <Contact key={4} />
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

  return (
    <motion.div
      ref={ref}
      id={id}
      key={index}
      className="w-full h-screen flex items-center justify-center"
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        setShowBackToTop(containerRef.current.scrollTop > 100);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const scrollToTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={containerRef}
      className="h-screen bg-hero bg-cover snap-y snap-mandatory overflow-y-auto"
    >
      <div className="navbar fixed top-0 left-0 w-full z-10 bg-secondary">
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
        onDotClick={(index) => {
          if (containerRef.current) {
            containerRef.current.scrollTo({
              top: index * window.innerHeight,
              behavior: 'smooth',
            });
          }
        }}
      />
      <motion.button
        className="fixed bottom-5 right-5 p-3 bg-gray-700 text-white rounded-full shadow-lg hover:bg-gray-900 transition flex justify-center items-center"
        onClick={scrollToTop}
        initial={{ opacity: 0 }}
        animate={{ opacity: showBackToTop ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg" className="rotate-180" width="28" height="28" viewBox="0 0 28 28" fill="none"
        >
          <path fillRule="evenodd" clipRule="evenodd" d="M1.75 14C1.75 7.2345 7.2345 1.75 14 1.75C20.7655 1.75 26.25 7.2345 26.25 14C26.25 20.7655 20.7655 26.25 14 26.25C7.2345 26.25 1.75 20.7655 1.75 14ZM0 14C0 6.26797 6.26797 0 14 0C21.732 0 28 6.26797 28 14C28 21.732 21.732 28 14 28C6.26797 28 0 21.732 0 14ZM14.6186 20.5562L13.9998 21.175L13.3812 20.5562L8.1312 15.3062L9.36863 14.0688L13.1248 17.8252V6.81258H14.8748V17.8252L18.6312 14.0688L19.8686 15.3062L14.6186 20.5562Z" fill="#417CFF" />
        </motion.svg>
        <p className='text-white md:text-sm text-xs 2xl:text-xl ml-2 4xl:text-2xl font-sans'>Back To Top</p>
      </motion.button>
    </div>
  );
};

export default Home;
