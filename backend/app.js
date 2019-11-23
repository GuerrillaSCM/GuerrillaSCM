/*
    CptS 489, Spring 2019
    Project: Task Tracker
    File: server.js
*/

var express = require('express');
var app = express();

const mongoose = require('mongoose');
const schemas = require('./models/Survey');
const uri = "mongodb+srv://testing:oeXeGlFbH8U1uEjA@guerrillascm-rk5d5.mongodb.net/GuerrillaSCM?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true
});

// get reference to database
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

app.locals.db = db;





db.once('open', function () {
  console.log("Connection Successful!");

  // define Schema
  var MemeMarket = mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number
  });

  // compile schema to model
  var Meme = mongoose.model('Meme', MemeMarket, 'Survey');

  // a document instance
  var meme1 = new Meme({
    name: 'Admantium pepe',
    price: 10,
    quantity: 25
  });

  // save model to database
  meme1.save(function (err, meme) {
    if (err) return console.error(err);
    console.log(meme.name + " saved to meme collection.");
  });

});


app.listen(3000); //Listens for requests (asynchronous!)

console.log('API running on port: ' + 3000);


app.get('/meme/:test', function (req, res) {
  console.log("This bitch aint emtpy, anti-yeet!")

  var meme1 = new schemas.Survey({
    title: "MemeTest" + req.params.id,
    owner: "TestID",
    published: false, // boolean if the survey is published or not.
    creationTime: new Date(),
    questions: [], //contains an array of different question objects. 
    // Position in array would be the order of the questions.
    trigger: null // trigger object containing trigger definition
  });

  meme1.save(function (err, meme) {
    if (err) return console.error(err);
    console.log(meme.name + " saved to meme collection.");
  });

  res.send('yeetus deletus')
})