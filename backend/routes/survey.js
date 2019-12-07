/*
    This file handles all of the specific routing for each api endpoint. 
*/

const express = require('express');
const router = express.Router();

const surveyController = require('../Controllers/survey');

/*************************************************************************************
    HTTP Requests with  userIDs
**************************************************************************************/

/*
    Get all surveys for a specific user
*/
router.get('/user/:userID', surveyController.getAllSurveysGivenUserID);

/*
    add a new survey
*/
router.post('/user/:userID', surveyController.postSurveyGivenUserID);


/*************************************************************************************
    HTTP Requests with SurveyID
**************************************************************************************/

/*
    Adding a new survey
*/
router.get('/survey/:surveyID', surveyController.getSurveyGivenSurveyID);

/*
    Update survey
*/
router.put('/survey/:surveyID', surveyController.putSurveyGivenSurveyID);

/*
    Update Survey
*/
router.delete('/survey/:surveyID', surveyController.deleteSurveyGivenSurveyID);

module.exports = router;