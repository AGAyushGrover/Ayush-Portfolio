import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import profilePic from '../assets/img2.png'; // your profile pic
import porImage from '../assets/por-image.png';    // your POR image
import { 
  FaReact, FaNodeJs, FaPython, FaDatabase, FaHtml5, FaCss3Alt, FaJs, 
  FaGitAlt, FaLinux, FaDocker, FaNpm 
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss } from 'react-icons/si';

export default function Resume() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.3 },
    }),
  };

  return (
    <main className="bg-black text-white font-sans min-h-screen relative overflow-x-hidden">
      <Navbar />

      {/* ✅ Profile Photo - bigger, lower, left */}
      <img
        src={profilePic}
        alt="Profile"
        className="absolute top-20 right-30 w-50 h-50 rounded-full border-4 border-green-400 object-cover"
      />

      {/* HERO */}
      <section className="container mx-auto px-6 py-20">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-green-400 mb-6 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          My Resume
        </motion.h1>
        <motion.p
          className="text-center text-gray-400 max-w-2xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          custom={2}
        >
          Explore my education, experience, technical skills, and leadership. Each section is interactive — hover over items for a subtle highlight.
        </motion.p>
      </section>

      {/* SECTIONS */}
      <section className="container mx-auto px-6 py-10 grid gap-12 md:grid-cols-2">
        {/* Education timeline */}
        <motion.div
          className="relative bg-white/5 p-8 rounded-lg border border-green-400/20 hover:border-green-400/70 transition backdrop-blur-md"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-green-400 mb-8">Education</h2>

          <div className="absolute left-4 top-16 bottom-8 w-0.5 bg-green-400/50"></div>

          <div className="relative ml-10 space-y-8">
            <div className="relative">
              <div className="absolute -left-10 top-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
              <p className="text-white font-semibold">B.Tech in Computer Engineering</p>
              <p className="text-gray-400 text-sm">Delhi Technological University — CGPA 7.45</p>
            </div>
            <div className="relative">
              <div className="absolute -left-10 top-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
              <p className="text-white font-semibold">Class XII</p>
              <p className="text-gray-400 text-sm">St. Xavier’s Senior Secondary School — 90%</p>
            </div>
            <div className="relative">
              <div className="absolute -left-10 top-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
              <p className="text-white font-semibold">Class X</p>
              <p className="text-gray-400 text-sm">St. Xavier’s Senior Secondary School — 94%</p>
            </div>
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          className="bg-white/5 p-8 rounded-lg border border-green-400/20 hover:border-green-400/70 transition backdrop-blur-md"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          custom={2}
        >
          <h2 className="text-3xl font-bold text-green-400 mb-4">Experience</h2>
          <ul className="space-y-4 text-lg">
            <li>
              <p className="text-white font-semibold">LokaChakra — Software Development Intern</p>
              <ul className="list-disc list-inside text-gray-400 text-base mt-2 space-y-1">
                <li>Developed dynamic KYC flow using TypeScript and Next.js</li>
                <li>Implemented backend APIs and data storage using MySQL</li>
                <li>Built dynamic profile registration and verification modules</li>
              </ul>
              <p className="text-gray-400 text-base">Jun 2025 — Aug 2025</p>
            </li>
          </ul>
        </motion.div>

        {/* Skills with icons */}
        {/* Skills with icons */}
      <motion.div
        className="relative bg-white/5 p-8 rounded-lg border border-green-400/20 hover:border-green-400/70 transition backdrop-blur-md col-span-2 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true }}
        custom={3}
      >
        <h2 className="text-2xl font-bold text-green-400 mb-4">Technical Skills and Courses</h2>
        <p className="text-gray-400 mb-4">Languages: C++, Scala, Python, SQL</p>
        <p className="text-gray-400 mb-4">Web: HTML, CSS, JS, React, Node.js, Tailwind</p>
        <p className="text-gray-400 mb-4">Libraries & Tools: NumPy, PyTorch, MySQL, Git, Docker, Linux</p>
        <p className="text-gray-400 mb-4">Courses: DSA, OS, DBMS, AI, ML, Computer Vision</p>

        {/* Random scattered icons collage on right side */}
        <div className="absolute top-0 right-0 w-60 h-full pointer-events-none">
          <FaReact className="absolute top-4 right-8 text-green-400 text-3xl rotate-12 hover:text-green-500 transition" />
          <FaNodeJs className="absolute top-16 right-0 text-green-400 text-3xl -rotate-6 hover:text-green-500 transition" />
          <FaPython className="absolute top-32 right-12 text-green-400 text-3xl rotate-3 hover:text-green-500 transition" />
          <SiMongodb className="absolute top-48 right-6 text-green-400 text-3xl -rotate-3 hover:text-green-500 transition" />
          <SiExpress className="absolute top-64 right-14 text-green-400 text-3xl rotate-6 hover:text-green-500 transition" />
          <SiTailwindcss className="absolute top-80 right-4 text-green-400 text-3xl -rotate-12 hover:text-green-500 transition" />
          <FaHtml5 className="absolute top-10 right-28 text-green-400 text-3xl -rotate-10 hover:text-green-500 transition" />
          <FaCss3Alt className="absolute top-24 right-32 text-green-400 text-3xl rotate-8 hover:text-green-500 transition" />
          <FaJs className="absolute top-52 right-28 text-green-400 text-3xl rotate-2 hover:text-green-500 transition" />
          <FaGitAlt className="absolute bottom-20 right-20 text-green-400 text-3xl -rotate-8 hover:text-green-500 transition" />
          <FaLinux className="absolute top-72 right-24 text-green-400 text-3xl rotate-4 hover:text-green-500 transition" />
          <FaDocker className="absolute bottom-12 right-10 text-green-400 text-3xl rotate-10 hover:text-green-500 transition" />
          <FaNpm className="absolute top-96 right-16 text-green-400 text-3xl -rotate-6 hover:text-green-500 transition" />
          <FaDatabase className="absolute bottom-8 right-32 text-green-400 text-3xl rotate-5 hover:text-green-500 transition" />
        </div>
      </motion.div>

        {/* POR with image more right */}
        <motion.div
          className="bg-white/5 p-8 rounded-lg border border-green-400/20 hover:border-green-400/70 transition backdrop-blur-md col-span-2 flex flex-col md:flex-row gap-8 items-center"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          custom={4}
        >
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-green-400 mb-4">Position of Responsibility</h2>
            <ul className="space-y-4">
              <li>
                <p className="text-white font-semibold">Secretary — CS Chapter IEEE DTU</p>
                <ul className="list-disc list-inside text-gray-400 text-base mt-2 space-y-1">
                  <li>Organized VIHAAN 8.O, Annual Hackathon DTU, Technical and Operational Lead, benefiting 1500+ students.</li>
                  <li>INVICTUS’25, Annual tech fest of DTU, organized events like BITS, CASEQUEST with 200+ participants.</li>
                  <li>Successfully organized VIHAAN 7.O Hackathon, impacting over 1000 students.</li>
                </ul>
              </li>
            </ul>
          </div>
          {/* Image with margin pushed right */}
          <div className="flex-1 ml-auto">
            <img
              src={porImage}
              alt="Position of Responsibility"
              className="w-full max-w-lg"
            />
          </div>
        </motion.div>
      </section>

      {/* DOWNLOAD */}
      <section className="container mx-auto px-6 pb-20 text-center">
        <motion.a
          href="/Resume.pdf"
          download
          className="inline-block mt-8 border border-green-400 text-green-400 px-8 py-3 rounded-full hover:bg-green-400 hover:text-black transition"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Download PDF Resume
        </motion.a>
      </section>
    </main>
  );
}