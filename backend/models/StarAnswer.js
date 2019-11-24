const mongoose = require('mongoose');
const Answer = require('./Answer.js').schema;

class StarAnswerSchema extends Answer {
  constructor(obj, options) {
    super(obj, options);
    this.add({
      stars: Number //integer from 1-5 for the number of stars
    });
  }
}

module.exports = mongoose.model('StarAnswer', new StarAnswerSchema(), 'Answer');