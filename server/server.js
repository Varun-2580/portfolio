const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect Database
connectDB();

// API Routes
app.use('/api/v1/projects', require('./routes/projectRoutes'));
app.use('/api/v1/contact', require('./routes/contactRoutes'));
app.use('/api/v1/admin', require('./routes/adminRoutes'));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'MERN Robotics API Server Active' });
});

// Serve client build if available
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'));
  });
}

const PORT = process.env.PORT || 5180;

app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`[MERN Stack API] Server running on port ${PORT}`);
  console.log(`[API Target Endpoint] http://localhost:${PORT}/api/v1/projects`);
  console.log(`====================================================`);
});
