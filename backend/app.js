/*
    GuerrillaSCM Fall 2019
    File: app.js
*/

const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const path = require('path');

const responseRoutes = require('./routes/response');
const surveyRoutes = require('./routes/survey');
const embeddedRoutes = require('./routes/embed');
const memeRoutes = require('./routes/meme');

const mongoose = require('mongoose');

// use the bodyparser so we can see what is inside of the body of HTTP requests we recieve
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// Routing API end point assignments
app.use('/api/response/', responseRoutes);
app.use('/api/survey/', surveyRoutes);
app.use('/api/embed/', embeddedRoutes);
app.use('/meme/', memeRoutes);

app.use((req, res, next) => {
  res.status(404).send('<h1>404: Page Not Found<\h1.');
});

const uri = "mongodb+srv://testing:oeXeGlFbH8U1uEjA@guerrillascm-rk5d5.mongodb.net/GuerrillaSCM?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true
}).then(result => {
  app.listen(3000); //Listens for requests (asynchronous!)
  console.log('API running on port: ' + 3000);
}).catch(err => {
  console.log(err);
});