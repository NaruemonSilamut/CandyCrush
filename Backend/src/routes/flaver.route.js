const express = require('express');
const { getFlavors, createFlavor } = require('../controller/FlavorController');
const router = express.Router();

// Get all flavors for a specific ice cream
router.get('/flavors/:iceCreamId', getFlavors);

// Create a new flavor for an ice cream
router.post('/flavors', createFlavor);

module.exports = router;
