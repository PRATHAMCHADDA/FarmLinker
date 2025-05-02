const emailjs = require('@emailjs/browser');

const sendWelcomeEmail = async (email) => {
  try {
    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      {
        user_email: email,
        message: `Thanks for signing up to FarmLinker, ${email}! 🌱`,
      },
      process.env.EMAILJS_USER_ID
    );
  } catch (error) {
    console.error('EmailJS Error:', error);
  }
};

module.exports = { sendWelcomeEmail };
