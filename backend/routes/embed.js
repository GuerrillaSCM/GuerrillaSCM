const express = require('express');
const router = express.Router();

// Returns the embedded survey for 3rd party websites
router.get('/:surveyID', function (req, res) { 
    res.send('hello world')
})

module.exports = router;