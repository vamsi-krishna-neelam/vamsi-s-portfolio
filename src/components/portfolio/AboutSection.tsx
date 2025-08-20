import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FileHtml, 
  FileCss, 
  FileJs, 
  Globe, 
  Palette,
  Code
} from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [
    { icon: FileHtml, name: 'HTML5', color: 'text-orange-500' },
    { icon: FileCss, name: 'CSS3', color: 'text-blue-500' },
    { icon: FileJs, name: 'JavaScript', color: 'text-yellow-500' },
    { icon: Globe, name: 'React', color: 'text-cyan-500' },
    { icon: Palette, name: 'GSAP', color: 'text-green-500' },
    { icon: Code, name: 'TypeScript', color: 'text-blue-600' }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Initial state
      gsap.set([imageRef.current, contentRef.current], {
        opacity: 0,
        y: 50,
        filter: "blur(10px)"
      });

      gsap.set('.skill-icon', {
        opacity: 0,
        scale: 0,
        rotation: -180
      });

      // Animate in
      tl.to(imageRef.current, {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        duration: 1,
        ease: "power2.out"
      })
      .to(contentRef.current, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        ease: "power2.out"
      }, "-=0.5")
      .to('.skill-icon', {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)"
      }, "-=0.3");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Profile Image (moved slightly down) */}
          <div ref={imageRef} className="relative group mt-10 md:mt-120 lg:mt-160">
            <div className="relative w-1100 h-1100 md:w-900 md:h-900 lg:w-96 lg:h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full glow-primary blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-5" />
              <div className="relative w-full h-full rounded-full overflow-hidden glass border-2 border-primary/30 group-hover:scale-105 transition-transform duration-5">
                  <img 
                    src="/vamsi's.jpg"
                    alt="Vamsi Krishna"
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
              </div>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About{' '}
                <span className="gradient-text-accent">Me</span>
              </h2>
              <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
                <p>
                  I'm a passionate web developer with a keen eye for creating 
                  immersive digital experiences. Specializing in modern 
                  technologies and animation frameworks.
                </p>
                <p>
                  My expertise lies in crafting responsive, performant websites 
                  that not only look stunning but also provide exceptional 
                  user experiences through thoughtful interaction design.
                </p>
                <p>
                  I love pushing the boundaries of what's possible on the web, 
                  combining creativity with technical excellence to bring 
                  ideas to life.
                </p>
              </div>
            </div>

            {/* Skills Grid */}
            <div ref={skillsRef}>
              <h3 className="text-2xl font-semibold mb-6 text-foreground/90">
                Tech Stack
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="skill-icon glass p-4 rounded-xl hover:glow-accent transition-all duration-300 group cursor-pointer"
                  >
                    <div className="text-center space-y-2">
                      <skill.icon 
                        size={32} 
                        className={`mx-auto ${skill.color} group-hover:scale-110 transition-transform duration-300`}
                      />
                      <p className="text-sm font-medium text-foreground/80">
                        {skill.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;