const express = require('express');
const router = express.Router();
const validateRequest = require('../middleware/validate');
const authenticate = require('../middleware/authenticate');


router.post('/login', validateRequest, authenticate, (req, res) => {
  // This code will only run if validation passes and JWT is generated
  res.json({ message: 'Login successful!' });
});


router.get('/', (req, res) => {
  res.send('Hello, World!');
});

module.exports = router;
