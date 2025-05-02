const express = require("express");
const router = express.Router();
const verifyCaptcha = require("../utils/verifyCaptcha");

router.post("/signup", async (req, res) => {
  const { email, password, recaptchaToken } = req.body;

  const isHuman = await verifyCaptcha(recaptchaToken);
  if (!isHuman) return res.status(403).json({ error: "reCAPTCHA failed" });

  // Proceed with signup logic
  res.json({ success: true });
});

router.post("/login", async (req, res) => {
  const { email, password, recaptchaToken } = req.body;

  const isHuman = await verifyCaptcha(recaptchaToken);
  if (!isHuman) return res.status(403).json({ error: "reCAPTCHA failed" });

  // Proceed with login logic
  res.json({ success: true });
});

module.exports = router;
