import React from 'react';
import { motion } from 'framer-motion';
import { FaTelegramPlane, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

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
        <div className="absolute w-96 h-96 bg-lime-300 rounded-full opacity-10 blur-[120px] top-[-50px] left-[-50px] animate-pulse"></div>
        <div className="absolute w-80 h-80 bg-green-400 rounded-full opacity-10 blur-[100px] bottom-[-60px] right-[-40px] animate-spin-slow"></div>
        <div className="absolute w-60 h-60 bg-teal-400 rounded-full opacity-20 blur-[80px] top-[30%] left-[50%] animate-pulse"></div>
      </div>

      {/* Contact Card */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative bg-white/10 backdrop-blur-lg rounded-3xl shadow-xl p-10 w-full max-w-3xl border border-white/20 z-10 transition-transform duration-500 hover:shadow-green-400/30"
      >
        {/* Animated Neon Border */}
        <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-br from-lime-400 to-green-400 bg-clip-border pointer-events-none blur-xl opacity-20 animate-gradient-spin"></div>

        <motion.h2
          className="text-4xl font-extrabold text-white text-center mb-8 drop-shadow-md"
          variants={fieldVariants}
        >
          ✨ Let’s Work Together
        </motion.h2>

        <motion.form className="space-y-8 z-10 relative">
          <motion.div className="relative" variants={fieldVariants}>
            <input
              type="text"
              name="name"
              required
              className="peer w-full bg-transparent border-b-2 border-gray-300 text-white placeholder-transparent focus:outline-none focus:border-lime-400 transition duration-300"
              placeholder="Your Name"
            />
            <label
              className="absolute left-0 top-2 text-gray-400 text-sm transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-lime-300"
            >
              Your Name
            </label>
          </motion.div>

          <motion.div className="relative" variants={fieldVariants}>
            <input
              type="email"
              name="email"
              required
              className="peer w-full bg-transparent border-b-2 border-gray-300 text-white placeholder-transparent focus:outline-none focus:border-lime-400 transition duration-300"
              placeholder="Your Email"
            />
            <label
              className="absolute left-0 top-2 text-gray-400 text-sm transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-lime-300"
            >
              Email Address
            </label>
          </motion.div>

          <motion.div className="relative" variants={fieldVariants}>
            <textarea
              name="message"
              rows="4"
              required
              className="peer w-full bg-transparent border-b-2 border-gray-300 text-white placeholder-transparent focus:outline-none focus:border-lime-400 transition duration-300 resize-none"
              placeholder="Your Message"
            ></textarea>
            <label
              className="absolute left-0 top-2 text-gray-400 text-sm transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-lime-300"
            >
              Your Message
            </label>
          </motion.div>

          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: '#a3e635',
              boxShadow: '0px 0px 15px #bef264',
            }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gradient-to-r from-lime-500 to-green-500 text-white font-semibold py-3 rounded-xl shadow-md transition duration-300"
          >
            Send Message 🚀
          </motion.button>
        </motion.form>

        {/* Floating Social Buttons */}
        <div className="flex justify-center mt-10 gap-6">
          <a
            href="https://t.me/PrathamChadda"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-lime-400 transition"
          >
            <FaTelegramPlane />
          </a>
          <a
            href="https://wa.me/7717545677"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-lime-400 transition"
          >
            <FaWhatsapp />
          </a>
          <a
            href="mailto:prathamchadda762@gmail.com"
            className="text-white text-2xl hover:text-lime-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
