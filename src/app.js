require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  // Import cors
const logger = require('./middleware/logger');
const routes = require('./routes/index');

const app = express();

app.use(bodyParser.json());
app.use(cors());  
app.use(logger);
app.use('/api', routes);

module.exports = app;
