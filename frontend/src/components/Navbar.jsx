import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 h-full w-20 md:w-24 bg-black/90 text-white flex flex-col items-center justify-between py-8 z-50">
      {/* Logo with green tint */}
      <div className="mb-4">
        <Link to="/" className="block transition duration-300 hover:scale-105">
          <img
            src={logo}
            alt="Logo"
            className="w-20 h-20 filter invert-0 saturate-200 hue-rotate-[90deg] transition duration-300 hover:hue-rotate-[60deg] hover:brightness-125"
          />
        </Link>
      </div>

      {/* Name vertical */}
      <div className="flex-1 flex items-center">
        <h1 className="text-2xl text-serif tracking-widest writing-mode-vertical">
          AYUSH GROVER
        </h1>
      </div>

      {/* Hamburger toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mb-4 flex flex-col space-y-1"
      >
        <span className="block w-6 h-0.5 bg-green-400 transition"></span>
        <span className="block w-6 h-0.5 bg-green-400 transition"></span>
        <span className="block w-6 h-0.5 bg-green-400 transition"></span>
      </button>

      {/* Sliding menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            exit={{ x: -200 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-20 md:left-24 h-full w-48 bg-black/80 flex flex-col justify-center space-y-8 px-6"
          >
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`text-xl transition-colors ${
                location.pathname === '/' ? 'text-green-400' : 'hover:text-green-400'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className={`text-xl transition-colors ${
                location.pathname === '/about' ? 'text-green-400' : 'hover:text-green-400'
              }`}
            >
              About
            </Link>
            <Link
              to="/resume"
              onClick={() => setIsOpen(false)}
              className={`text-xl transition-colors ${
                location.pathname === '/resume' ? 'text-green-400' : 'hover:text-green-400'
              }`}
            >
              Resume
            </Link>
            
            <Link
              to="/projects"
              onClick={() => setIsOpen(false)}
              className={`text-xl transition-colors ${
                location.pathname === '/projects' ? 'text-green-400' : 'hover:text-green-400'
              }`}
            >
              Projects
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={`text-xl transition-colors ${
                location.pathname === '/contact' ? 'text-green-400' : 'hover:text-green-400'
              }`}
            >
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}