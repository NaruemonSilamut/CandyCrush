const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const flavorRoute = require('./routes/flavor.route');

// Middleware
app.use(bodyParser.json());

// API Routes
app.use('/api', flavorRoute);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
