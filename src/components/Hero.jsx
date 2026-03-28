import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Atom, Hexagon, FlaskConical, Microscope } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24 pb-12">
      {/* Discord-like subtle animated background elements instead of massive blurs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div animate={{y: [0,-15,0], rotate: 360}} transition={{y: {duration: 6, repeat: Infinity, ease: "easeInOut"}, rotate: {duration: 30, repeat: Infinity, ease: "linear"}}} className="absolute top-[18%] left-[10%] text-primary/20">
           <Atom size={64} />
        </motion.div>
        <motion.div animate={{y: [0,-20,0], rotate: [0, 60, 0]}} transition={{duration:8, repeat:Infinity, ease:"easeInOut", delay:1}} className="absolute top-[25%] right-[15%] text-accent/20">
           <Hexagon size={56} />
        </motion.div>
        <motion.div animate={{y: [0,-10,0], rotate: [-15, 15, -15]}} transition={{duration:7, repeat:Infinity, ease:"easeInOut"}} className="absolute bottom-[20%] left-[20%] text-orange-400/20">
           <FlaskConical size={48} />
        </motion.div>
        <motion.div animate={{y: [0,-15,0]}} transition={{duration:6.5, repeat:Infinity, ease:"easeInOut", delay:1.5}} className="absolute bottom-[35%] right-[10%] text-primary/20">
           <Microscope size={56} />
        </motion.div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 mt-4"
        >
          Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Materials.</span><br />
          Innovate the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-primary">Future.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto"
        >
          The official Materials Society (MatSoc) dedicated to fostering a community of passionate individuals exploring the endless possibilities of materials science.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#events"
            onClick={(e) => scrollToSection(e, '#events')}
            className="inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primary-hover shadow-[0_0_20px_rgba(200,90,50,0.4)] transition-all duration-300"
          >
            Explore Events
            <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
          </a>
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, '#about')}
            className="inline-flex justify-center items-center px-8 py-3.5 border border-white/20 text-base font-medium rounded-full text-foreground bg-secondary/50 hover:bg-secondary transition-all glass hover:shadow-lg"
          >
            Mission & Vision
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="text-foreground/50 hover:text-primary transition-colors block">
            <ChevronDown size={32} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
