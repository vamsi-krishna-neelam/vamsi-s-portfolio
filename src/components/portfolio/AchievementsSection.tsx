import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Trophy, 
  Scroll as Certificate, 
  Code, 
  Users, 
  Star,
  Target
} from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const AchievementsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const achievements = [
    {
      icon: Certificate,
      title: "Google AI/ML Certified",
      description: "Certified AI/ML Developer Intern",
      color: "neon-blue",
      glow: "glow-primary"
    },
    {
      icon: Code,
      title: "220+ LeetCode Problems",
      description: "Solved complex algorithms",
      color: "neon-cyan",
      glow: "glow-accent"
    },
    {
      icon: Certificate,
      title: "Oracle Certified Foundations Associate",
      description: "Certificate of Recognition: This certifies that the above named is recognized by Oracle Corporation as Oracle Certified.",
      color: "neon-blue",
      glow: "glow-primary"
    },
    {
      icon: Users,
      title: "Cloud Computing NPTEL Certified",
      description: "NPTEL",
      color: "neon-purple",
      glow: "glow-secondary"
    },
    {
      icon: Trophy,
      title: "3 Hackathon participated",
      // description: "Multiple competition victories",
      color: "neon-pink",
      glow: "glow-primary"
    },
    // {
    //   icon: Star,
    //   title: "5-Star Rated",
    //   description: "Client satisfaction record",
    //   color: "neon-cyan",
    //   glow: "glow-accent"
    // },
    {
      icon: Target,
      title: "Project Success",
      description: "100% on-time delivery",
      color: "neon-blue",
      glow: "glow-primary"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current,
        {
          opacity: 0,
          y: 50,
          filter: "blur(10px)"
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Achievement cards animation
      gsap.fromTo('.achievement-card',
        {
          opacity: 0,
          y: 80,
          scale: 0.8,
          rotation: -5
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Counter animation for numbers
      const counters = document.querySelectorAll('.counter');
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute('data-target') || '0');
        gsap.fromTo(counter,
          { textContent: 0 },
          {
            textContent: target,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: counter,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="achievements" ref={sectionRef} className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <h2 
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          My{' '}
          <span className="gradient-text-accent">Achievements</span>
        </h2>

        <div 
          ref={gridRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`achievement-card group glass rounded-2xl p-6 hover:${achievement.glow} transition-all duration-500 hover:scale-105 cursor-pointer`}
            >
              <div className="text-center space-y-4">
                <div className={`inline-flex p-4 rounded-full bg-${achievement.color}/10 border border-${achievement.color}/20 group-hover:bg-${achievement.color}/20 transition-colors duration-300`}>
                  <achievement.icon 
                    size={32} 
                    className={`text-${achievement.color} group-hover:scale-110 transition-transform duration-300`}
                  />
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {achievement.title.includes('220+') ? (
                      <>
                        <span className="counter" data-target="220">0</span>
                        + LeetCode Problems
                      </>
                    ) : achievement.title.includes('100%') ? (
                      <>
                        <span className="counter" data-target="100">0</span>
                        % Success Rate
                      </>
                    ) : achievement.title}
                  </h3>
                  <p className="text-foreground/70 text-sm">
                    {achievement.description}
                  </p>
                </div>
                
                <div className={`h-1 w-full bg-gradient-to-r from-${achievement.color}/20 to-${achievement.color}/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        {/* <div className="grid md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border/20">
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold gradient-text-primary">
              <span className="counter" data-target="50">0</span>+
            </div>
            <p className="text-foreground/70">Projects Completed</p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold gradient-text-accent">
              <span className="counter" data-target="30">0</span>+
            </div>
            <p className="text-foreground/70">Happy Clients</p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold gradient-text-primary">
              <span className="counter" data-target="3">0</span>+
            </div>
            <p className="text-foreground/70">Years Experience</p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold gradient-text-accent">
              <span className="counter" data-target="15">0</span>+
            </div>
            <p className="text-foreground/70">Technologies</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AchievementsSection;