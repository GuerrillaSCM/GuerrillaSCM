const express = require('express');
const router = express.Router();

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
    survey = Survey(req.body);
    survey.owner = req.params.userID;

    survey.questions.forEach(element => {
        survey.questions
      });

    survey.save(function (err, result) {
        if (err) {
            res.send('Error inserting survey with title ' + survey.title)
            return console.error(err);
        }
        res.send(result._id + ' Inserted into database')
        console.log(res.title + " saved to Survey collection.");
      });
    
})


/*************************************************************************************
    HTTP Requests for surveys
**************************************************************************************/

/*
    Adding a new survey
*/
router.get('/survey/:surveyID', function (req, res) { 
    res.send('this is the GET /survey/:surveyID ')
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