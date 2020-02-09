/*
    This file handles the routing to relevant controller functions
*/

const express = require('express');
const router = express.Router();

const responseController = require('../Controllers/response');

/*************************************************************************************
    HTTP Requests for individual responses
    Description: data from a single response
**************************************************************************************/

/*
    update a response. Also wont do this, but we can outline the function
*/
router.post('/response/:responseID', responseController.postResponseGivenResponseID)

/*
    delete a single response, probably wont do this but we can write the function
*/
router.delete('/response/:responseID', responseController.deleteResponseGivenReponseID) 

/*************************************************************************************
    HTTP Requests for survey responses
    Description: single survey with a given ID
**************************************************************************************/

/*
    This is one that me might want to think about paginating the responses in some way in the future, 
    but for a start it should be fine to get all the data at once
*/
router.get('/survey/:surveyID', responseController.getResponseFromResponseID)

/*
    Should post a new response to a specific survey
*/
router.post('/survey/:surveyID', responseController.postResponseGivenSurveyID) 

module.exports = router;