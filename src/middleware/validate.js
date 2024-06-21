const validateRequest = (req, res, next) => {
  const { name, age } = req.body;
  if (!name || typeof name !== 'string') {
    return res.status(400).json({ error: 'Name is required and should be a string' });
  }
  if (!age || typeof age !== 'number') {
    return res.status(400).json({ error: 'Age is required and should be a number' });
  }
  next();
};

module.exports = validateRequest;
