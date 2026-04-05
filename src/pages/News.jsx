import React from "react";
import { motion } from "framer-motion";
import { Bell, Award, Users } from "lucide-react";
import { news } from "../data/news";

export default function News() {
  const getIcon = (tag) => {
    switch (tag.toLowerCase()) {
      case "achievement":
        return <Award className="w-5 h-5 text-accent" />;
      case "collaboration":
        return <Users className="w-5 h-5 text-orange-500" />;
      default:
        return <Bell className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <section id="news" className="py-24 relative bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-4">
            Recent Updates
          </h2>
          <p className="text-lg text-foreground/70">
            Latest news, announcements, and achievements from MatSoc.
          </p>
        </motion.div>

        <div className="relative border-l-2 border-primary/20 ml-3 md:ml-1/2 md:-translate-x-1/2 space-y-12">
          {news.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`relative flex items-center ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] md:left-1/2 md:-ml-[9px] w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg z-10"></div>

              <div
                className={`pl-8 md:pl-0 md:w-1/2 ${idx % 2 === 0 ? "md:pl-12" : "md:pr-12"} w-full`}
              >
                <div className="glass p-6 rounded-2xl relative group hover:-translate-y-1 transition-transform duration-300">
                  <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-100 transition-opacity group-hover:scale-110 duration-300">
                    {getIcon(item.tag)}
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full bg-foreground/5 text-xs font-semibold text-primary mb-3">
                    {item.date}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
