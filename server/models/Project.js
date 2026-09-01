const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  category: {
    type: String,
    enum: ['Robotics', 'CAD/DFM', 'Automation', 'Biomedical', 'Avionics'],
    required: true
  },
  shortDescription: { type: String, required: true },
  fullDescription: { type: String },
  toolsUsed: [{ type: String }],
  keyOutcomes: [{ type: String }],
  media: {
    thumbnailUrl: { type: String },
    cadRenders: [{ type: String }],
    videoDemoUrl: { type: String }
  },
  links: {
    github: { type: String },
    cadLibrary: { type: String },
    liveDemo: { type: String }
  },
  featured: { type: Boolean, default: false },
  orderIndex: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.models.Project || mongoose.model('Project', ProjectSchema);
