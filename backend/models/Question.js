const mongoose = require('mongoose');

class QuestionSchema extends mongoose.Schema {
  constructor(obj, options) {
    super(obj, options);
    this.add({
      type: String, //the type of question (star rating etc)
      questionID: Number, //integer from 0-9 (since we will have a max of 10 questions) But we could extend this, since the order of the questions is stored in the array questions IDs would be generated starting at 0, and question ID's would be static.
      prompt: String //Prompt for the question.
    });
  }
}

//Compile schema to model and export it
module.exports = mongoose.model('Question', new QuestionSchema(), 'Question');