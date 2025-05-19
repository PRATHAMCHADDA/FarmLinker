import React from 'react';
import { motion } from 'framer-motion';
import {
  FaTelegramPlane,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
} from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      staggerChildren: 0.2,
    },
  },
};

const fieldVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center px-6 py-24 bg-[#0f172a] overflow-hidden"
    >
      {/* Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute w-[500px] h-[500px] bg-lime-300 rounded-full opacity-10 blur-[160px] top-[-100px] left-[-120px] animate-pulse" />
        <div className="absolute w-[300px] h-[300px] bg-green-400 rounded-full opacity-10 blur-[100px] bottom-[-60px] right-[-40px] animate-spin-slow" />
        <div className="absolute w-[300px] h-[300px] bg-teal-400 rounded-full opacity-20 blur-[100px] top-[35%] left-[55%] animate-pulse" />
      </div>

      {/* Card */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative flex flex-col lg:flex-row bg-[#111827]/80 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-7xl overflow-hidden border border-white/10 z-10"
      >
        {/* Vertical Line */}
        <div className="hidden lg:block w-1 bg-gradient-to-b from-lime-400 via-green-400 to-teal-400" />

        {/* Left: Contact Info */}
        <div className="w-full lg:w-1/2 px-8 py-10 text-white space-y-8">
          <h3 className="text-4xl font-extrabold tracking-tight text-lime-400">Contact Us</h3>
          <p className="text-gray-300 text-lg">We'd love to hear from you! Reach out using any method below.</p>

          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-lime-400 text-xl mt-1" />
              <p>Chitkara University, Himachal Pradesh</p>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-lime-400 text-xl" />
              <a href="mailto:info@FarmLinkerwebsite.com" className="hover:underline">info@FarmLinkerwebsite.com</a>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-lime-400 text-xl" />
              <a href="tel:+917015090125" className="hover:underline">+91 7015090125</a>
            </div>
            <div className="flex items-start gap-4">
              <FaClock className="text-lime-400 text-xl mt-1" />
              <div>
                <p>Mon - Sat: 9:00 AM – 5:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 pt-6">
            <a
              href="https://t.me/PrathamChadda"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-white hover:text-lime-400 transition"
            >
              <FaTelegramPlane />
            </a>
            <a
              href="https://wa.me/7717545677"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-white hover:text-lime-400 transition"
            >
              <FaWhatsapp />
            </a>
            <a
              href="mailto:prathamchadda762@gmail.com"
              className="text-2xl text-white hover:text-lime-400 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="w-full lg:w-1/2 bg-white/5 px-8 py-10">
          <motion.h2
            variants={fieldVariants}
            className="text-3xl font-bold text-white text-center mb-8"
          >
            ✨ Let’s Work Together
          </motion.h2>

          <motion.form className="space-y-6" variants={fieldVariants}>
            <motion.div className="relative" variants={fieldVariants}>
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full bg-transparent border-b border-gray-400 text-white placeholder-gray-500 focus:outline-none focus:border-lime-400 py-3"
              />
            </motion.div>

            <motion.div className="relative" variants={fieldVariants}>
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="w-full bg-transparent border-b border-gray-400 text-white placeholder-gray-500 focus:outline-none focus:border-lime-400 py-3"
              />
            </motion.div>

            <motion.div className="relative" variants={fieldVariants}>
              <textarea
                name="message"
                rows="4"
                required
                placeholder="Your Message"
                className="w-full bg-transparent border-b border-gray-400 text-white placeholder-gray-500 focus:outline-none focus:border-lime-400 py-3 resize-none"
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              whileHover={{
                scale: 1.05,
                backgroundColor: '#a3e635',
                boxShadow: '0 0 20px #a3e635',
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-lime-500 to-green-500 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300"
            >
              Send Message 🚀
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
