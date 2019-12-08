const express = require('express');
const router = express.Router();

const Survey = require('../models/Survey');
const Question = require('../models/Question');

//Example get function that tests using the schema
router.get(':test', function (req, res) {
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

module.exports = router;