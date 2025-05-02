// chatRoute.js
const express = require('express');
const axios = require('axios');

const router = express.Router();

router.post('/api/chat', async (req, res) => {
  const { messages } = req.body;

  try {
    const response = await axios.post(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        model: 'llama3-8b-8192',
        messages: messages,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const reply = response.data.choices[0].message;
    res.json({ message: reply });
  } catch (error) {
    console.error('Error from Groq:', error.response?.data || error.message);
    res.status(500).json({ error: 'Something went wrong with the LLaMA service.' });
  }
});

module.exports = router;
