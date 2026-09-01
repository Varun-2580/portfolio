const Inquiry = require('../models/Inquiry');
const { validationResult } = require('express-validator');

const memoryInquiries = [];

// POST /api/v1/contact
exports.submitInquiry = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  try {
    const { name, email, subject, message } = req.body;
    const ipAddress = req.ip || req.headers['x-forwarded-for'] || '127.0.0.1';

    const newInquiryData = {
      name,
      email,
      subject: subject || 'General Inquiry',
      message,
      ipAddress,
      status: 'UNREAD',
      createdAt: new Date()
    };

    if (Inquiry.db && Inquiry.db.readyState === 1) {
      const inquiry = await Inquiry.create(newInquiryData);
      console.log(`[Contact API] Stored new contact inquiry from ${name} (${email})`);
      return res.status(201).json({
        success: true,
        message: 'Inquiry submitted successfully! Pyla Amruth Varun will get back to you shortly.',
        data: inquiry
      });
    }

    memoryInquiries.push(newInquiryData);
    console.log(`[Contact API] Recorded inquiry in memory from ${name} (${email})`);

    res.status(201).json({
      success: true,
      message: 'Inquiry transmitted successfully! Pyla Amruth Varun will respond promptly.',
      data: newInquiryData
    });
  } catch (error) {
    console.error('Error submitting inquiry:', error);
    res.status(500).json({ success: false, message: 'Server error processing contact inquiry' });
  }
};
