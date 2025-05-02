import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Developers from "./components/Developers";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Shop from './components/Shop';
import Cart from './components/Cart';
import CartWidget from "./components/Cartwidget";
import { CartProvider } from './components/CartContext';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [chatVisible, setChatVisible] = useState(true);

  return (
    <Router>
      <div className="relative bg-gradient-to-br from-green-50 via-white to-green-100 min-h-screen font-sans text-gray-900 overflow-x-hidden">
        <Navbar />

        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Menu />
              <Developers />
              <Gallery />
              <CartProvider>
                <Shop />
                <CartWidget />
                <Cart />
              </CartProvider>
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

        {/* Floating Chatbot Widget */}
        <div className="fixed bottom-6 right-6 z-50 shadow-xl rounded-2xl bg-white border border-green-300">
          {chatVisible ? (
            <div className="w-[320px] h-[350px] bg-white rounded-xl overflow-hidden animate-fade-in">
              <div className="flex items-center justify-between px-4 py-2 bg-green-500 text-white font-bold text-lg">
                <span>FarmBot</span>
                <button
                  onClick={() => setChatVisible(false)}
                  className="text-white hover:text-red-200 transition"
                >
                  &#10005;
                </button>
              </div>
              <Chatbot />
            </div>
          ) : (
            <button
              onClick={() => setChatVisible(true)}
              className="p-3 bg-green-500 text-white rounded-full shadow-md hover:bg-green-600 transition-all animate-bounce"
            >
              💬
            </button>
          )}
        </div>

      </div>
    </Router>
  );
}

export default App;
