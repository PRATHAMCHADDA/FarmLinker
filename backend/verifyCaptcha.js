// utils/verifyCaptcha.js
const axios = require('axios');


const verifyCaptcha = async (token) => {
    try {
      const secret = process.env.RECAPTCHA_SECRET_KEY;
      if (!secret) {
        console.error('❌ RECAPTCHA_SECRET_KEY is not set in environment!');
        return false;
      }
  
      const response = await axios.post(
        `https://www.google.com/recaptcha/api/siteverify`,
        null,
        {
          params: {
            secret,
            response: token,
          },
        }
      );
  
      console.log('🔍 Google reCAPTCHA response:', response.data);
  
      return response.data.success;
    } catch (error) {
    console.log('📥 Verifying token:', token);
    console.log('🔍 Google reCAPTCHA response:', response.data);

      console.error('❌ Error verifying reCAPTCHA:', error.message);
      return false;
    }
  };
  

module.exports = verifyCaptcha;
