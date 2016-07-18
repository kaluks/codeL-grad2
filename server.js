'use strict';
var express=require('express');

var app= express();
var router = require('express').Router();


var mongoose = require('mongoose');
var Contactlist = require('./models/contactlist.js');
require('./seed.js');
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
    console.log(contactlist);
    res.json({contactlist});
  });
});

app.post('/contactlist', function (req, res) {
    	var contact = {
    		name: req.body.name,
    		equipment: req.body.equipment,
    		number: req.body.number,
        office: req.body.office};
      Contactlist.create(contact,function(err,contact){
        res.json({contact:contactlist});
      });
      });


  app.listen(3000, function(){
        console.log('server running on 3000');
      });



  //dummy-data below deleted upon connecting to database
  // var staff1= {
  //   name: 'GretchenM',
  //   equipment: 'the good AFOs',
  //   number: '1-502-555-9087',
  //   office: 'at large'
  // };
  // var staff2= {
  //   name: 'NancyW',
  //   equipment: 'endless paperclips',
  //   number: '1-502-555-4920',
  //   office: 'Bishop'
  // };
  // var staff3= {
  //   name: 'Taylor',
  //   equipment: 'TARDIS',
  //   number: 'somewhere in spaceTime',
  //   office: 'see equipment'
  // };
  // var contactlist = [staff1, staff2, staff3];
  // res.json(contactlist);

//to insert record in mongodb, example: db.contactlist.insert({name:'Thomas', equipment: 'scissors', number:'unlisted', office:'Sheph'})
