const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'robotics_secret_key_2026';

// POST /api/v1/admin/login
exports.loginAdmin = async (req, res) => {
  const { username, password } = req.body;
  
  // Simple default admin authentication
  if (username === 'admin' && (password === 'varun2026' || password === 'admin123')) {
    const token = jwt.sign({ id: 'admin-1', username: 'admin', role: 'engineer' }, JWT_SECRET, {
      expiresIn: '24h'
    });
    return res.status(200).json({
      success: true,
      token,
      message: 'Admin authentication successful'
    });
  }

  res.status(401).json({ success: false, message: 'Invalid admin credentials' });
};
