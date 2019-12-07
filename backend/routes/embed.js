const express = require('express');
const router = express.Router();

const surveyController = require('../Controllers/survey')

// Returns the embedded survey for 3rd party websites
router.get('/:surveyID', surveyController.getSurveyGivenSurveyID)

module.exports = router;