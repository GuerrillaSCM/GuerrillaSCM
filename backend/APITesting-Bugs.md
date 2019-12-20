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

# What I was working on
I was currently working on bug #2. I had just made changes that seemed to cause questions to be updated if there were the same number originally. I added a hashmap function that should map old question ID's to the questions coming from the PUT request. If the question ID is null, the hashmap leads to a function that should generate a new one and add that new ID to the hashmap.