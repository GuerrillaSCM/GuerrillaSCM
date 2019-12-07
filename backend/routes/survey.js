/*
    This file handles all of the specific routing for each api endpoint. 
*/

const express = require('express');
const router = express.Router();

const surveyController = require('../Controllers/survey');

/*************************************************************************************
    HTTP Requests with  userIDs
**************************************************************************************/

/*
    Get all surveys for a specific user
*/
router.get('/user/:userID', surveyController.getAllSurveysGivenUserID);

/*
    add a new survey
*/
<<<<<<< HEAD
router.post('/user/:userID', function (req, res) {

  var oldBody = JSON.parse(JSON.stringify(req.body)); //ghetto deep copy
  body = req.body; //refer to req.body so its more clear in the rest of the function.

  delete body['questions']; //remove questions and triggers because mongoose is weird with saving arrays. "cannot convert type 'Array' to 'Array'" like wtf
  delete body['trigger'];

  survey = new Survey(body);
  survey.owner = req.params.userID; //setting the ownerID from the URL parameter

  if (oldBody.questions != null) {
    oldBody.questions.forEach(question => { // we need to push each question into the array so that it will get saved properly by mongoose
      survey.questions.push(Question(question));
      // console.log(survey.questions);
    });
    survey.questions.forEach(question => {
      question.save(function (err, result) {
        if (err) {
          return console.error(err);
        }
        // console.log("saved question with id: " + question._id);
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
    // console.log(result + " saved to Survey collection.");
  });

});
=======
router.post('/user/:userID', surveyController.postSurveyGivenUserID);
>>>>>>> dal-implementation


/*************************************************************************************
    HTTP Requests with SurveyID
**************************************************************************************/

/*
    Adding a new survey
*/
router.get('/survey/:surveyID', surveyController.getSurveyGivenSurveyID);

/*
    Update survey
*/
<<<<<<< HEAD
router.put('/survey/:surveyID', function (req, res) {

  var oldBody = JSON.parse(JSON.stringify(req.body)); //ghetto deep copy
  body = req.body; //refer to req.body so its more clear in the rest of the function.

  delete body['questions']; //remove questions and triggers because mongoose is weird with saving arrays. "cannot convert type 'Array' to 'Array'" like wtf
  delete body['trigger'];

  survey = new Survey(body);
  survey._id = req.params.surveyID; //set the id to the one passed in the URL

  Survey.findById(survey._id, function (error, returnedSurvey) {
    if (error) return res.send(error); //send error

    returnedSurvey = new Survey(returnedSurvey); //cast to a survey
    mapQuestionIDsToObjectIDs = new Map(); // create a hashmap for matching question IDs of the old survey to object IDs for update.

    console.log("Survey found!!!!!lkgdhgkljdlgkjhdflkjgsjd");

    for (var i = 0; i < returnedSurvey.questions.length; i++) { //need to match each question ID from the old survey to the new one to get their objectID
        survey.questions[i]._id = returnedSurvey.questions[i]._id; // update the ID of each question
    }

    // TODO:
    // Cases: same number of questions, some updates
    // less questions, some updates (need to remove questions)
    // more questions, some updates (need to add new questions)
    // all cases: need to update if they were updated, or make new if they are not in the list.

    if (oldBody.questions != null) {

      oldBody.questions.forEach(question => { // we need to push each question into the array so that it will get saved properly by mongoose
        survey.questions.push(Question(question));
      });
  
      // update questions that exist, or add new ones.
      survey.questions.forEach(question => {
        q = Question(question);
  
        Question.findOneAndUpdate({
          _id: ObjectId(q._id)
        }, q, {
          new: true,
          upsert: true // Make this update into an upsert
        }, function (err, result) {
          if (err) {
            return console.error(err);
          }
          console.log(result);
        });
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
        res.send('Error updating survey with title ' + survey.title)
        return console.error(err);
      }
      res.send(result._id + ' Inserted into database')
      // console.log(result + " saved to Survey collection.");
    });
  });
});

router.delete('/survey/:surveyID', function (req, res) {

  Survey
    .findById(req.params.surveyID)
    .populate('questions') // only works if we pushed refs to survey.questions
    .populate('trigger')
    .exec(function (err, survey) {
      if (err) return res.send(err); //throw error

      if (survey == null) return res.send("Survey already deleted");

      if (survey.questions != null) { //remove all questions
        survey.questions.forEach(question => {
          Question.findByIdAndRemove(question._id, function (err, result) {
            // console.log("delete questions", result);
          });
        });
      }

      if (survey.trigger != null) { //remove all triggers
        survey.trigger.forEach(trigger => {
          Trigger.findByIdAndRemove(trigger._id, function (err, result) {
            // console.log("delete triggers", result);
          });
        });
      }

      Survey.findByIdAndRemove(req.params.surveyID, function (err, result) {
        res.send('Survey removed');
      }); //remove survey
    });
});
=======
router.put('/survey/:surveyID', surveyController.putSurveyGivenSurveyID);

/*
    Update Survey
*/
router.delete('/survey/:surveyID', surveyController.deleteSurveyGivenSurveyID);
>>>>>>> dal-implementation

module.exports = router;