/*
    This file handles access to the database for the responses

    It grabs all the models from the 'AnswerFactory' File, which is all the models for answer compiled into one answer type.

    using the Answer.create(object) method, Answer can select the schema to use that is tailored to the input data.
*/

const mongoose = require('mongoose');
const Response = require('../models/SurveyResponse');
const ObjectId = require('mongoose').Types.ObjectId;
const Answer = require('../models/AnswerFactory'); //This might be ghetto, we are grabbing an object from the controllers as if it is a model. It is effectively all the Anwser Models all compiled together

/*
  Response ID controllers
*/

exports.getResponseFromResponseID = (req, res, next) => {
  Response
    .find({
      surveyID: req.params.surveyID
    }).populate('answers')
    .exec(function (err, reponse) {
      if (err) return res.send(err);
      res.send(reponse);
    });
}

exports.postResponseGivenSurveyID = async (req, res, next) => {

  //////////////////////////////////////////////////////// REFACTOR THIS
  var oldBody = JSON.parse(JSON.stringify(req.body)); //ghetto deep copy
  body = req.body; //refer to req.body so its more clear in the rest of the function.

  delete body['answers'];

  surveyResponse = Response(body);
  surveyResponse.surveyID = ObjectId(req.params.surveyID);
  ///////////////////////////////////////////////////////

  if (oldBody.answers != null) { // if there are any answers in the response to add 
    await Promise.all(oldBody.answers.map(async (answer) => { //go through each answer that needs to be saved. async function executes them all in parallel. waits until they all complete
      newAnswer = await Answer.create(answer) //transform the answer into a document based on the answer schema models, 
      surveyResponse.answers.push(newAnswer); //add that answer to the array that we will save to the database
      await newAnswer.save((err, result) => { //save the answer, and wait until the operation completes to end this function call
        if (err) {
          return console.error(err);
        } else {
          return console.log("saved question with id: " + newAnswer._id);
        }
      });
    }));

    surveyResponse.save((err, result) => { //save the main surveyResponse schema to the database
      if (err) {
        return console.error(err);
      } else {
        res.send(surveyResponse.surveyID + ' Inserted into database')
        console.log(surveyResponse.surveyID + " saved to Survey collection.");
      }
    });
  }
}

/*
  Response ID controllers
*/
exports.postResponseGivenResponseID = (req, res, next) => {
  surveyResponse = Response(req.body);
  surveyResponse.surveyID = ObjectId(surveyResponse.surveyID);

  var answers = JSON.parse(JSON.stringify(surveyResponse.answers));

  if (answers != null) {
    answers.forEach((answer) => { // we need to push each question into the array so that it will get saved properly by mongoose
      Answer.create(answer).then((a) => {
        a.save((err, result) => {
          if (err) {
            return console.error(err);
          }
          console.log("answer saved to Survey collection.");
        });
      });
    });
  }

  surveyResponse.save(function (err, result) {
    if (err) {
      return console.error(err);
    }
    res.send(surveyResponse.surveyID + ' Inserted into database')
    console.log(surveyResponse.surveyID + " saved to Survey collection.");
  });
}

exports.deleteResponseGivenReponseID = (req, res, next) => {
  res.send('hello world')
}