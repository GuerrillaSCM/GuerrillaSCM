/*
    This file handles access to the database for the survey
*/
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const ObjectId = require('mongoose').Types.ObjectId;
const Survey = require('../models/Survey');
const Question = require('../models/QuestionFactory');
const Trigger = require('../models/TriggerFactory');


exports.getAllSurveysGivenUserID = (req, res, next) => {
  Survey
    .find({
      owner: req.params.userID
    })
    .populate('questions') // only works if we pushed refs to survey.questions
    .populate('triggers')
    .exec(function (err, survey) {
      if (err) return res.send(err);
      res.send(survey);
    });
  // res.send('this is the GET /user/:userID ')
}

exports.postSurveyGivenUserID = async (req, res, next) => {
  var oldBody = JSON.parse(JSON.stringify(req.body)); //ghetto deep copy
  body = req.body; //refer to req.body so its more clear in the rest of the function.

  delete body['questions']; //remove questions and triggers because mongoose is weird with saving arrays. "cannot convert type 'Array' to 'Array'" like wtf
  delete body['triggers'];

  survey = new Survey(body);
  survey.owner = req.params.userID; //setting the ownerID from the URL parameter

  var promises = [] //create an array to store the promises we want to wait on. we are going to add all the question and trigger add commands here

  //save all the questions -- need to turn this into a helper function
  promises.push(oldBody.questions.map(async (question) => { //go through each question that needs to be saved. async function executes them all in parallel. waits until they all complete
    newQuestion = await Question.create(question) //transform the question into a document based on the question schema models, 
    survey.questions.push(newQuestion); //add that question to the array that we will save to the database
    return newQuestion.save((err, result) => { //save the question, and wait until the operation completes to end this function call
      if (err) {
        return console.error(err);
      } else {
        return console.log("[Question][" + newQuestion._id + "] saved to Question collection");
      }
    });
  }))

  // save all the triggers
  promises.push(oldBody.triggers.map(async (trigger) => { //go through each trigger that needs to be saved. async function executes them all in parallel. waits until they all complete
    newTrigger = await Trigger.create(trigger) //transform the trigger into a document based on the trigger schema models, 
    survey.triggers.push(newTrigger); //add that trigger to the array that we will save to the database
    return newTrigger.save((err, result) => { //save the trigger, and wait until the operation completes to end this function call
      if (err) {
        return console.error(err);
      } else {
        return console.log("[Trigger][" + newTrigger._id + "] saved to Trigger collection.");
      }
    });
  }))

  await Promise.all(promises.map(async (promiseArray) => { //wait for all the arrays of promises to resolve
    await Promise.all(promiseArray.map(async (promise) => { //wait for all the promises in the array to resolve
      await promise.then()
    }))
  }));

  // Save the survey
  survey.save((err, result) => {
    if (err) {
      res.send('Error inserting survey with title ' + survey.title)
      return console.error(err);
    } else {
      res.send(result._id + ' Inserted into database')
      console.log("[Survey][" + result._id + "] saved to Survey collection.");
    }
  });

}

// get a single survey if you have the survey ID
exports.getSurveyGivenSurveyID = (req, res, next) => {
  Survey
    .findById(req.params.surveyID)
    .populate('questions') // only works if we pushed refs to survey.questions
    .populate('triggers')
    .exec(function (err, survey) {
      if (err) {
        return res.send(err);
      } else {
        res.send(survey);
      }
    });
}

// delete a survey if you have a survey ID
exports.deleteSurveyGivenSurveyID = (req, res, next) => {
  Survey
    .findById(req.params.surveyID)
    .populate('questions') // only works if we pushed refs to survey.questions
    .populate('triggers')
    .exec((err, survey) => {
      if (err) return res.send(err); //throw error

      if (survey == null) return res.send("Survey already deleted");

      //remove all questions
      if (survey.questions != null) {
        survey.questions.forEach(question => {
          Question.findByIdAndRemove(question._id)
        });
      }

      //remove all triggers
      if (survey.trigger != null) {
        survey.trigger.forEach(trigger => {
          Trigger.findByIdAndRemove(trigger._id)
        });
      }

      //remove the actual survey
      Survey.findByIdAndRemove(req.params.surveyID, (err, result) => {
        res.send('Survey removed');
      }); //remove survey
    });
}

