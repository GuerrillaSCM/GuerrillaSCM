const mongoose = require('mongoose');
const Answer = require('./Answer.js');

var options = {
  collection: 'Answer', //sepcify that all answers are saved in the answer collection
  discriminatorKey: 'answerType' // we define the discriminator to be the answerType in the model
}

var StarAnswer = Answer.discriminator('StarAnswer',
  new mongoose.Schema({ //integer from 1-5 for the number of stars -- we probably want to customize this in the future to be out of however many stars we want
    stars: {
      type: Number,
      default: null
    }
  }));

module.exports = StarAnswer; // name of model, schema for model, and then collection to be saved to.