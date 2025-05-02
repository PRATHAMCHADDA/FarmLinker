const express = require('express');
const router = express.Router();
const Labor = require('../models/Labor');

// POST route to apply for labor (submit labor details)
router.post('/apply', async (req, res) => {
  const { name, skills, experience, contact, location, availability } = req.body;

  if (!name || !skills || !experience || !contact || !location || !availability) {
    return res.status(400).json({ message: '❌ Missing required fields' });
  }

  try {
    const newLabor = new Labor({
      name,
      skills,
      experience,
      contact,
      location,
      availability
    });
    await newLabor.save();
    res.status(201).json({ message: '✅ Labor applied successfully' });
  } catch (err) {
    console.error('❌ Labor application error:', err);
    res.status(500).json({ message: '❌ Labor application failed' });
  }
});

// GET route to fetch all labor profiles (available for employers)
router.get('/available', async (req, res) => {
  try {
    const laborers = await Labor.find();
    res.status(200).json(laborers);
  } catch (err) {
    console.error('❌ Fetch laborers error:', err);
    res.status(500).json({ message: '❌ Error fetching laborers' });
  }
});

module.exports = router;
