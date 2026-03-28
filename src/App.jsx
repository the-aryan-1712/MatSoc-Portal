import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Team from './pages/Team';
import News from './pages/News';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Footer from './components/Footer';

// Helper to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Home page merges Hero and About sections
function Home() {
  return (
    <>
      <Hero />
      <About />
    </>
  );
}

// Wrapper for subpages to avoid overlap with sticky navbar
function PageWrapper({ children }) {
  return (
    <div className="pt-24 pb-12 min-h-[70vh]">
      {children}
    </div>
  );
}

// The core routing mechanism
function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}><Home /></motion.div>} />
        <Route path="/events" element={
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-20}}>
            <PageWrapper><Events /></PageWrapper>
          </motion.div>
        } />
        <Route path="/gallery" element={
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-20}}>
            <PageWrapper><Gallery /></PageWrapper>
          </motion.div>
        } />
        <Route path="/team" element={
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-20}}>
            <PageWrapper><Team /></PageWrapper>
          </motion.div>
        } />
        <Route path="/news" element={
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-20}}>
            <PageWrapper><News /></PageWrapper>
          </motion.div>
        } />
        <Route path="/resources" element={
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-20}}>
            <PageWrapper><Resources /></PageWrapper>
          </motion.div>
        } />
        <Route path="/contact" element={
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-20}}>
            <PageWrapper><Contact /></PageWrapper>
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Splash screen timer
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="relative font-sans text-foreground bg-background antialiased selection:bg-primary/30 overflow-x-hidden min-h-screen flex flex-col">
        <AnimatePresence>
          {loading && (
            <motion.div
              key="loader"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative flex justify-center items-center mb-10"
              >
                <img 
                  src="/matsoc-logo-clean.png" 
                  alt="MatSoc Logo" 
                  className="h-16 md:h-24 w-auto object-contain transition-opacity duration-300 dark:opacity-100 opacity-0" 
                />
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-primary via-orange-500 to-accent dark:opacity-0 transition-opacity duration-300"
                  style={{
                    WebkitMaskImage: `url('/matsoc-logo-clean.png')`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskImage: `url('/matsoc-logo-clean.png')`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center'
                  }}
                />
              </motion.div>
              <div className="w-48 h-1 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  className="w-1/2 h-full bg-primary rounded-full"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <Navbar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
