import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-background pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 mb-12">
          {/* Brand */}
          <div className="md:flex-1">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4 inline-block">
              MatSoc
            </span>
            <p className="text-foreground/60 text-sm leading-relaxed mb-6 pr-4">
              Exploring Materials. Innovating the Future. Building the next
              generation of materials scientists and engineers.
            </p>
            <div className="flex space-x-4 pr-1">
              <a
                href="https://www.linkedin.com/company/matsoc-iitk/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary hover:bg-accent hover:text-white transition-all duration-300 text-foreground/70"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="https://www.instagram.com/matsoc_iitk/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary hover:bg-pink-500 hover:text-white transition-all duration-300 text-foreground/70"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:flex-1">
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/#about"
                  className="text-foreground/60 hover:text-primary transition-colors text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-foreground/60 hover:text-primary transition-colors text-sm"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-foreground/60 hover:text-primary transition-colors text-sm"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="text-foreground/60 hover:text-primary transition-colors text-sm"
                >
                  Our Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="md:flex-1">
            <h4 className="text-lg font-bold mb-6">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/resources"
                  className="text-foreground/60 hover:text-primary transition-colors text-sm"
                >
                  Study Material
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="text-foreground/60 hover:text-primary transition-colors text-sm"
                >
                  News & Updates
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/60 hover:text-primary transition-colors text-sm"
                >
                  Alumni Network
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/40 text-xs mb-4 md:mb-0">
            &copy; {currentYear} MatSoc (Materials Society). All rights
            reserved.
          </p>
          <div className="flex space-x-6 text-xs text-foreground/40">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
