/* QuestionFactory
this file acts like a factory for creating question types for the database.
When new question types are added, they will need to have their schemas compiled to a model here for the app to understand how to create that new instance
*/
const mongoose = require('mongoose');
const QuestionSchema = require('./questions/Question');
const StarQuestionSchema = require('./questions/StarQuestion');

var Question = mongoose.model('Question', QuestionSchema);
var StarQuestion = Answer.discriminator('StarRating', StarQuestionSchema);

module.exports = Question; //export the root model, this can be used to save all Answers, as well as identify them