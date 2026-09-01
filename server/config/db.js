const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connStr = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/robotics_portfolio';
    await mongoose.connect(connStr, {
      serverSelectionTimeoutMS: 2000
    });
    console.log(`[MongoDB] Connected successfully: ${mongoose.connection.host}`);
  } catch (error) {
    console.warn(`[MongoDB Warning] Could not connect to external MongoDB instance: ${error.message}`);
    console.log('[Database] Falling back to high-performance in-memory data repository.');
  }
};

module.exports = connectDB;
