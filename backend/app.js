const express = require('express')
const app = express()
const path = require('path')

const responseRoutes = require('./routes/response');
const surveyRoutes = require('./routes/survey');
const embeddedRoutes = require('./routes/embed');
const memeRoutes = require('./routes/meme');


// Routing API end point assignments
app.use('/api/response/', responseRoutes);
app.use('/api/survey/', surveyRoutes);
app.use('/api/embed/', embeddedRoutes);
app.use('/meme/', memeRoutes);

app.use((req, res, next) => {
  res.status(404).send('<h1>404: Page Not Found<\h1.');
});


app.listen(3000); //Listens for requests (asynchronous!)