import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  PaperPlaneTilt, 
  GithubLogo, 
  LinkedinLogo, 
  TwitterLogo 
} from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Form fields animation
      gsap.fromTo('.form-field',
        {
          opacity: 0,
          x: -50,
          filter: "blur(10px)"
        },
        {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Social icons animation
      gsap.fromTo('.social-icon',
        {
          opacity: 0,
          scale: 0,
          rotation: -180
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: '.social-icons',
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Submit button animation
    const submitBtn = document.querySelector('.submit-btn');
    gsap.to(submitBtn, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut"
    });

    // Here you would typically handle form submission
    console.log('Form submitted:', formData);
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's{' '}
              <span className="gradient-text-primary">Connect</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Drop me a message and let's 
              create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="form-field">
                <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:glow-primary transition-all duration-300 bg-transparent text-foreground placeholder-foreground/50"
                  placeholder="Your name"
                />
              </div>

              <div className="form-field">
                <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:glow-primary transition-all duration-300 bg-transparent text-foreground placeholder-foreground/50"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-field">
                <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 glass rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:glow-primary transition-all duration-300 bg-transparent text-foreground placeholder-foreground/50 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="submit-btn w-full glass-strong px-8 py-4 rounded-xl font-semibold text-lg hover:glow-primary transition-all duration-300 flex items-center justify-center space-x-3 group"
              >
                <span>Send Message</span>
                <PaperPlaneTilt 
                  size={20} 
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" 
                />
              </button>
            </form>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="glass p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-6 gradient-text-accent">
                  Get in Touch
                </h3>
                <div className="space-y-4 text-foreground/80">
                  <p className="leading-relaxed">
                    I'm always excited to work on new projects and collaborate 
                    with creative minds. Whether you have a specific project in 
                    mind or just want to explore possibilities, I'd love to hear from you.
                  </p>
                  <p className="leading-relaxed">
                    Let's discuss how we can bring your vision to life with 
                    cutting-edge web technologies and stunning animations.
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="social-icons flex justify-center space-x-6">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon p-4 glass rounded-xl hover:glow-primary transition-all duration-300 group"
                >
                  <GithubLogo 
                    size={24} 
                    className="group-hover:scale-110 transition-transform duration-300" 
                  />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon p-4 glass rounded-xl hover:glow-accent transition-all duration-300 group"
                >
                  <LinkedinLogo 
                    size={24} 
                    className="group-hover:scale-110 transition-transform duration-300" 
                  />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon p-4 glass rounded-xl hover:glow-secondary transition-all duration-300 group"
                >
                  <TwitterLogo 
                    size={24} 
                    className="group-hover:scale-110 transition-transform duration-300" 
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;