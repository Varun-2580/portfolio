const mongoose = require('mongoose');

const InquirySchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  subject: { type: String, default: 'General Inquiry' },
  message: { type: String, required: true },
  ipAddress: { type: String },
  status: { type: String, enum: ['UNREAD', 'READ', 'RESPONDED'], default: 'UNREAD' }
}, { timestamps: true });

module.exports = mongoose.models.Inquiry || mongoose.model('Inquiry', InquirySchema);
