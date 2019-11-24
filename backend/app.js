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