import React, { useState } from 'react';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import { motion } from 'framer-motion';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [recaptchaToken, setRecaptchaToken] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validatePassword = (pwd) => {
    const length = /.{8,}/;
    const upper = /[A-Z]/;
    const lower = /[a-z]/;
    const number = /[0-9]/;
    const special = /[!@#$%^&*(),.?":{}|<>]/;
    if (!length.test(pwd)) return '❗ At least 8 characters required.';
    if (!upper.test(pwd)) return '❗ Include an uppercase letter.';
    if (!lower.test(pwd)) return '❗ Include a lowercase letter.';
    if (!number.test(pwd)) return '❗ Include a number.';
    if (!special.test(pwd)) return '❗ Include a special character (!@#$%).';
    return '';
  };

 const handleSignUp = async (e) => {
  e.preventDefault();

  const pwdError = validatePassword(password);
  setPasswordError(pwdError);
  if (pwdError) return;

  if (password !== confirmPassword) {
    alert('❌ Passwords do not match!');
    return;
  }

  // Remove this line if you don't want to use CAPTCHA for now
  // if (!recaptchaToken) {
  //   alert('❌ Please complete the CAPTCHA.');
  //   return;
  // }

  try {
    const res = await axios.post('http://localhost:5000/signup', { email, password });
    alert('✅ Account created! Logging you in...');
    localStorage.setItem('token', res.data.token);
    window.location.href = res.data.role === 'admin' ? '/admin' : '/dashboard';
  } catch (err) {
    alert(`❌ ${err.response?.data?.message || 'Signup failed'}`);
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#001f1f] via-[#0f332f] to-[#003c3c] p-6">
      <motion.form
        onSubmit={handleSignUp}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-lg bg-white/10 backdrop-blur-xl border border-green-300/20 rounded-3xl p-8 text-white"
      >
        <h2 className="text-4xl font-bold text-center mb-8">🌱 Sign Up for FarmLinker</h2>
        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full p-3 bg-white/5 border border-green-200/30 rounded-xl mb-5" />
        <input type="password" placeholder="Create a strong password" value={password} onChange={(e) => { setPassword(e.target.value); setPasswordError(validatePassword(e.target.value)); }} required className={`w-full p-3 rounded-xl mb-2 bg-white/5 ${passwordError ? 'border-red-400' : 'border-green-200/30'}`} />
        {passwordError && <p className="text-red-400 text-sm mb-2">{passwordError}</p>}
        <input type="password" placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required className="w-full p-3 bg-white/5 border border-green-200/30 rounded-xl mb-6" />
        <ReCAPTCHA sitekey="6LdeeCMrAAAAAImWdaJyAPAcd6YhbJ-ukMflcutj" onChange={setRecaptchaToken} />

        <button type="submit" className="w-full bg-green-600 hover:bg-green-700 transition text-white py-3 rounded-xl font-semibold">🌟 Create Account</button>
      </motion.form>
    </div>
  );
};

export default SignUp;
