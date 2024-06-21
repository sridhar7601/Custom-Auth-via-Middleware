const express = require('express');
const router = express.Router();
const validateRequest = require('../middleware/validate');

router.post('/validate', validateRequest, (req, res) => {
  res.json({ message: 'Request is valid!' });
});

router.get('/', (req, res) => {
  res.send('Hello, World!');
});

module.exports = router;
