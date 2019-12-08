/*
    This file handles access to the database for the responses
*/

const mongoose = require('mongoose');
const Response = require('../models/SurveyResponse');
const ObjectId = require('mongoose').Types.ObjectId;
const Answer = require('../models/Answer');

/*
  Response ID controllers
*/

exports.getResponseFromResponseID = (req, res, next) => {
    Response
    .find(
        {
            surveyID: req.params.surveyID
        }
    )
    .exec(function (err, reponse) {
        if (err) return res.send(err);
        res.send(reponse);
      });
}

exports.postResponseGivenSurveyID = (req, res, next) => {

    var oldBody = JSON.parse(JSON.stringify(req.body)); 
    body = req.body; //refer to req.body so its more clear in the rest of the function.

    delete body['answers'];

    surveyResponse = Response(body);
    surveyResponse.surveyID = ObjectId(req.params.surveyID);

    if (oldBody.answers != null) {
      oldBody.answers.forEach(answer => { 
        surveyResponse.answers.push(Answer(answer));
        console.log(surveyResponse.answer);
      });
      surveyResponse.answers.forEach(answer => {
        answer.save(function (err, result) {
          if (err) {
            return console.error(err);
          }
          console.log("saved question with id: " + answer._id);
        })
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

/*
  Response ID controllers
*/
exports.postResponseGivenResponseID = (req, res, next) => {
    surveyResponse = Response(req.body);
    surveyResponse.surveyID = ObjectId(surveyResponse.surveyID);

    var answers = JSON.parse(JSON.stringify(surveyResponse.answers));

    if (answers != null) {
        answers.forEach(answer => { // we need to push each question into the array so that it will get saved properly by mongoose
            var a = Answer(answer);
            a.save(function (err, result) {
              if (err) {
                return console.error(err);
              }
              console.log("answer saved to Survey collection.");
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