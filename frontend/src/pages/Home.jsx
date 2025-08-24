import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import profilePic from '../assets/your-photo.png';

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [typedText, setTypedText] = useState('');

  const fullText = "A final year student at Delhi Technological University, CS branch, passionate about building impactful digital experiences.";

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showWelcome) {
      let index = 0;
      const typing = setInterval(() => {
        setTypedText(fullText.slice(0, index));
        index++;
        if (index > fullText.length) clearInterval(typing);
      }, 50);
      return () => clearInterval(typing);
    }
  }, [showWelcome]);

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden font-sans">
      {/* WELCOME overlay */}
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: '-100%' }}
            exit={{ y: '-100%' }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="fixed inset-0 bg-black flex items-center justify-center z-50"
          >
            <h1 className="text-white text-6xl md:text-8xl font-bold">WELCOME</h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navbar */}
      <header className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-6 z-40 backdrop-blur-md">
          <Link
            to="/"
            className="inline-block transition transform hover:scale-105"
          >
            <img
              src={logo} // ✅ make sure to import your logo at the top: import logo from '../assets/logo.png';
              alt="Ayush Grover Logo"
              className="w-14 md:w-20 h-20 filter invert-0 saturate-200 hue-rotate-[90deg] hover:brightness-125 transition"
            />
          </Link>

          <nav className="flex space-x-6 text-lg md:text-xl font-serif">
            {['/', '/about', '/projects', '/contact'].map((path, idx) => {
              const label = path === '/' ? 'Home' : path.replace('/', '').replace(/^\w/, c => c.toUpperCase());
              return (
                <Link
                  key={idx}
                  to={path}
                  className="relative inline-block text-white text-2xl hover:text-green-400 transition duration-300 after:content-[''] after:block after:w-0 after:h-[2px] after:bg-green-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </header>

      {/* Hero section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-8 md:px-20 pt-32">
        {/* Hero text */}
        <div className="flex-1 z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1 border border-white rounded-full mb-4 text-xl italic">
            Hello! I'm
          </span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 6, delay: 0.5 }}
            className="text-[60px] md:text-[160px] font-extrabold leading-none mb-4"
          >
            <h1>Ayush </h1>
            <h1 className="md:text-[200px]">Grover</h1>
          </motion.h1>

          <p className="max-w-lg text-gray-300 mb-8 text-lg md:text-xl">
            {typedText}
            <span className="animate-pulse">|</span>
          </p>

          <Link
            to="/contact"
            className="inline-block bg-green-500 text-black px-6 py-3 rounded-full text-lg hover:bg-green-400 transition"
          >
            Let's Connect
          </Link>
        </div>

        {/* Hero image with float animation */}
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
          className="absolute bottom-0 top-30 right-50 w-[250px] md:w-[400px]"
        >
          <img
            src={profilePic}
            alt="Profile"
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </section>
    </main>
  );
}