const mongoose = require('mongoose');
// const Question = require('./Question').schema; // Might want to just include a reference to the question in the collection.

class AnswerSchema extends mongoose.Schema {
  constructor(obj, options) {
    super(obj, options);
    this.add({
      type: {
        type: String,
        default: 'N/A'
      }, // the type of the question that this is an answer to.
      questionID: {
        type: Number,
        default: 0
      }, // ID of the question it is responding to
    });
  }
}

module.exports = mongoose.model('Answer', new AnswerSchema(), 'Answer');