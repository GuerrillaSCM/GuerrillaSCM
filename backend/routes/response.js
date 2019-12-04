const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Response = require('../models/SurveyResponse');
const Answer = require('../models/Answer')

/*************************************************************************************
    HTTP Requests for individual responses
    Description: data from a single response
**************************************************************************************/

/*
    update a response. Also wont do this, but we can outline the function
*/
router.post('/response/:responseID', function (req, res) { 
    body = req.body;
    surveyResponse = Response(body);

    var sID = mongoose.Types.ObjectId(req.body.surveyID);
    surveyResponse.surveyID = sID;
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
    
    surveyResponse.save(function(err, results){
        if (err)  {
            return console.error(err);
          }
          console.log("saved to surveyResponse.");
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
    res.send('hello world')
})

/*
    Used when posting a new response to a specific survey
*/
router.post('/survey/:surveyID', function (req, res) { 
    res.send('hello world')
}) 

module.exports = router;