import React from 'react';
import { FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-background pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4 inline-block">
              MatSoc
            </span>
            <p className="text-foreground/60 text-sm leading-relaxed mb-6">
              Exploring Materials. Innovating the Future. Building the next generation of materials scientists and engineers.
            </p>
            <div className="flex space-x-4 pr-1">
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary hover:bg-primary hover:text-white transition-all duration-300 text-foreground/70">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary hover:bg-accent hover:text-white transition-all duration-300 text-foreground/70">
                <FaLinkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary hover:bg-pink-500 hover:text-white transition-all duration-300 text-foreground/70">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary hover:bg-foreground hover:text-background transition-all duration-300 text-foreground/70">
                <FaGithub size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-foreground/60 hover:text-primary transition-colors text-sm">About Us</a></li>
              <li><a href="#events" className="text-foreground/60 hover:text-primary transition-colors text-sm">Events</a></li>
              <li><a href="#gallery" className="text-foreground/60 hover:text-primary transition-colors text-sm">Gallery</a></li>
              <li><a href="#team" className="text-foreground/60 hover:text-primary transition-colors text-sm">Our Team</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-6">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#resources" className="text-foreground/60 hover:text-primary transition-colors text-sm">Study Material</a></li>
              <li><a href="#news" className="text-foreground/60 hover:text-primary transition-colors text-sm">News & Updates</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">Alumni Network</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">Careers</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-foreground/60 text-sm mb-4">
              Subscribe to our newsletter to get the latest updates on events and opportunities.
            </p>
            <form className="flex flex-col space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 rounded-xl bg-secondary/50 border border-white/10 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                required
              />
              <button 
                type="submit" 
                className="px-4 py-3 rounded-xl bg-primary text-white font-medium text-sm hover:bg-primary-hover shadow-lg hover:shadow-primary/30 transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/40 text-xs mb-4 md:mb-0">
            &copy; {currentYear} MatSoc (Materials Society). All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-foreground/40">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
