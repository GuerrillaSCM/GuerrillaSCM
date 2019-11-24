const express = require('express');
const router = express.Router();

const ObjectId = require('mongoose').Types.ObjectId;
const Survey = require('../models/Survey');
const Question = require('../models/Question');
const Trigger = require('../models/Trigger');

/*************************************************************************************
    HTTP Requests for userIDs
**************************************************************************************/

/*
    Get all surveys for a specific user
*/
router.get('/user/:userID', function (req, res) {
  res.send('this is the GET /user/:userID ')
})

/*
    add a new survey
*/
router.post('/user/:userID', function (req, res) {

  var oldBody = JSON.parse(JSON.stringify(req.body)); //ghetto deep copy
  body = req.body; //refer to req.body so its more clear in the rest of the function.

  delete body['questions']; //remove questions and triggers because mongoose is weird with saving arrays. "cannot convert type 'Array' to 'Array'" like wtf
  delete body['trigger'];

  survey = new Survey(body);
  survey.owner = req.params.userID; //setting the ownerID from the URL parameter

  if (oldBody.questions != null) {
    oldBody.questions.forEach(question => { // we need to push each question into the array so that it will get saved properly by mongoose
      survey.questions.push(Question(question));
      console.log(survey.questions);
    });
    survey.questions.forEach(question => {
      question.save(function (err, result) {
        if (err) {
          return console.error(err);
        }
        console.log("saved question with id: " + question._id);
      })
    });
  }

  if (oldBody.trigger != null) {
    oldBody.trigger.forEach(trigger => { // we need to push each question into the array so that it will get saved properly by mongoose
      survey.trigger.push(Trigger(trigger));
    });
  }

  // Save the survey
  survey.save(function (err, result) {
    if (err) {
      res.send('Error inserting survey with title ' + survey.title)
      return console.error(err);
    }
    res.send(result._id + ' Inserted into database')
    console.log(result + " saved to Survey collection.");
  });

})


/*************************************************************************************
    HTTP Requests for surveys
**************************************************************************************/

/*
    Adding a new survey
*/
router.get('/survey/:surveyID', function (req, res) {

  Survey
    .findById(req.params.surveyID)
    .populate('questions') // only works if we pushed refs to survey.questions
    .populate('trigger')
    .exec(function (err, survey) {
      if (err) return res.send(err);
      res.send(survey);
    });

  // res.send('this is the GET /survey/:surveyID ')
})

/*
    Update survey
*/
router.put('/survey/:surveyID', function (req, res) {
  res.send('this is the survey/:surveyID');
})

router.delete('/survey/:surveyID', function (req, res) {
  res.send('/survey/:surveyID')
})

module.exports = router;