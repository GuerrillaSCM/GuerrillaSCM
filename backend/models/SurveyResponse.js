const mongoose = require('mongoose');
const Answer = require('./Answer.js').schema;

class SurveyResponseSchema extends mongoose.Schema {
  constructor(obj, options) {
    super(obj, options);
    this.add({
      // _id: Schema.ObjectId, //unique ID for the specific survey response
      surveyID: mongoose.Schema.ObjectId, //Unique ID for the parent survey that this is a response to
      creationTime: Date,
      answers: [{ // array of references to answers in the answeres collection.
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Answer'
      }]
    });
  }
}

module.exports = mongoose.model('SurveyResponse', new SurveyResponseSchema(), 'SurveyResponse');