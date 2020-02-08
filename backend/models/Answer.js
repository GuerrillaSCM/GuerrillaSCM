const mongoose = require('mongoose');
// const Question = require('./Question').schema; // Might want to just include a reference to the question in the collection.

var AnswerSchema = mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  answerType: {
    type: String,
    default: 'N/A'
  }, // the type of the question that this is an answer to.
  questionID: {
    type: Number,
    default: 0
  }, // ID of the question it is responding to
  stars: {
    type: Number,
    default: null
  } //integer from 1-5 for the number of stars
}, {
  collection: 'Answer',
  discriminatorKey: '_type'
});

module.exports = mongoose.model('Answer', AnswerSchema, 'Answer');