const Schema = require('mongoose').Schema;

module.exports = StarQuestion = new Schema({ //integer from 1-5 for the number of stars -- we probably want to customize this in the future to be out of however many stars we want
  stars: { //defines the number of stars you want the user to be able to select to show in their survey (i.e. 3, 5, 10)
    type: Number,
    default: null
  }
});