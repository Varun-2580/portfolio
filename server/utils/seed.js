const mongoose = require('mongoose');
const Project = require('../models/Project');
const initialProjects = require('./seedData');
const connectDB = require('../config/db');
require('dotenv').config();

const seedDatabase = async () => {
  try {
    await connectDB();
    if (mongoose.connection.readyState === 1) {
      await Project.deleteMany({});
      await Project.insertMany(initialProjects);
      console.log('✔ MongoDB Seeded successfully with Robotics Projects!');
    } else {
      console.log('MongoDB not connected; seed data will be served via in-memory provider.');
    }
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
