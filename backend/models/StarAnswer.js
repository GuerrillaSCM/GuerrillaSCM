const mongoose = require('mongoose'),
  extend = require('mongoose-schema-extend');
const Answer = require('./Answer.js').schema;

var StarAnswerSchema = Answer.extend({
  stars: {
    type: Number,
    default: null
  } //integer from 1-5 for the number of stars -- we probably want to customize this in the future to be out of however many stars we want
});

module.exports = mongoose.model('StarAnswer', StarAnswerSchema, 'Answer');