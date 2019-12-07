
/*
    This file handles access to the database for the survey
*/
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const ObjectId = require('mongoose').Types.ObjectId;
const Survey = require('../models/Survey');
const Question = require('../models/Question');
const Trigger = require('../models/Trigger');


exports.getAllSurveysGivenUserID = (req, res, next) => {
    Survey
    .find({
      owner: req.params.userID
    })
    .populate('questions') // only works if we pushed refs to survey.questions
    .populate('trigger')
    .exec(function (err, survey) {
      if (err) return res.send(err);
      res.send(survey);
    });
  // res.send('this is the GET /user/:userID ')
}

exports.postSurveyGivenUserID = (req, res, next) => {
    var oldBody = JSON.parse(JSON.stringify(req.body)); //ghetto deep copy
    body = req.body; //refer to req.body so its more clear in the rest of the function.
  
    delete body['questions']; //remove questions and triggers because mongoose is weird with saving arrays. "cannot convert type 'Array' to 'Array'" like wtf
    delete body['trigger'];
  
    survey = new Survey(body);
    survey.owner = req.params.userID; //setting the ownerID from the URL parameter
  
    if (oldBody.questions != null) {
      oldBody.questions.forEach(question => { // we need to push each question into the array so that it will get saved properly by mongoose
        survey.questions.push(Question(question));
        console.log(survey.questions);
      });
      survey.questions.forEach(question => {
        question.save(function (err, result) {
          if (err) {
            return console.error(err);
          }
          console.log("saved question with id: " + question._id);
        })
      });
    }
  
    if (oldBody.trigger != null) {
      oldBody.trigger.forEach(trigger => { // we need to push each question into the array so that it will get saved properly by mongoose
        survey.trigger.push(Trigger(trigger));
      });
    }
  
    // Save the survey
    survey.save(function (err, result) {
      if (err) {
        res.send('Error inserting survey with title ' + survey.title)
        return console.error(err);
      }
      res.send(result._id + ' Inserted into database')
      console.log(result + " saved to Survey collection.");
    });
  
}

exports.getSurveyGivenSurveyID = (req, res, next) => {
    Survey
    .findById(req.params.surveyID)
    .populate('questions') // only works if we pushed refs to survey.questions
    .populate('trigger')
    .exec(function (err, survey) {
      if (err) return res.send(err);
      res.send(survey);
    });

  // res.send('this is the GET /survey/:surveyID ')
}

exports.deleteSurveyGivenSurveyID = (req, res, next) => {
    Survey
    .findById(req.params.surveyID)
    .populate('questions') // only works if we pushed refs to survey.questions
    .populate('trigger')
    .exec(function (err, survey) {
      if (err) return res.send(err); //throw error

      if (survey == null) return res.send("Survey already deleted");
      
      if (survey.questions != null) { //remove all questions
        survey.questions.forEach(question => {
          Question.findByIdAndRemove(question._id)
        });
      }

      if (survey.trigger != null) { //remove all triggers
        survey.trigger.forEach(trigger => {
          Trigger.findByIdAndRemove(trigger._id)
        });
      }

      Survey.findByIdAndRemove(req.params.surveyID, function (err, result) {
        res.send('Survey removed');
      }); //remove survey
    });
}
