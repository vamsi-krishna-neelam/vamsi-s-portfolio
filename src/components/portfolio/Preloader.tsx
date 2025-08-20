import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface PreloaderProps {
  onLoadComplete: () => void;
}

const Preloader = ({ onLoadComplete }: PreloaderProps) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial state
    gsap.set([textRef.current, progressBarRef.current], {
      opacity: 0,
      y: 30
    });

    // Animate in
    tl.to([textRef.current, progressBarRef.current], {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out"
    })
    .to(progressBarRef.current, {
      width: "100%",
      duration: 2.5,
      ease: "power2.out"
    })
    .to([textRef.current, progressBarRef.current], {
      opacity: 0,
      y: -30,
      duration: 0.5,
      ease: "power2.in"
    })
    .to(preloaderRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 0.8,
      ease: "power2.inOut",
      onComplete: () => {
        onLoadComplete();
      }
    });

  }, [onLoadComplete]);

  return (
    <div ref={preloaderRef} className="preloader">
      <div className="text-center space-y-8">
        <div ref={textRef} className="space-y-2">
          <h1 className="text-6xl font-bold gradient-text-primary text-glow-primary">
            Vamsi Krishna
          </h1>
          <p className="text-xl text-foreground/70">Web Developer</p>
        </div>
        
        <div className="w-80 mx-auto space-y-2">
          <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
            <div 
              ref={progressBarRef} 
              className="progress-bar h-full rounded-full"
            />
          </div>
          <p className="text-sm text-foreground/50">Loading...</p>
        </div>
      </div>
      
      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neon-blue rounded-full floating glow-primary opacity-60" />
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-neon-cyan rounded-full floating-delayed glow-accent opacity-40" />
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-neon-purple rounded-full floating opacity-80" />
      </div>
    </div>
  );
};

export default Preloader;