import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Developers', href: '#developers' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
    { label: 'Login', href: '/login' },
    { label: 'Signup', href: '/signup' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-green-600 via-green-500 to-lime-500 shadow-lg h-16 flex">

      <nav className="container mx-auto flex justify-between items-center align-middle">
        <a href="#" className="text-3xl font-extrabold text-white tracking-wide hover:opacity-90 transition duration-300">
          🌾 FarmLinker
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 text-white text-lg font-medium">
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href={item.href} className="hover:underline transition-all duration-300">
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white text-2xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.ul
              className="lg:hidden bg-white text-green-800 px-6 py-4 rounded-b-lg shadow-md z-50 fixed top-0 right-0 w-3/4 h-full overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3 }}
            >
              {navItems.map((item, index) => (
                <motion.li
                  key={index}
                  className="py-2 text-base border-b last:border-b-0 border-gray-200"
                  whileHover={{ scale: 1.05 }}
                >
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block w-full"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
