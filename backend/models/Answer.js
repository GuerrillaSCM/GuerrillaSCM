const mongoose = require('mongoose');
// const Question = require('./Question').schema; // Might want to just include a reference to the question in the collection.

var db = mongoose.connection;

var options = {
  collection: 'Answer', //sepcify that all answers are saved in the answer collection
  discriminatorKey: 'answerType' // we define the discriminator to be the answerType in the model
}

var AnswerSchema = new mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  answerType: {
    type: String,
    default: 'N/A'
  }, // the type of the question that this is an answer to.
  questionID: {
    type: Number,
    default: 0
  }, // ID of the question it is responding to
}, options);

var Answer = mongoose.model('Answer', AnswerSchema);

var StarAnswer = Answer.discriminator('StarRating',
  new mongoose.Schema({ //integer from 1-5 for the number of stars -- we probably want to customize this in the future to be out of however many stars we want
    stars: {
      type: Number,
      default: null
    }
  }));

module.exports = Answer; //compile to a model for the Answer collection in the database
// This should be scoped to the entire environment after creation, bound to the current mongoose instance. But this could be wrong