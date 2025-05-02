import React from 'react';
import { useCart } from './CartContext';
import { motion, AnimatePresence } from 'framer-motion';

const Cart = () => {
  const { cartItems, removeFromCart, total, isCartOpen } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <motion.div
          className="fixed top-0 right-0 h-full w-[300px] bg-white shadow-xl z-40 p-6"
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          exit={{ x: 300 }}
          transition={{ type: 'spring', stiffness: 70 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-green-700">🛍️ Your Cart</h3>
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Cart is empty</p>
          ) : (
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li key={item.id} className="flex justify-between items-center">
                  <div>
                    <p className="text-green-800 font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 text-sm"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-6 border-t pt-4">
            <p className="font-semibold text-lg text-green-700">Total: ₹{total.toFixed(2)}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Cart;
