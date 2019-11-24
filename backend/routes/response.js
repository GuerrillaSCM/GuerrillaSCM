const express = require('express');
const router = express.Router();

const Response = require('../models/SurveyResponse');

/*************************************************************************************
    HTTP Requests for individual responses
    Description: data from a single response
**************************************************************************************/

/*
    update a response. Also wont do this, but we can outline the function
*/
router.put('/response/:responseID', function (req, res) { 
    surveyResponse = Response(req.body);
    
    surveyResponse.Save(function(error, results){
        if (err) {
            res.send('Error inserting response with title ' + survey.title)
            return console.error(err);
          }
          res.send(result._id + ' Inserted into database')
          console.log(res.surveyID + " saved to Survey collection.");
    });
    res.send('hello world');
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