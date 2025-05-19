// import React, { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';
// import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [profileOpen, setProfileOpen] = useState(false); // mobile
//   const [desktopProfileOpen, setDesktopProfileOpen] = useState(false); // desktop
//   const profileRef = useRef();

//   const profileItems = [
//     { label: 'Login', href: '/login' },
//     { label: 'Signup', href: '/signup' },
//     { label: 'Shop', href: '/products' }, // Changed from 'Products' to 'Shop'
//     { label: 'Hire', href: '/hire' },
//   ];

//   const navItems = [
//     { label: 'Home', href: '/' },
//     { label: 'About', href: '#about' },
//     { label: 'Menu', href: '#menu' },
//     { label: 'Developers', href: '#developers' },
//     { label: 'Gallery', href: '#gallery' },
//     { label: 'Contact', href: '#contact' },
//   ];

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (profileRef.current && !profileRef.current.contains(event.target)) {
//         setDesktopProfileOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-green-600 via-green-500 to-lime-500 shadow-lg h-16 flex">
//       <nav className="container mx-auto flex justify-between items-center px-4">
//         <a href="#" className="text-3xl font-extrabold text-white tracking-wide hover:opacity-90 transition duration-300">
//           🌾 FarmLinker
//         </a>

//         {/* Desktop Menu */}
//         <ul className="hidden lg:flex gap-6 text-white text-lg font-medium items-center">
//           {navItems.map((item, index) => (
//             <motion.li
//               key={index}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <a href={item.href} className="hover:underline transition-all duration-300">
//                 {item.label}
//               </a>
//             </motion.li>
//           ))}

//           {/* Profile Dropdown with Icon */}
//           <li className="relative" ref={profileRef}>
//             <button
//               onClick={() => setDesktopProfileOpen((prev) => !prev)}
//               className="flex items-center gap-1 text-white hover:text-green-100 transition duration-300 text-xl"
//             >
//               <FaUserCircle />
//               {desktopProfileOpen ? <FiChevronUp /> : <FiChevronDown />}
//             </button>

//             <AnimatePresence>
//               {desktopProfileOpen && (
//                 <motion.ul
//                   className="absolute right-0 mt-2 bg-white text-green-800 shadow-lg rounded-lg z-50 w-40"
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   {profileItems.map((item, idx) => (
//                     <li key={idx}>
//                       <a
//                         href={item.href}
//                         className="block px-4 py-2 hover:bg-gray-100 transition"
//                       >
//                         {item.label}
//                       </a>
//                     </li>
//                   ))}
//                 </motion.ul>
//               )}
//             </AnimatePresence>
//           </li>
//         </ul>

//         {/* Mobile Menu Toggle */}
//         <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white text-2xl">
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </nav>

//       {/* (Optional) Mobile dropdown code goes here if needed */}
//     </header>
//   );
// };

// export default Navbar;



import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false); // mobile
  const [desktopProfileOpen, setDesktopProfileOpen] = useState(false); // desktop
  const profileRef = useRef();

  const profileItems = [
    { label: 'Login', href: '/login' },
    { label: 'Signup', href: '/signup' },
    { label: 'Shop', href: '/products' },
    { label: 'Hire', href: '/hire' },
  ];

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Developers', href: '#developers' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setDesktopProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f172a]/70 backdrop-blur-sm shadow-md border-b border-lime-400/20 h-16 flex items-center">
      <nav className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <a href="#" className="text-3xl font-extrabold text-white tracking-wide hover:opacity-90 transition duration-300">
          🌾 FarmLinker
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 text-white text-lg font-medium items-center">
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

          {/* Profile Dropdown */}
          <li className="relative" ref={profileRef}>
            <button
              onClick={() => setDesktopProfileOpen((prev) => !prev)}
              className="flex items-center gap-1 text-white hover:text-green-100 transition duration-300 text-xl"
            >
              <FaUserCircle />
              {desktopProfileOpen ? <FiChevronUp /> : <FiChevronDown />}
            </button>

            <AnimatePresence>
              {desktopProfileOpen && (
                <motion.ul
                  className="absolute right-0 mt-3 w-44 bg-[#0f172a]/90 text-white backdrop-blur-lg shadow-xl rounded-xl overflow-hidden border border-gray-700"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {profileItems.map((item, idx) => (
                    <li key={idx}>
                      <a
                        href={item.href}
                        className="block px-4 py-2 hover:bg-white hover:text-black transition"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white text-2xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
