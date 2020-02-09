const mongoose = require('mongoose');

var QuestionSchema = mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  questionType: {
    type: String,
    default: 'N/A'
  }, //the type of question (star rating etc)
  questionID: {
    type: Number,
    default: 0
  }, //integer from 0-9 (since we will have a max of 10 questions) But we could extend this, since the order of the questions is stored in the array questions IDs would be generated starting at 0, and question ID's would be static.
  prompt: {
    type: String,
    default: 'No Prompt'
  } //Prompt for the question.
}, {
  collection: 'Question',
  discriminatorKey: '_type'
});

//Compile schema to model and export it
module.exports = QuestionSchema;