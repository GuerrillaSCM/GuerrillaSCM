/*
    GuerrillaSCM Fall 2019
    File: app.js
*/

const express = require('express');
const cors = require('cors') //used to allow cross-origin support
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const responseRoutes = require('./routes/response');
const surveyRoutes = require('./routes/survey');
const embeddedRoutes = require('./routes/embed');
const memeRoutes = require('./routes/meme');


// use the bodyparser so we can see what is inside of the body of HTTP requests we recieve
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(cors());

// Routing API end point assignments
app.use('/api/response/', responseRoutes);
app.use('/api/survey/', surveyRoutes);
app.use('/api/embed/', embeddedRoutes);
app.use('/meme/', memeRoutes);

app.use((req, res, next) => {
  res.status(404).send('<h1>404: Page Not Found<\h1.');
});

// This is the uri of the database hosted in MongoDB atlas.
const uri = "mongodb+srv://testing:MtfzES1ZWSOZnl13@guerrillascm-rk5d5.mongodb.net/GuerrillaSCM?retryWrites=true&w=majority";

// uri for connecting to a local databse. This is helpful for debunning without having to wait for the slow MongoDB atlas page reloads
const uriLocal = "mongodb://localhost:27017";

mongoose.connect(uriLocal, {
  useNewUrlParser: true,
  useFindAndModify: false
}).then(result => {
  app.listen(3000); //Listens for requests (asynchronous!)
  console.log('API running on port: ' + 3000);
}).catch(err => {
  console.log(JSON.stringify(err));
});
