/* AnswerFactory
this file acts like a factory for creating answertypes for the database.
When new answer types are added, they will need to have their schemas compiled to a model here for the app to understand how to create that new instance
*/
const mongoose = require('mongoose');
const AnswerSchema = require('../models/Answer');
const StarAnswerSchema = require('../models/StarAnswer');

var Answer = mongoose.model('Answer', AnswerSchema);
var StarAnswer = Answer.discriminator('StarRating', StarAnswerSchema);

module.exports = Answer; //export the root model, this can be used to save all Answers, as well as identify them