// function for the MVP which only deals with the possibility of 1 question and 1 trigger
exports.putSurveyGivenSurveyID = async (req, res, next) => {
  if (!req.params.surveyID) return res.send("No Surey ID specified");

  var oldBody = JSON.parse(JSON.stringify(req.body)); //ghetto deep copy
  var body = req.body; //refer to req.body so its more clear in the rest of the function.

  delete body['questions']; //remove questions and triggers because mongoose is weird with saving arrays. "cannot convert type 'Array' to 'Array'" like wtf
  delete body['triggers'];

  var newSurvey = new Survey(body); //make a survey from the data that we 
  newSurvey._id = req.params.surveyID;

  Survey.findById(newSurvey._id).populate('questions').populate('triggers').exec(async (error, returnedSurvey) => {
    if (error) return res.send(error); //send error

    // console.log(returnedSurvey);

    if (!returnedSurvey) return res.send("Survey to update is not in the database");

    var returnedSurvey = new Survey(returnedSurvey); //cast to a survey
    newSurvey.owner = returnedSurvey.owner; //Make sure the survey keeps the same owner

    // FIXME: if a survey with no questions is passed, when the original survey has questions, this will not remove them.
    if (oldBody.questions != null) { // Only update questions if there are questions. 
      q = await Question.create(oldBody.questions[0]); //make the question from the body into our schema Question

      if (returnedSurvey.questions.length > 0)
        q._id = returnedSurvey.questions[0]._id; //set the objectID of the new survey to the same as the one from the old survey so it will get updated.

      newSurvey.questions.push(q); //add the surveyID to the newSurvey array (adds a new one if there is no id)

      Question.findOneAndUpdate({ //update the question in the database.
        _id: ObjectId(q._id) //search based on object ID, for updating multiple questions, we will need to do some work to make sure the new and old question ID's objectId's matchup first.
      }, q, {
        new: true,
        upsert: true // Make this update into an upsert (update or insert)
      }, function (err, result) {
        if (err) return console.error(err);
      });
    }

    if (oldBody.triggers != null) {
      t = await Trigger.create(oldBody.triggers[0]); //make the trigger from the body into our schema Question

      if (returnedSurvey.triggers.length > 0)
        t._id = returnedSurvey.triggers[0]._id; //set the objectID of the new survey to the same as the one from the old survey so it will get updated.

      newSurvey.triggers.push(t); //puts the reference to the trigger in the survey

      Trigger.findOneAndUpdate({ //update the trigger in the database.
        _id: ObjectId(t._id) //search based on trigger ID;
      }, t, {
        new: true,
        upsert: true // Make this update into an upsert (update or insert)
      }, (err, result) => {
        if (err) return console.error(err);
      });
    }

    // Save the survey
    Survey.findOneAndUpdate({ //update the question in the database.
      _id: ObjectId(newSurvey._id) //search based on object ID, for updating multiple questions, we will need to do some work to make sure the new and old question ID's objectId's matchup first.
    }, newSurvey, function (err, result) {
      if (err) {
        console.error(err);
        return res.send('Error updating survey with title ' + newSurvey.title)
      } else {
        console.log("Survey updated");
        return res.send(result._id + ' Inserted into database')
      }
    });
  });
}

exports.putWholeSurveyGivenSurveyID = (req, res, next) => {

  var oldBody = JSON.parse(JSON.stringify(req.body)); //ghetto deep copy
  var body = req.body; //refer to req.body so its more clear in the rest of the function.

  delete body['questions']; //remove questions and triggers because mongoose is weird with saving arrays. "cannot convert type 'Array' to 'Array'" like wtf
  delete body['triggers'];

  var survey = new Survey(body);
  survey._id = req.params.surveyID; //set the id to the one passed in the URL

  // Find the original survey definition and populate its questions.
  Survey.findById(survey._id).populate('questions').populate('triggers').exec(function (error, returnedSurvey) {
    if (error) return res.send(error); //send error

    var returnedSurvey = new Survey(returnedSurvey); //cast to a survey
    var mapQuestionIDsToObjectIDs = new Map(); // create a hashmap for matching question IDs of the old survey to object IDs for update.
    mapQuestionIDsToObjectIDs.set(survey.TEST, function () { //make sure to return a new ObjectId when an undefined value is asked for. (survey.TEST is not real, so it will be undefined)
      return new ObjectId()
    });

    for (var i = 0; i < returnedSurvey.questions.length; i++) { //need to match each question ID from the old survey to the new one to get their objectID
      mapQuestionIDsToObjectIDs.set(returnedSurvey.questions[i].questionID, returnedSurvey.questions[i]._id); // update the ID of each question
    }
    console.log(mapQuestionIDsToObjectIDs.size);

    // TODO:
    // Cases: same number of questions, some updates
    // less questions, some updates (need to remove questions)
    // more questions, some updates (need to add new questions)
    // all cases: need to update if they were updated, or make new if they are not in the list.

    // FIXME: if a survey with no questions is passed, when the original survey has questions, this will not remove them.
    if (oldBody.questions != null) { // Only update questions if there are questions. 
      oldBody.questions.map(async (question) => { // we need to push each question into the array so that it will get saved properly by mongoose
        question._id = mapQuestionIDsToObjectIDs.get(question.questionID); //set the ID to either the same one as the existing questionID, or create a new one.
        survey.questions.push(await (Question.create(question)));
      });

      // update questions that exist, or add new ones.
      survey.questions.forEach(async (question) => {
        q = await Question.create(question);

        Question.findOneAndUpdate({
          _id: ObjectId(q._id)
        }, q, {
          new: true,
          upsert: true // Make this update into an upsert
        }, function (err, result) {
          if (err) {
            return console.error(err);
          }
          // console.log(result);
        });
      });
    }

    if (oldBody.trigger != null) {
      oldBody.trigger.forEach(trigger => { // we need to push each question into the array so that it will get saved properly by mongoose
        survey.trigger.push(await (Trigger.create(trigger)));
      });
    }

    // Save the survey
    survey.save(function (err, result) {
      if (err) {
        res.send('Error updating survey with title ' + survey.title)
        return console.error(err);
      }
      res.send(result._id + ' Inserted into database')
      // console.log(result + " saved to Survey collection.");
    });
  });
}