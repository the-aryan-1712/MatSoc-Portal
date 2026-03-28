import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, X, ArrowRight } from 'lucide-react';
import { events } from '../data/events';

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Stop body scroll when modal is open
  React.useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedEvent]);

  return (
    <section id="events" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-end mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-4">
              Featured Events
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl">
              Join us for our upcoming workshops, symposiums, and networking sessions.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass rounded-2xl overflow-hidden flex flex-col group cursor-pointer border border-white/10 hover:border-primary/50 transition-colors"
              onClick={() => setSelectedEvent(event)}
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:opacity-0 transition-opacity z-10"></div>
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center text-primary text-sm font-medium mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{event.title}</h3>
                <p className="text-foreground/70 mb-4 flex-1">{event.description.substring(0, 100)}...</p>
                <button className="text-accent hover:text-primary font-medium flex items-center transition-colors mt-auto">
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="glass bg-background/95 max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-3xl overflow-hidden shadow-2xl relative"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
              >
                <X size={20} />
              </button>
              <div className="h-64 sm:h-80 relative">
                <img src={selectedEvent.image} alt={selectedEvent.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
              </div>
              <div className="p-8 -mt-20 relative z-10">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4 backdrop-blur-md border border-primary/20">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(selectedEvent.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">{selectedEvent.title}</h2>
                <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                  {selectedEvent.description}
                </p>
                
                <h4 className="text-xl font-bold mb-4 flex items-center">
                  Key Highlights
                </h4>
                <ul className="space-y-3 mb-8">
                  {selectedEvent.highlights.map((hlt, i) => (
                    <li key={i} className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent mt-0.5 mr-3">
                        <span className="w-2 h-2 rounded-full bg-accent"></span>
                      </div>
                      <span className="text-foreground/80">{hlt}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-white/10">
                  <a href={selectedEvent.link} className="flex-1 text-center py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-hover shadow-lg hover:shadow-primary/30 transition-all">
                    Register Now
                  </a>
                  <a href="#" className="flex-1 text-center py-3 glass rounded-xl font-medium hover:bg-white/5 transition-all">
                    Add to Calendar
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
