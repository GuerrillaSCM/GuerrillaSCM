# List of bugs discovered:
1. Deleting a survey only removed the survey object from the survey collection
  * files responsible:
    * controllers/survey.js deleteSurveyGivenSurveyID function
2. Updating a survey only updates one question and one trigger at the top of the array
  * files responsible:
    * controllers/survey.js putWholeSurveyGivenSurveyID function
  * Cases that need to be fixed:
    1. same number of questions, some updates
    2. less questions, some updates (need to remove questions)
    3. more questions, some updates (need to add new questions)
    4. all cases: need to update if they were updated, or make new if they are not in the list.
    5. if a survey with no questions is passed, when the original survey has questions, this will not remove them.