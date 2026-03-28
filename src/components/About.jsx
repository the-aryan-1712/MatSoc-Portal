import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Globe, Lightbulb } from 'lucide-react';

export default function About() {
  const cards = [
    {
      title: 'Our Mission',
      description: 'To cultivate a vibrant community of materials enthusiasts and bridge the gap between academia and industry.',
      icon: <Globe className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Our Vision',
      description: 'To be the premier university society for materials science innovation, research, and collaborative excellence.',
      icon: <Lightbulb className="w-8 h-8 text-accent" />,
    },
    {
      title: 'Why Materials?',
      description: 'Every technological leap—from smartphones to space exploration—starts with a breakthrough in materials science.',
      icon: <Microscope className="w-8 h-8 text-orange-500" />,
    },
  ];

  return (
    <section id="about" className="py-24 relative bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-4">
            About MatSoc
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-foreground/70">
            Founded with the goal of exploring the building blocks of the future, MatSoc provides a platform for students to learn, network, and grow in the field of Materials Science.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full filter blur-[40px] group-hover:bg-primary/20 transition-all duration-500"></div>
              <div className="mb-6 inline-flex p-3 rounded-xl bg-white/5 border border-white/10 shadow-sm">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{card.title}</h3>
              <p className="text-foreground/70 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
