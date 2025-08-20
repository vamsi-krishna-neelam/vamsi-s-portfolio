import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Preloader from './Preloader';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ProjectsSection from './ProjectsSection';
import AchievementsSection from './AchievementsSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadComplete = () => {
    setIsLoading(false);
    
    // Initialize smooth scrolling and animations after load
    gsap.from('.main-content', {
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });
  };

  useEffect(() => {
    // Disable scroll during loading
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isLoading]);

  if (isLoading) {
    return <Preloader onLoadComplete={handleLoadComplete} />;
  }

  return (
    <div className="main-content">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Portfolio;