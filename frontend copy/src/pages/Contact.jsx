import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

export default function Contact() {
  // Local state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('https://ayushgrover1120.onrender.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('Message sent successfully! 😊');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus(`Failed to send message: ${result.message}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('Network error. Please try again later.');
    }
  };

  return (
    <main className="bg-black text-white min-h-screen relative">
      <Navbar />

      {/* Heading */}
      <motion.h1
        className="text-[10vw] font-extrabold text-white text-center leading-none py-20 tracking-tight"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        CONTACT
      </motion.h1>

      {/* Intro */}
      <motion.p
        className="text-center text-gray-400 max-w-xl mx-auto mb-12 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        I’d love to hear from you! Whether you have a question, a project idea,
        or just want to say hi — feel free to drop me a message below.
      </motion.p>

      {/* Contact Form */}
      <div className="container mx-auto px-6 pb-20 max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm text-green-400">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full bg-[#121212] border border-white/10 p-4 rounded-md focus:outline-none focus:border-green-400 transition"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-green-400">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full bg-[#121212] border border-white/10 p-4 rounded-md focus:outline-none focus:border-green-400 transition"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-green-400">Message</label>
            <textarea
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message..."
              className="w-full bg-[#121212] border border-white/10 p-4 rounded-md focus:outline-none focus:border-green-400 transition"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-green-400 text-black px-8 py-3 rounded-full font-medium hover:bg-green-500 transition"
          >
            Send Message
          </button>
        </form>

        {/* Status Message */}
        {status && (
          <p className="text-center mt-6 text-sm text-gray-300">{status}</p>
        )}
      </div>

      {/* Social Links */}
      <div className="text-center text-gray-500 mt-12">
        Or reach out on
        <a
          href="https://www.linkedin.com/in/ayush-grover-55b44a281/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 ml-1 underline hover:text-green-500 transition"
        >
          LinkedIn
        </a>
        {' '}or{' '}
        <a
          href="mailto:agayushgrover2898@gmail.com"
          className="text-green-400 underline hover:text-green-500 transition"
        >
          Email
        </a>
      </div>
    </main>
  );
}