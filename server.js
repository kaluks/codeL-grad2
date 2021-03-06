'use strict';

var express=require('express');

var app= express();
var router = require('express').Router();

var mongoose = require('mongoose');
var Contactlist = require('./models/contactlist.js');
require('./seed.js');
require('./database.js');
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
// app.get('/', function(req,res){
//   res.send('hello world from server.js')
// });
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/contactlist', function(req, res){
  console.log('Received GET request.');
  Contactlist.find(function(err,contactlist){

  return res.json({contactlist});
  });
});

app.post('/contactlist', function (req, res) {
    	var contact = {
    		name: req.body.name,
    		equipment: req.body.equipment,
    		number: req.body.number,
        office: req.body.office};
      Contactlist.create(contact,function(err,contact){
        res.json({contact:contact});
      });
      });

// app.delete('/contactlist/:id', function (req, res) {
//         var id = req.params.id;
//         $scope.contactlist.remove({_id: contact.ObjectId(id)});
//       });
app.delete('/contactlist/:id', function(req, res) {
  var id = req.params.id;
  Contactlist.findByIdAndRemove(id, function(err, result) {
    if (err) {
      return res.status(500).json({ err: err.message });
    }
    res.json({ message: 'Staff Deleted' });
  });
});


  app.listen(3000, function(){
        console.log('server running on 3000');
      });

//to insert record via mongodb, example: db.contactlist.insert({name:'Thomas', equipment: 'scissors', number:'unlisted', office:'Sheph'})
