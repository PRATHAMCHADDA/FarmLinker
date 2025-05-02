const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const emailjs = require('@emailjs/browser');
require('dotenv').config();
const verifyCaptcha = require('./verifyCaptcha')
const axios = require('axios');
const chatRoute = require('./chatRoute')


const app = express();
const port = process.env.PORT || 5000;

// Cleaned CORS config
const corsOptions = {
  origin: 'http://localhost:5173',
  methods: 'GET,POST',
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB error:', err));

// User schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
}, { timestamps: true });

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

// JWT Token generation
const generateToken = (user) => {
  return jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Signup API
app.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: '❌ Missing required fields' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: '❌ Email already exists' });
    }

    const newUser = new User({ email, password });
    await newUser.save();

    const token = generateToken(newUser);

    // Optional email
    await axios.post('https://api.emailjs.com/api/v1.0/email/send', {
      service_id: 'service_wcuv8pd',
      template_id: 'template_vewtjb3',
      user_id: '_q188B-f2-EI7c7Mm',
      template_params: {
        user_email: email,
        message: `Thanks for signing up to FarmLinker, ${email}! 🌱`
      }
    });
  } catch (err) {
    console.error('❌ Signup error:', err);
    res.status(500).json({ message: '❌ Signup failed' });
  }
});

// Login API
// app.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({ message: '❌ Missing required fields' });
//   }

//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(404).json({ message: '❌ User not found' });

//     const isMatch = await user.comparePassword(password);
//     if (!isMatch) return res.status(401).json({ message: '❌ Invalid credentials' });

//     const token = generateToken(user);
//     res.status(200).json({ token, message: '✅ Login successful', role: user.isAdmin ? 'admin' : 'user' });
//   } catch (err) {
  //     console.error('❌ Login error:', err);
  //     res.status(500).json({ message: '❌ Login error' });
  //   }
  // });
  
  // Login API
// Login API
// Login API
// Login API
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  
  // Proceed without recaptcha token validation
  if (!email || !password) {
    return res.status(400).json({ error: "❌ Missing required fields" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: '❌ User not found' });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(401).json({ error: '❌ Invalid credentials' });

    const tokenResponse = generateToken(user);
    res.status(200).json({ token: tokenResponse, role: user.isAdmin ? 'admin' : 'user' });

  } catch (error) {
    console.error("❌ Error during login:", error);
    res.status(500).json({ error: "❌ Internal Server Error" });
  }
});



// Auth middleware
const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: '❌ Access denied. No token.' });
  
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: '❌ Invalid token' });
    req.user = user;
    next();
  });
};

// Get User Details (Logged-in User)
app.get('/api/me', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: '❌ User not found' });
    }
    // Return user details except for the password
    const { password, ...userDetails } = user.toObject();
    res.status(200).json(userDetails);
  } catch (err) {
    res.status(500).json({ message: '❌ Error fetching user details' });
  }
});


// Admin check
app.get('/api/admin', authenticateToken, (req, res) => {
  if (!req.user.isAdmin) return res.status(403).json({ message: '❌ Admins only' });
  res.json({ message: '✅ Welcome to admin panel!' });
});

// User management (for admins)
app.get('/api/users', authenticateToken, async (req, res) => {
  if (!req.user.isAdmin) return res.status(403).json({ message: '❌ Admins only' });
  const users = await User.find();
  res.status(200).json(users);
});

app.put('/api/users/:id', authenticateToken, async (req, res) => {
  if (!req.user.isAdmin) return res.status(403).json({ message: '❌ Admins only' });
  const { id } = req.params;
  const { email, password } = req.body;
  
  try {
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ message: '❌ User not found' });
    
    user.email = email || user.email;
    if (password) user.password = await bcrypt.hash(password, 10);
    
    await user.save();
    res.status(200).json({ message: '✅ User updated' });
  } catch (err) {
    res.status(500).json({ message: '❌ Error updating user' });
  }
});

app.delete('/api/users/:id', authenticateToken, async (req, res) => {
  if (!req.user.isAdmin) return res.status(403).json({ message: '❌ Admins only' });
  const { id } = req.params;
  
  try {
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ message: '❌ User not found' });

    await user.remove();
    res.status(200).json({ message: '✅ User deleted' });
  } catch (err) {
    res.status(500).json({ message: '❌ Error deleting user' });
  }
});

app.use(chatRoute);
const laborRoutes = require('./routes/labor');
app.use('/api/labor', laborRoutes);

app.listen(port, () => {
  console.log(`🚀 Backend running at http://localhost:${port}`);
});