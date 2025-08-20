import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, Code, BookOpen, ShieldCheck } from 'phosphor-react';
import { Github, Linkedin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating particles animation
      const particles = document.querySelectorAll('.particle');
      particles.forEach((particle, index) => {
        gsap.to(particle, {
          y: -30,
          duration: 4 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: index * 0.3
        });

        gsap.to(particle, {
          x: 20,
          duration: 6 + index * 0.3,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: index * 0.2
        });
      });

      // Footer content animation
      gsap.fromTo('.footer-content',
        {
          opacity: 0,
          y: 60,
          filter: "blur(10px)"
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, footerRef);

    return () => ctx.revert();
  }, []);

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Achievements', id: 'achievements' },
    { label: 'Contact', id: 'contact' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer ref={footerRef} className="relative py-16 border-t border-border/20 overflow-hidden">
      {/* Floating Particles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="particle absolute top-1/4 left-1/4 w-2 h-2 bg-neon-blue/30 rounded-full" />
        <div className="particle absolute top-1/2 left-1/2 w-1 h-1 bg-neon-cyan/40 rounded-full" />
        <div className="particle absolute top-3/4 right-1/4 w-3 h-3 bg-neon-purple/20 rounded-full" />
        <div className="particle absolute top-1/3 right-1/3 w-1 h-1 bg-neon-pink/50 rounded-full" />
        <div className="particle absolute bottom-1/4 left-1/3 w-2 h-2 bg-neon-cyan/30 rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="footer-content text-center space-y-8">
          {/* Logo */}
          <div className="text-3xl font-bold gradient-text-primary">
            Vamsi Krishna
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground/70 hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Divider */}
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto" />

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4">
            <a href="https://www.linkedin.com/in/vamsi-krishna-neelam-37171b293/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 rounded-md hover:bg-muted/20 transition">
              <Linkedin size={20} />
            </a>

            <a href="https://leetcode.com/u/Neelam_Vamsi_Krishna/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode" className="p-2 rounded-md hover:bg-muted/20 transition">
              <img src="/icons/leetcode.webp" alt="LeetCode" className="w-5 h-5" />
            </a>

            <a href="https://github.com/vamsi-krishna-neelam" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 rounded-md hover:bg-muted/20 transition">
              <Github size={20} />
            </a>

            <a href="https://www.geeksforgeeks.org/user/vamsikrishnqpig/" target="_blank" rel="noopener noreferrer" aria-label="GeeksforGeeks" className="p-2 rounded-md hover:bg-muted/20 transition">
              <img src="/icons/gfg.png" alt="GeeksforGeeks" className="w-5 h-5" />
            </a>

            <a href="https://www.hackerrank.com/profile/vamsikrishnanee1" target="_blank" rel="noopener noreferrer" aria-label="HackerRank" className="p-2 rounded-md hover:bg-muted/20 transition">
              <img src="/icons/hackerrank.png" alt="HackerRank" className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-foreground/60 text-sm flex items-center justify-center space-x-2">
            <span>© 2025 Made with</span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <span>by Vamsi Krishna</span>
          </div>

          {/* Tech Stack Badge */}
          <div className="text-xs text-foreground/40">
            Built with React, GSAP, Locomotive Scroll
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;