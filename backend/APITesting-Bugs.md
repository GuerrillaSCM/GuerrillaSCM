# List of bugs discovered:
1. Deleting a survey only removed the survey object from the survey collection
  * files responsible:
    * controllers/survey.js deleteSurveyGivenSurveyID function
2. Updating a survey only updates one question and one trigger at the top of the array
  * files responsible:
    * controllers/survey.js putWholeSurveyGivenSurveyID function