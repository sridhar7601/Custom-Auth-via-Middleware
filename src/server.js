// src/server.js
require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
