import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, GithubLogo as Github } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: "Code Tracker Website",
      description: "A full-stack app built with React, Node.js, Supabase, and PostgreSQL to track, manage, and analyze coding progress.",
  image: "/image-uploads/079c4316-da8e-4968-afac-8d8fee78fe7b.png",
  tech: ["React", "Node.Js","Supabase","PostgreSQL"],
      link: "#"
    },
    {
      id: 2,
      title: "Interactive 3D Portfolio",
      description: "Experience a modern portfolio powered by Spline visuals and GSAP animations.",
  image: "/image-uploads/12854ff7-a86e-4aec-9855-fdd601846eec.png",
      tech: ["React", "Tailwind", "GSAP","spline"],
      link: "#"
    },
    {
      id: 3,
      title: "Animation Tools Site",
      description: "Modern web animation tools showcase with dynamic interactions",
  image: "/image-uploads/b98a553a-abb0-4034-a225-ecf69a50da44.png",
      tech: ["React.js","Bootstrap", "Framer Motion"],
      link: "#"
    },
    {
      id: 4,
      title: " 🌀 3D Image Rotator",
      description: "Spin and explore images in a smooth, interactive 3D view.",
  image: "/image-uploads/0913c064-058a-47b0-93ee-7cb206cee389.png",
      tech: ["HTML", "CSS", "Js"],
      link: "#"
    },
    {
      id: 5,
      title: "🌐  Text Converter",
      description: "An immersive web tool that combines interactive visuals with powerful text transformation features, making text editing both engaging and futuristic.",
  image: "/image-uploads/fff94e05-c95e-4672-a363-7ad6885d2d88.png",
      tech: ["Three.js", "WebGL", "React"],
      link: "#"
    },
    {
      id: 6,
      title: "Gaming UI 🎲 Dice Roller",
      description: "Next-level gaming interface with real-time data visualization",
  image: "/image-uploads/07443b2d-74d6-4b56-ad09-ee4f28ac5f5b.png",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "#"
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

      // Project cards animation
      gsap.fromTo('.project-card',
        {
          opacity: 0,
          y: 100,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <h2 
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Featured{' '}
          <span className="gradient-text-primary">Projects</span>
        </h2>

        <div 
          ref={containerRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card group glass rounded-2xl overflow-hidden hover:glow-primary transition-all duration-500 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="p-2 glass rounded-lg hover:glow-accent transition-all duration-300">
                    <Github size={16} />
                  </button>
                  <button className="p-2 glass rounded-lg hover:glow-accent transition-all duration-300">
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;