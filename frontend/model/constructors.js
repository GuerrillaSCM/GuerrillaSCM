class Survey {
  constructor(survey) {
    this.title = isNull(survey.title, null);
    this.surveyID = isNull(survey.surveyID, null);
    this.owner = isNull(survey.owner, null);
    this.published = isNull(survey.published, false); // boolean if the survey is published or not.
    this.creationTime = isNull(survey.creationTime, Date().toISOString());
    this.questions = isNull(survey.questions, []); //contains an array of different question objects. 
    // Position in array would be the order of the questions.
    this.trigger = isNull(survey.trigger, null); // trigger object containing trigger definition
  }
}

class SurveyResponse {
  constructor(surveyResponse) {
    this.responseID = isNull(surveyResponse.responseID, null); //unique ID for the specific survey response
    this.surveyID = isNull(surveyResponse.surveyID, null); //Unique ID for the parent survey that this is a response to
    this.creationTime = isNull(surveyResponse.title, Date().toISOString());
    this.answers = isNull(surveyResponse.title, []]);
  }
}

class Question {
  constructor(question) {
    this.type = isNull(question.type, null); //the type of question (star rating etc)
    this.questionID = isNull(question.questionID, null); //integer from 0-9 (since we will have a max of 10 questions)
    this.prompt = isNull(question.prompt, null); //Prompt for the question.
  }
}

class Answer {
  constructor(answer) {
    this.type = isNull(answer.type, null); // the type of the question that this is an answer to.
    this.questionID = isNull(answer.questionID, null); // ID of the question it is responding to
    this.response = isNull(answer.response, null); // sub-object that contains data related to the type.
    // DO we want to have a sub-object within this to contain the response data, or to have answer be a generic
    //  type that can be extended for the specific kinds of question types? (stuff like stars, comment box, ordered rating list)
  }
}

class StarResponse {
  constructor(response) {
    this.stars = isNull(response.stars, null); //integer from 1-5 for the number of stars
  }
}

class Trigger {
  constructor(trigger) {
    this.type = isNull(trigger.type, null); // the type of trigger
    this.definition = isNull(trigger.definition, null); // sub-object that contains data related to the type.
  }
}

class TimerTrigger {
  constructor(trigger) {
    this.timer = isNull(trigger.timer, null); //integer > 0 for timer in ms
  }
}

// Josh's function for null
function isNull(object, nullType) {
  return object == null ? nullType : object;
}