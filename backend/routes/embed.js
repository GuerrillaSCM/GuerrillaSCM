const express = require('express');
const router = express.Router();

const surveyController = require('../Controllers/survey')

// Returns the embedded survey for 3rd party websites
router.get('/:surveyID', surveyController.getSurveyGivenSurveyID)


// This is where we want to return the a massive file with all the required things to run a react app within a browser. 
// We need to create a single .js file that can be statically sent to be included in the script tag.
// THis script needs to be responsible for grabbing the surveyID and making API calls to recieve the survey definition and display the question to the user on survey pop.

module.exports = router;