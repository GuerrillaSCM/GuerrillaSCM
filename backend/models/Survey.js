const mongoose = require('mongoose');
const Question = require('./Question.js').schema;
const Trigger = require('./Trigger.js').schema;

// define Schema
class SurveySchema extends mongoose.Schema {
  constructor(obj, options) {
    super(obj, options);
    this.add({
      title: String,
      // _id: mongoose.Schema.ObjectId,
      owner: String, //This will get changes to an ObjectID when we hav a user in the model
      published: Boolean, // boolean if the survey is published or not.
      creationTime: Date,
      questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
      }], //contains an array of different question objects. 
      // Position in array would be the order of the questions.
      trigger: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Trigger'
      }] // trigger object containing trigger definition
    });
  }
}

//Compile schema to model and export it
module.exports = mongoose.model('Survey', new SurveySchema(), 'Survey');