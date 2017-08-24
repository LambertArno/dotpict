// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// MongoDB
mongoose.connect('mongodb://admin:admin@ds157833.mlab.com:57833/dotpict');

// Express
var app = express();
app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));

// Routes
app.use('/api', require('./routes/api'));

// Start Server
app.listen(3000);
console.log('API is running on port 3000');
