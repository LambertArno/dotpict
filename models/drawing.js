
// Dependencies

var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var drawingSchema = new mongoose.Schema({
  drawingBase64: String
});


// Return model
module.exports = restful.model('Drawings', drawingSchema);
