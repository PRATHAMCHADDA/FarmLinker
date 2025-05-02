import React, { useState } from 'react';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import { motion } from 'framer-motion';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');  // Error message state

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Send login data without recaptchaToken
      const res = await axios.post('http://localhost:5000/login', {
        email,
        password,
      });

      localStorage.setItem('token', res.data.token);
      window.location.href = res.data.role === 'admin' ? '/admin' : '/dashboard';
    } catch (err) {
      console.error('Login failed:', err);
      if (err.response) {
        setErrorMessage(`❌ ${err.response.data.error || 'Login failed'}`);  // Improved error handling
      } else {
        setErrorMessage('❌ Network or server error. Please try again later.');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#001f1f] via-[#0f332f] to-[#003c3c] p-6">
      <motion.form
        onSubmit={handleLogin}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-lg bg-white/10 backdrop-blur-xl border border-green-300/20 rounded-3xl p-8 text-white"
      >
        <h2 className="text-4xl font-bold text-center mb-8">🔐 Login to FarmLinker</h2>

        {/* Display error message if exists */}
        {errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-3 bg-white/5 border border-green-200/30 rounded-xl mb-5"
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-3 bg-white/5 border border-green-200/30 rounded-xl mb-5"
        />

        {/* reCAPTCHA showcase only */}
        <ReCAPTCHA
          sitekey="6LdeeCMrAAAAAImWdaJyAPAcd6YhbJ-ukMflcutj"
          theme="dark"
          size="normal"
          // onChange and onExpired handlers are no longer needed
        />

        <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl">
          🌻 Login
        </button>
      </motion.form>
    </div>
  );
};

export default Login;
