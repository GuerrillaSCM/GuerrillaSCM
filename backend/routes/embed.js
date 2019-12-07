const express = require('express');
const router = express.Router();

// Returns the embedded survey for 3rd party websites

// This is where we want to return the a massive file with all the required things to run a react app within a browser. 
// We need to create a single .js file that can be statically sent to be included in the script tag.
// THis script needs to be responsible for grabbing the surveyID and making API calls to recieve the survey definition and display the question to the user on survey pop.

router.get('/:surveyID', function (req, res) { 
    res.send('hello world')
})

module.exports = router;