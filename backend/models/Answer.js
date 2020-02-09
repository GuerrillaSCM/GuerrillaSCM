/*
 THis file is the description of the abstract type of Answer
 All the other kinds of answers 'inherit' from this file

 New types need to be added to the answerFactor.js file to be compiled as models with discriminators included.
 look at AnswerFactory.js for an example of what this looks like
*/

const mongoose = require('mongoose');

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

module.exports = AnswerSchema; //compile to a model for the Answer collection in the database
// This should be scoped to the entire environment after creation, bound to the current mongoose instance.