var mongoose = require('mongoose');

mongoose.connect('mongodb://flights:flights1234@ds061611.mongolab.com:61611/flights');

module.exports = mongoose.connection;