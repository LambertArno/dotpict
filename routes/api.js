
// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Drawing = require('../models/drawing');

// routes
Drawing.methods(['get', 'put', 'post', 'delete']);
Drawing.register(router, '/drawings');

// Return Router
module.exports = router;
