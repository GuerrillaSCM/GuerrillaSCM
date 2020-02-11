const Schema = require('mongoose').Schema;

module.exports = new Schema({ //store the comment response to a question
  MutltipleChoiceSelection: { //the number of the entry in the multiple choice array that the user selected.
    type: Number,
    default: null
  }
});