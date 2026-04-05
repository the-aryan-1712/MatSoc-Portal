import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { team } from "../data/team";

export default function Team() {
  return (
    <section id="team" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-4">
            Meet the Team 2025-26
          </h2>
        </motion.div>

        <div className="space-y-24">
          {team.map((group, groupIdx) => (
            <div key={groupIdx}>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-bold mb-8 flex items-center"
              >
                <span className="w-8 h-1 bg-primary rounded-full mr-4 hidden sm:block"></span>
                {group.category}
              </motion.h3>

              <div
                className={
                  group.category === "Secretaries"
                    ? "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
                    : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                }
              >
                {group.members.map((member, idx) =>
                  group.category === "Secretaries" ? (
                    <motion.div
                      key={member.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="glass rounded-xl py-4 px-2 text-center hover:shadow-md hover:shadow-primary/5 transition-all duration-300 flex flex-col justify-center"
                    >
                      <h4 className="font-bold text-base md:text-lg text-foreground">
                        {member.name}
                      </h4>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={member.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="glass rounded-2xl overflow-hidden group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
                    >
                      <div className="relative overflow-hidden h-64">
                        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:opacity-0 transition-opacity z-10"></div>
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 z-20 flex justify-end">
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white/10 hover:bg-primary rounded-full text-white backdrop-blur-sm transition-colors"
                          >
                            <FaLinkedin size={20} />
                          </a>
                        </div>
                      </div>
                      <div className="p-5 text-center">
                        <h4 className="text-lg font-bold mb-1">
                          {member.name}
                        </h4>
                        <p className="text-sm text-primary font-medium">
                          {member.role}
                        </p>
                      </div>
                    </motion.div>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
