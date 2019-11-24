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
    res.send('this is the GET /user/:userID ')
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