const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const rateLimit = require('express-rate-limit');
const { submitInquiry } = require('../controllers/contactController');

// Rate limiting on contact form: Max 5 submissions per 15 minutes per IP
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { success: false, message: 'Too many contact requests from this IP address. Please try again after 15 minutes.' }
});

router.post(
  '/',
  [
    contactLimiter,
    check('name', 'Name field is required').not().isEmpty().trim().escape(),
    check('email', 'Valid email address is required').isEmail().normalizeEmail(),
    check('message', 'Message content is required').not().isEmpty().trim().escape()
  ],
  submitInquiry
);

module.exports = router;
