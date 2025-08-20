import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight } from 'phosphor-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const splineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    // Initial state
    gsap.set([headlineRef.current, subtitleRef.current, ctaRef.current], {
      opacity: 0,
      y: 50,
      filter: "blur(10px)"
    });

    gsap.set(splineRef.current, {
      opacity: 0,
      scale: 0.98
    });

    // Animate in
    tl.to(headlineRef.current, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1.2,
      ease: "power2.out"
    })
    .to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1,
      ease: "power2.out"
    }, "-=0.8")
    .to(ctaRef.current, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1,
      ease: "power2.out"
    }, "-=0.6")
    .to(splineRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1.6,
      ease: 'power2.out'
    }, '-=1')

    // Floating orbs: horizontal bobbing + scroll parallax
    const orbs = document.querySelectorAll('.floating-orb');
    orbs.forEach((orb, index) => {
      gsap.to(orb, {
        x: index % 2 === 0 ? -16 : 16,
        duration: 3 + index * 0.6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.2
      });
    });

    gsap.to('.floating-orb', {
      yPercent: -6,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

  }, []);

  const handleHireMe = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Spline 3D Background */}
      <div ref={splineRef} className="absolute inset-0 z-0">
        <iframe
          src="https://my.spline.design/orb-Dh4XNTXOBuHAtg3bjkuCGE6y/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="w-full h-full"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent z-10" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-3xl">
          <h1 
            ref={headlineRef}
            className="text-6xl md:text-8xl font-bold leading-tight mb-6"
          >
            Hi, I'm{' '}
            <span className="gradient-text-primary text-glow-primary">
              Vamsi Krishna
            </span>
            <br />
            <span className="text-4xl md:text-6xl text-foreground/80">
              Web Developer
            </span>
          </h1>

          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-2xl leading-relaxed"
          >
            Crafting digital experiences that inspire and engage through 
            innovative design and cutting-edge technology.
          </p>

          <button
            ref={ctaRef}
            onClick={handleHireMe}
            className="group glass-strong px-8 py-4 rounded-xl font-semibold text-lg hover:glow-primary transition-all duration-300 flex items-center space-x-3"
          >
            <span>Hire Me</span>
            <ArrowRight 
              size={20} 
              className="group-hover:translate-x-1 transition-transform duration-300" 
            />
          </button>
        </div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-15">
        <div className="floating-orb absolute top-1/4 left-1/4 w-4 h-4 bg-neon-blue rounded-full glow-primary opacity-60" />
        <div className="floating-orb absolute top-3/4 right-1/4 w-6 h-6 bg-neon-cyan rounded-full glow-accent opacity-40" />
        <div className="floating-orb absolute top-1/2 right-1/3 w-2 h-2 bg-neon-purple rounded-full opacity-80" />
        <div className="floating-orb absolute bottom-1/4 left-1/3 w-3 h-3 bg-neon-pink rounded-full opacity-50" />
      </div>
    </section>
  );
};

export default HeroSection;