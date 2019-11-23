//var ObjectId = require('mongodb').ObjectId; //ObjectId is part of mongoDB. Allows us to use mongo's id generation.
const mongoose = require('mongoose');

// define Schema
class SurveySchema extends mongoose.Schema {
  constructor(obj, options) {
    super(obj, options);
    this.add({
      title: String,
      _id: Schema.ObjectId,
      owner: String,
      published: Boolean, // boolean if the survey is published or not.
      creationTime: Date,
      questions: [QuestionSchema], //contains an array of different question objects. 
      // Position in array would be the order of the questions.
      trigger: TriggerSchema // trigger object containing trigger definition
    });
  }
}

class QuestionSchema extends mongoose.Schema {
  constructor(obj, options) {
    super(obj, options);
    this.add({
      type: String, //the type of question (star rating etc)
      questionID: Schema.ObjectId, //integer from 0-9 (since we will have a max of 10 questions)
      prompt: String //Prompt for the question.
    });
  }
}

class SurveyResponseSchema extends mongoose.Schema {
  constructor(obj, options) {
    super(obj, options);
    this.add({
      _id: Schema.ObjectId, //unique ID for the specific survey response
      surveyID: Schema.ObjectId, //Unique ID for the parent survey that this is a response to
      creationTime: Date,
      answers: [AnswerSchema]
    });
  }
}

class AnswerSchema extends mongoose.Schema {
  constructor(obj, options) {
    super(obj, options);
    this.add({
      type: String, // the type of the question that this is an answer to.
      questionID: Schema.ObjectId, // ID of the question it is responding to
    });
  }
}

class StarResponseAnswerSchema extends AnswerSchema {
  constructor(obj, options) {
    super(obj, options);
    this.add({
      stars: Number //integer from 1-5 for the number of stars
    });
  }
}

class TriggerSchema extends mongoose.Schema {
  constructor(obj, options) {
    super(obj, options);
    this.add({
      type: String, // the type of trigger
      definition: TriggerDefinition // sub-object that contains data related to the type.
    });
  }
}

class TimerTriggerSchema extends Trigger {
  constructor(obj, options) {
    super(obj, options);
    this.add({
      timer: Number //integer > 0 for timer in ms
    });
  }
}

// compile schema to model and export.
module.exports = {
  SurveyModel: mongoose.model('Survey', SurveySchema, 'Survey'),
  QuestionModel: mongoose.model('Question', QuestionSchema),
  SurveyResponseModel: mongoose.model('Question', SurveyResponseSchema),
  AnswerModel: mongoose.model('Question', AnswerSchema),
  StarResponseAnswerModel: mongoose.model('Question', StarResponseAnswerSchema),
  TriggerModel: mongoose.model('Question', TriggerSchema),
  TimerTriggerModel: mongoose.model('Question', TimerTriggerSchema),
}