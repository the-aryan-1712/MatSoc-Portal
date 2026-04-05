import React from "react";
import { motion } from "framer-motion";
import { Microscope, Globe, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-4">
            About MatSoc
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-foreground/70">
            MatSoc is a student-led body within the Department of Materials
            Science and Engineering (MSE). We provide a platform for students to
            learn, network, and grow by focusing on student-centric professional
            and personal welfare.
          </p>
        </motion.div>

        <div
          className="rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-2 border border-white/5"
        >
          {/* Row 1 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-primary/90 backdrop-blur-md text-white p-12 md:p-16 flex flex-col justify-center order-1 relative overflow-hidden group cursor-default"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full filter blur-[40px] group-hover:bg-white/20 group-hover:scale-150 transition-all duration-700"></div>
            <h3 className="text-3xl lg:text-4xl font-extrabold uppercase tracking-wider mb-6 relative z-10 group-hover:translate-x-2 transition-transform duration-500">Our Mission</h3>
            <p className="text-white/90 leading-relaxed text-lg relative z-10">
              We desire to build a stronger sense of community and engagement within the department through various events and initiatives, as well as assisting students in academic planning.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="glass p-12 flex items-center justify-center min-h-[300px] order-2 border-b md:border-b-0 border-white/5 relative group cursor-pointer overflow-hidden"
          >
            <Globe className="w-40 h-40 text-primary opacity-70 group-hover:opacity-100 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700" strokeWidth={1} />
          </motion.div>

          {/* Row 2 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="bg-accent/90 backdrop-blur-md text-white p-12 md:p-16 flex flex-col justify-center order-3 md:order-4 z-10 relative overflow-hidden group cursor-default"
          >
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full filter blur-[40px] group-hover:bg-white/20 group-hover:scale-150 transition-all duration-700"></div>
            <h3 className="text-3xl lg:text-4xl font-extrabold uppercase tracking-wider mb-6 relative z-10 group-hover:translate-x-2 transition-transform duration-500">Our Vision</h3>
            <p className="text-white/90 leading-relaxed text-lg relative z-10">
              We aim to foster interdisciplinary learning through initiatives like Winter Projects and Guidance sessions, ensuring the overall growth of students, preparing them for excellence in academia and industry.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="glass p-12 flex items-center justify-center min-h-[300px] order-4 md:order-3 border-b md:border-b-0 border-white/5 relative group cursor-pointer overflow-hidden"
          >
            <Lightbulb className="w-40 h-40 text-accent opacity-70 group-hover:opacity-100 group-hover:scale-125 group-hover:-rotate-12 transition-all duration-700" strokeWidth={1} />
          </motion.div>

          {/* Row 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="bg-gradient-to-br from-primary/80 to-accent/80 backdrop-blur-md text-white p-12 md:p-16 flex flex-col justify-center order-5 z-10 relative overflow-hidden group cursor-default"
          >
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full filter blur-[40px] group-hover:bg-white/20 group-hover:scale-150 transition-all duration-700"></div>
            <h3 className="text-3xl lg:text-4xl font-extrabold uppercase tracking-wider mb-6 relative z-10 group-hover:translate-x-2 transition-transform duration-500">Why Materials?</h3>
            <p className="text-white/90 leading-relaxed text-lg relative z-10">
              Materials Science is an interdisciplinary field with vast potential to drive technological advancements. From computational modeling to metal additive manufacturing, breakthroughs in materials are at the core of every modern technological leap.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            className="glass p-12 flex items-center justify-center min-h-[300px] order-6 relative group cursor-pointer overflow-hidden"
          >
            <Microscope className="w-40 h-40 text-orange-400 opacity-70 group-hover:opacity-100 group-hover:scale-125 group-hover:rotate-6 transition-all duration-700" strokeWidth={1} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
