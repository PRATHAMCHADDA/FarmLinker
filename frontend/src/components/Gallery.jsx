import React from 'react';
import { motion } from 'framer-motion';

const images = [
  '/ww.jpg',
  '/ww1.jpg',
  '/ww2.jpg',
   '/farm.jpg',
  '/ww4.jpg',
  '/ww5.jpg',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      duration: 0.6,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Gallery = () => {
  return (
    <section id="gallery" className="py-16 px-4 bg-gradient-to-b from-lime-50 to-green-100">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-green-700 mb-4">🌿 Our Gallery</h2>
        <p className="text-gray-600">Explore the beauty of modern farming and agriculture.</p>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            variants={itemVariants}
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Gallery;
