import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about', isScroll: true },
  { 
    name: 'Activities', 
    dropdown: [
      {
        title: 'Discover',
        links: [
          { name: 'Upcoming Events', href: '/events' },
          { name: 'Gallery Archive', href: '/gallery' }
        ]
      },
      {
        title: 'Get Involved',
        links: [
          { name: 'Volunteer', href: '/contact' },
          { name: 'Propose Event', href: '/contact' }
        ]
      }
    ]
  },
  { 
    name: 'Community', 
    dropdown: [
      {
        title: 'People',
        links: [
          { name: 'Our Team', href: '/team' },
          { name: 'Faculty Advisors', href: '/team' }
        ]
      },
      {
        title: 'Updates',
        links: [
          { name: 'Latest News', href: '/news' },
          { name: 'Achievements', href: '/news' }
        ]
      }
    ]
  },
  { name: 'Resources', href: '/resources' },
  { name: 'Contact', href: '/contact' },
];

const NavDropdown = ({ item, isOpen, onMouseEnter, onMouseLeave }) => {
  return (
    <div 
      className="relative group h-full flex items-center"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button className="flex items-center text-foreground/80 hover:text-primary transition-colors font-semibold text-[15px] outline-none py-2 cursor-pointer">
        {item.name}
        <ChevronDown className={`ml-1.5 w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute top-full left-1/2 transform -translate-x-1/2 pt-6 z-[110] w-[420px]"
          >
            {/* The actual dropdown box with primary theme color */}
            <div className="bg-primary rounded-[24px] p-8 shadow-2xl flex gap-10 relative overflow-hidden text-white border border-white/10">
              {/* Subtle glass effect glow inside */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full filter blur-3xl pointer-events-none"></div>
              
              {item.dropdown.map((col, idx) => (
                <div key={idx} className="flex-1 relative z-10">
                  <h4 className="text-white/70 font-bold text-xs uppercase tracking-wider mb-5">
                    {col.title}
                  </h4>
                  <ul className="space-y-4">
                    {col.links.map((link, lidx) => (
                      <li key={lidx}>
                        <Link 
                          to={link.href} 
                          className="text-white hover:text-white/80 font-medium transition-colors block text-[15px]"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {(activeDropdown !== null || mobileMenuOpen) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-background/60 backdrop-blur-md z-[90]"
            onClick={() => {
              setActiveDropdown(null);
              setMobileMenuOpen(false);
            }}
          />
        )}
      </AnimatePresence>

      <nav className={`fixed w-full z-[100] transition-all duration-300 ${(scrolled || mobileMenuOpen) ? 'glass py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="relative flex items-center cursor-pointer z-[110] transform hover:scale-105 transition-transform">
              <img 
                src="/matsoc-logo-clean.png" 
                alt="MatSoc Logo" 
                className="h-10 md:h-12 w-auto object-contain transition-opacity duration-300 dark:opacity-100 opacity-0" 
              />
              <div 
                className="absolute inset-0 bg-gradient-to-r from-primary via-orange-500 to-accent dark:opacity-0 transition-opacity duration-300"
                style={{
                  WebkitMaskImage: `url('/matsoc-logo-clean.png')`,
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'left center',
                  maskImage: `url('/matsoc-logo-clean.png')`,
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'left center'
                }}
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 h-full z-[110]">
              {navItems.map((item, idx) => {
                if (item.dropdown) {
                  return (
                    <NavDropdown 
                      key={idx} 
                      item={item} 
                      isOpen={activeDropdown === idx}
                      onMouseEnter={() => setActiveDropdown(idx)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    />
                  );
                }
                return item.isScroll ? (
                  <a
                    key={idx}
                    href={item.href}
                    className="text-foreground/80 hover:text-primary transition-colors font-semibold text-[15px]"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={idx}
                    to={item.href}
                    className="text-foreground/80 hover:text-primary transition-colors font-semibold text-[15px]"
                  >
                    {item.name}
                  </Link>
                );
              })}
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4 z-[110]">
              <ThemeToggle />
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-foreground">
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu (simplified for space) */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass border-t border-white/10 relative z-[110]"
            >
              <div className="px-4 py-4 space-y-4 flex flex-col">
                {navItems.map((item, idx) => (
                   item.dropdown ? (
                     <div key={idx} className="py-2 border-b border-white/5 last:border-0">
                       <span className="text-foreground/50 font-bold uppercase text-xs mb-3 block">{item.name}</span>
                       <div className="pl-4 space-y-3">
                         {item.dropdown.flatMap(col => col.links).map((link, lidx) => (
                           <Link key={lidx} to={link.href} className="block text-foreground/80 hover:text-primary font-medium text-[15px]">
                             {link.name}
                           </Link>
                         ))}
                       </div>
                     </div>
                   ) : (
                     item.isScroll ? (
                       <a key={idx} href={item.href} className="block text-foreground/80 hover:text-primary transition-colors font-medium py-2 border-b border-white/5 last:border-0 text-[15px]">
                         {item.name}
                       </a>
                     ) : (
                       <Link key={idx} to={item.href} className="block text-foreground/80 hover:text-primary transition-colors font-medium py-2 border-b border-white/5 last:border-0 text-[15px]">
                         {item.name}
                       </Link>
                     )
                   )
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
