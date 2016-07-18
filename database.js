'use strict';
var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/contactlist', function(err){
  if(err){
    console.log('Failed connecting db with mongoose.');
  } else { console.log('You are connected to Mongodb!');
}
});
