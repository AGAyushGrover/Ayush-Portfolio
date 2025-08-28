import { motion } from 'framer-motion';
import profilePic from '../assets/your-photo.png';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import Navbar from '../components/Navbar';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 4 }
  },
};

export default function About() {
  return (
    <main className="bg-black text-white font-sans relative overflow-hidden">
      <Navbar />

      {/* ABOUT SECTION */}
      <section className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
        {/* TEXT BOX with unified motion */}
        <motion.div
          className="flex-1 bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-green-400 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-green-400 pr-5">
            About Me
          </h1>
          <p className="text-gray-300 mb-6">
            Hello! I’m Ayush Grover, a final year Computer Science student at DTU.
            I love building full stack applications, solving real world problems,
            and blending design with development to craft meaningful digital experiences.
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
          </p>
          <p>
            Currently exploring new technologies, contributing to open-source,
            and preparing for exciting opportunities ahead.
          </p>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          className="flex-1 flex justify-end"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <img
            src={profilePic}
            alt="Ayush Grover"
            className="w-full max-w-sm "
          />
        </motion.div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-green-400 mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Projects
          </motion.h2>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                img: project1,
                title: 'Portfolio Website',
                desc: 'A modern portfolio site to showcase my work, built with React, Tailwind CSS, and Framer Motion.',
                icons: [FaReact, FaNodeJs, FaDatabase],
                github: 'https://github.com/yourusername/portfolio',
                live: 'https://yourportfolio.com'
              },
              {
                img: project2,
                title: 'E-commerce App',
                desc: 'Full-stack e-commerce platform with secure payments, built with MERN stack Its an interactive housemaking help.',
                icons: [FaReact, FaNodeJs, FaDatabase],
                github: 'https://github.com/yourusername/ecommerce',
                live: 'https://ecommerce-live-demo.com'
              }
            ].map((proj, i) => (
              <motion.div
              key={i}
              className="relative group bg-gray-900 rounded-lg overflow-hidden shadow-xl transition"
              initial="hidden"
              whileInView="visible"
              whileHover={{
                scale: 1.05,
                y: -10,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                },
              }}
              variants={fadeUp}
              viewport={{ once: true }}
            >
              <img
                src={proj.img}
                alt={proj.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
              <div className="relative p-6">
                <h3 className="text-3xl font-bold mb-3 text-green-400">{proj.title}</h3>
                <p className="text-gray-300 mb-4">{proj.desc}</p>
                <div className="flex items-center gap-4 text-green-400 text-2xl mb-4">
                  {proj.icons.map((Icon, idx) => <Icon key={idx} />)}
                </div>
                <div className="flex gap-4">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-400 text-black px-4 py-2 rounded hover:bg-green-500 transition"
                  >
                    GitHub
                  </a>
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-transparent border border-green-400 px-4 py-2 rounded hover:bg-green-400 hover:text-black transition"
                  >
                    Live Preview
                  </a>
                </div>
              </div>
            </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Typewriter CSS */}
      <style>{`
        .animate-typing {
          animation: typing 2s steps(15), blink .75s step-end infinite;
        }
        @keyframes typing { from { width: 0 } to { width: 100% } }
        @keyframes blink { from, to { border-color: transparent } 50% { border-color: #22c55e } }
      `}</style>
    </main>
  );
}