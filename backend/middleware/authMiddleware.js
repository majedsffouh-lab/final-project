const jwt = require('jsonwebtoken');
const User = require('../models/User');

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      error: 'Access denied. No token provided.'
    });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || 'my_secret_key'
    );

    req.user = decoded;
    next();

  } catch (err) {
    return res.status(403).json({
      error: 'Invalid or expired token.'
    });
  }
};

const verifyAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        error: 'User not found.'
      });
    }

    if (user.role !== 'admin') {
      return res.status(403).json({
        error: 'Access denied. Admins only.'
      });
    }

    req.user.role = user.role;
    next();

  } catch (err) {
    return res.status(500).json({
      error: 'Server error while checking admin permissions.'
    });
  }
};

module.exports = { verifyToken, verifyAdmin };