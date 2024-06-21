const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticate = (req, res, next) => {
  const { email } = req.body;

  const secretKey = process.env.JWT_SECRET || 'your_jwt_secret_key';
  if (!secretKey) {
    return res.status(500).json({ error: 'JWT_SECRET is not defined' });
  }

  // Generate JWT token
  const token = jwt.sign({ email }, secretKey, { expiresIn: '15m' });

  // Send response with token
  res.json({ message: 'Authentication successful!', token });
};

module.exports = authenticate;
