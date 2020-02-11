const Schema = require('mongoose').Schema;

module.exports = CommentBoxAnswer = new Schema({ //store the comment response to a question
  text: {
    type: String,
    default: null
  }
});