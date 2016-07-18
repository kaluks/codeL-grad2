'use strict';
var mongoose = require('mongoose');

var contactlistSchema = new mongoose.Schema({
  name:String,
  equipment:String,
  number:String,
  office:String
});
var model = mongoose.model('Contactlist', contactlistSchema);

module.exports = model;
