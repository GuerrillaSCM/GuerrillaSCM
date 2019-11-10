/*
    CptS 489, Spring 2019
    Project: Task Tracker
    File: server.js
*/

var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/meme/', function (req, res) {
    console.log("This bitch aint emtpy, anti-yeet!")
  res.send('yeetus deletus')
})

app.listen(3000); //Listens for requests (asynchronous!)

console.log('djfgdksfadskjfahlksdhflkahsdlkjfhalksdhf API running on port: ' + 3000);
