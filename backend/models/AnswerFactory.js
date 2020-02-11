/* AnswerFactory
this file acts like a factory for creating answertypes for the database.
When new answer types are added, they will need to have their schemas compiled to a model here for the app to understand how to create that new instance
*/
const mongoose = require('mongoose');
const AnswerSchema = require('./answers/Answer');
const StarAnswerSchema = require('./answers/StarAnswer');
const CommentBoxAnswerSchema = require('./answers/CommentBoxAnswer');

var Answer = mongoose.model('Answer', AnswerSchema);
var StarAnswer = Answer.discriminator('StarAnswer', StarAnswerSchema);
var CommentBoxAnswer = Answer.discriminator('CommentBoxAnswer', CommentBoxAnswerSchema);

module.exports = Answer; //export the root model, this can be used to save all Answers, as well as identify them