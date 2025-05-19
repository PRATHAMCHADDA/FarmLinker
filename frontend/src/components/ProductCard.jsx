import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from './CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-xl shadow-md overflow-hidden"
    >
      <img src={product.image} alt={product.name} className="w-full h-52 object-cover" />
      <div className="p-5 space-y-2">
        <h3 className="text-xl font-semibold text-green-800">{product.name}</h3>
        {/* ₹ */}
        {/* $ */}
        <p className="text-gray-600">${product.price.toFixed(2)}</p>
        <button
          onClick={() => addToCart(product)}
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition duration-300"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
