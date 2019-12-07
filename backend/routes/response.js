const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Response = require('../models/SurveyResponse');
const Survey = require('../models/Survey');
const Answer = require('../models/Answer')

/*************************************************************************************
    HTTP Requests for individual responses
    Description: data from a single response
**************************************************************************************/

/*
    update a response. Also wont do this, but we can outline the function
*/
router.post('/response/:responseID', function (req, res) { 
    surveyResponse = Response(req.body);
    surveyResponse.surveyID = mongoose.Types.ObjectId(surveyResponse.surveyID);

    var answers = JSON.parse(JSON.stringify(surveyResponse.answers));

    if (answers != null) {
        answers.forEach(answer => { // we need to push each question into the array so that it will get saved properly by mongoose
            var a = Answer(answer);
            a.save(function (err, result) {
              if (err) {
                return console.error(err);
              }
              console.log("answer saved to Survey collection.");
            });
        });
    }
    
    surveyResponse.save(function (err, result) {
        if (err) {
          return console.error(err);
        }
        res.send(surveyResponse.surveyID + ' Inserted into database')
        console.log(surveyResponse.surveyID + " saved to Survey collection.");
      });
})

/*
    delete a single response, probably wont do this but we can write the function
*/
router.delete('/response/:responseID', function (req, res) { 
    res.send('hello world')
}) 

/*************************************************************************************
    HTTP Requests for survey responses
    Description: single survey with a given ID
**************************************************************************************/

/*
    This is one that me might want to think about paginating the responses in some way in the future, 
    but for a start it should be fine to get all the data at once
*/
router.get('/survey/:surveyID', function (req, res) { 
    Response
    .find(
        {
            surveyID: req.params.surveyID
        }
    )
    .exec(function (err, reponse) {
        if (err) return res.send(err);
        res.send(reponse);
      });
})

/*
    Used when posting a new response to a specific survey
*/
router.post('/survey/:surveyID', function (req, res) { 
    surveyResponse = Response(req.body);
    surveyResponse.surveyID = mongoose.Types.ObjectId(req.params.surveyID);

    var answers = JSON.parse(JSON.stringify(surveyResponse.answers));

    if (answers != null) {
        answers.forEach(answer => { // we need to push each question into the array so that it will get saved properly by mongoose
            var a = Answer(answer);
            a.save(function (err, result) {
              if (err) {
                return console.error(err);
              }
              console.log("answer saved to Survey collection.");
            });
        });
    }
    
    surveyResponse.save(function (err, result) {
        if (err) {
          return console.error(err);
        }
        res.send(surveyResponse.surveyID + ' Inserted into database')
        console.log(surveyResponse.surveyID + " saved to Survey collection.");
      });
}) 

module.exports = router;