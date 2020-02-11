const Schema = require('mongoose').Schema;

module.exports = new Schema({ //integer from 1-5 for the number of stars -- we probably want to customize this in the future to be out of however many stars we want
  stars: {
    type: Number,
    default: null
  }
});