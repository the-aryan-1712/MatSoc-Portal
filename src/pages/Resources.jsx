import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, FileArchive } from 'lucide-react';
import { resources } from '../data/resources';

export default function Resources() {
  const getFileIcon = (type) => {
    switch (type) {
      case 'PDF': return <FileText className="w-8 h-8 text-red-400" />;
      case 'PPTX': return <FileArchive className="w-8 h-8 text-orange-400" />;
      default: return <FileText className="w-8 h-8 text-primary" />;
    }
  };

  const getDownloadLink = (url) => {
    if (!url || url === '#') return '#';

    // Handle standard Google Drive file links
    const driveMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)\//);
    if (driveMatch && driveMatch[1]) {
      return `https://drive.google.com/uc?export=download&id=${driveMatch[1]}`;
    }

    // Handle Google Docs/Slides links
    const docsMatch = url.match(/\/presentation\/d\/([a-zA-Z0-9_-]+)\//);
    if (docsMatch && docsMatch[1]) {
      return `https://docs.google.com/presentation/d/${docsMatch[1]}/export/pptx`;
    }

    return url;
  };

  return (
    <section id="resources" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-4">
            Academic Resources
          </h2>
          <p className="max-w-xl mx-auto text-lg text-foreground/70">
            Access study materials, past presentations, and important research papers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-6 rounded-2xl flex flex-col h-full border border-white/5"
            >
              <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-4">{category.category}</h3>
              <ul className="space-y-4 flex-1">
                {category.items.map((item, i) => (
                  <li key={i} className="group relative">
                    <a href={getDownloadLink(item.link)} download target="_blank" rel="noopener noreferrer" className="flex items-center p-3 rounded-xl bg-foreground/5 hover:bg-primary/10 transition-colors border border-transparent hover:border-primary/20">
                      <div className="mr-4 group-hover:scale-110 transition-transform">
                        {getFileIcon(item.type)}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">{item.title}</h4>
                        <span className="text-xs text-foreground/50">{item.type} • {item.size}</span>
                      </div>
                      <Download className="w-5 h-5 text-foreground/30 group-hover:text-primary transition-colors" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
