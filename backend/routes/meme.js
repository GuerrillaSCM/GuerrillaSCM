const express = require('express');
const router = express.Router();

router.use(function (req, res) {
    console.log("This bitch aint emtpy, anti-yeet!")
  res.send('yeetus deletus')
})

module.exports = router;