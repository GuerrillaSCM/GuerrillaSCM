/*
    GuerrillaSCM Fall 2019
    File: app.js
*/

const express = require('express')
const app = express()
const path = require('path')

const responseRoutes = require('./routes/response');
const surveyRoutes = require('./routes/survey');
const embeddedRoutes = require('./routes/embed');
const memeRoutes = require('./routes/meme');
const mongoose = require('mongoose');

const Survey = require('./models/Survey');
const Question = require('./models/Question');

const uri = "mongodb+srv://testing:oeXeGlFbH8U1uEjA@guerrillascm-rk5d5.mongodb.net/GuerrillaSCM?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true
});

// get reference to database
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

app.locals.db = db; // save the databse somehwere that it can be accessed globally if needed. Not ideal!

db.once('open', function () {
  console.log("Connection Successful!");
});

// Routing API end point assignments
app.use('/api/response/', responseRoutes);
app.use('/api/survey/', surveyRoutes);
app.use('/api/embed/', embeddedRoutes);
app.use('/meme/', memeRoutes);

app.use((req, res, next) => {
  res.status(404).send('<h1>404: Page Not Found<\h1.');
});


app.listen(3000); //Listens for requests (asynchronous!)
console.log('API running on port: ' + 3000);


//Example get function that tests using the schema
app.get('/meme/:test', function (req, res) {
  console.log("This bitch aint emtpy, anti-yeet!")

  var meme1 = Survey({
    title: "MemeTest" + req.params.test,
    owner: "TestID",
    published: false,
    creationTime: new Date(),
    questions: [{
      type: "CommentBox",
      questionID: 0, 
      prompt: "What do you think about memes?" 
    }], 
    trigger: null
  });

  meme1.save(function (err, insertion) {
    if (err) return console.error(err);
    console.log(insertion.title + " saved to meme collection.");
  });

  res.send('yeetus deletus')
})
