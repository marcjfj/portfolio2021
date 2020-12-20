import React, { useEffect, useState } from 'react';
import { AnimateSharedLayout } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TechStack from './components/TechStack';
import Hero from './components/Hero';
import Work from './components/Work';
import Footer from './components/Footer';
function App() {
  const [scrollPos, setScrollPos] = useState('hero');
  const [heroRef, heroInView] = useInView({
    threshold: 0.2,
  });
  const [techRef, techInView] = useInView({
    threshold: 0.4,
  });
  const [workRef, workInView] = useInView({
    threshold: 0.2,
  });
  const [footerRef, footerInView] = useInView({
    threshold: 0.5,
  });
  useEffect(() => {
    if (heroInView) {
      setScrollPos('hero');
    }
    if (techInView) {
      setScrollPos('tech');
    }
    if (workInView) {
      setScrollPos('work');
    }
    if (footerInView) {
      setScrollPos('footer');
    }
  }, [workInView, heroInView, techInView, footerInView]);

  return (
    <AnimateSharedLayout>
      <div className="App light-pattern relative">
        <div className="hero-section" ref={heroRef}>
          <Hero scrollPos={scrollPos} />
        </div>
        <div className="tech-section" ref={techRef}>
          <TechStack scrollPos={scrollPos} />
        </div>
        <div ref={workRef} className="relative work-section">
          <Work scrollPos={scrollPos} />
        </div>
        <div className="footer-section" ref={footerRef}>
          <Footer scrollPos={scrollPos} />
        </div>
      </div>
    </AnimateSharedLayout>
  );
}

export default App;
