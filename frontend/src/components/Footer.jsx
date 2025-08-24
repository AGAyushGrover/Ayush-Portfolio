import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import lampBg from '../assets/footer-bg.jpg'; // ✅ adjust your path

export default function Footer() {
  return (
    <footer className="relative bg-black text-gray-200 overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${lampBg})` }}
      ></div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* MAIN CONTENT */}
      <div className="relative container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 z-10">
        {/* ABOUT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-semibold mb-4 text-green-400">ABOUT ME</h2>
          <p className="mb-4 text-gray-400 leading-relaxed">
            I'm a full stack developer passionate about building scalable web applications.
            I enjoy solving problems, writing clean code, and continuously learning to grow
            my skills across frontend and backend technologies.
          </p>
          <p className="text-3xl font-bold italic text-white">Ayush Grover</p>
        </motion.div>

        {/* NAVIGATION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-semibold mb-4 text-green-400">NAVIGATION</h2>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-green-400 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-green-400 transition">About</Link></li>
            <li><Link to="/skills" className="hover:text-green-400 transition">Skills</Link></li>
            <li><Link to="/contact" className="hover:text-green-400 transition">Contact</Link></li>
          </ul>
        </motion.div>

        {/* CONTACTS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-semibold mb-4 text-green-400">CONTACTS</h2>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <span className="text-green-400">📍</span>
              <span>New Delhi, India</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-400">📧</span>
              <span>agayushgrover2898@gmail.com</span>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ayush-grover-55b44a281/"
                className="underline hover:text-green-400 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect with me on LinkedIn
              </a>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Divider */}
      <hr className="relative border-green-400/30 z-10 mx-4 md:mx-0" />

      {/* COPYRIGHT BAR */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="relative bg-green-400 text-center text-lg text-black py-4 z-10"
      >
        &copy; {new Date().getFullYear()} Ayush Grover. All rights reserved.
      </motion.div>
    </footer>
  );
}