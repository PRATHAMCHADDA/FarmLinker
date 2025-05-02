import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from './CartContext';

const CartWidget = () => {
  const { toggleCart, cartCount } = useCart();

  return (
    <button
      onClick={toggleCart}
      className="fixed top-5 right-6 z-50 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
    >
      <FaShoppingCart className="text-xl" />
      {cartCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-white text-green-700 text-xs font-bold px-2 py-0.5 rounded-full shadow">
          {cartCount}
        </span>
      )}
    </button>
  );
};

export default CartWidget;
