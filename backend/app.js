/*
    CptS 489, Spring 2019
    Project: Task Tracker
    File: server.js
*/

var express = require('express');
var app = express();

const mongoose = require('mongoose');
const Survey = require('./models/Survey');
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
});


app.listen(3000); //Listens for requests (asynchronous!)

console.log('API running on port: ' + 3000);


app.get('/meme/:test', function (req, res) {
  console.log("This bitch aint emtpy, anti-yeet!")

  var meme1 = Survey({
    title: "MemeTest" + req.params.test,
    owner: "TestID",
    published: false, // boolean if the survey is published or not.
    creationTime: new Date(),
    questions: [], //contains an array of different question objects. 
    // Position in array would be the order of the questions.
    trigger: null // trigger object containing trigger definition
  });

  meme1.save(function (err, insertion) {
    if (err) return console.error(err);
    console.log(insertion.title + " saved to meme collection.");
  });

  res.send('yeetus deletus')
})