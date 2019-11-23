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