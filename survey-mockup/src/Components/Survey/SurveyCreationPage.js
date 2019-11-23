/*
    This class will hold the survey list and survey edit components
    We could use this class to manipulate and show new or existing
    survey items. 
*/

/* 
    TODO: Finish Survey Actions and QuestionDialog first
          Do survey form
*/
import React, { useState} from 'react';
import SurveyActions from './SurveyActions';
import SurveyForm from './SurveyForm';

/*
    This class is where we do the requests if we are editing a survey.
    Could potentiall pass in a survey id then do request on that. 
*/
export default function SurveyPage (){

    //USE CLASS COMPONENT!!! or use useEffect....
    const [questions, setQuestions] = useState([]);

    

    const createNewId = require('uuid/v1');

    //this is kinda wrong, we need to create it inside this object not the object itself
    const [surveyProps, setSurveyProps] = useState([createNewId()])
    
    const addQuestionHandler = question => {
        setQuestions(prevQuestions => [...prevQuestions, {id: createNewId(), 
            ...question}]);
    }

    const removeQuestionHandler = questionId => {
        setQuestions(prevQuestions => 
            prevQuestions.filter(question => question.id !== questionId));
    }

    //set the settable items here
    /*state = {
        //an array might not be needed
        surveyProps : [
            {
                surveyTitle: '',
                surveyDescription: ''
            }
        ],
        //mocking question types
        questionTypes : [
            {type: 'star-rating'},
            {type: 'multiple-choice'},
            {type: 'comments-box'}
        ],
        questions: []
    }*/

    

    /*
        When editing set state here
    */
    // componentWillMount() {

    // }

    
        return(
            <div className="">
                <SurveyActions
                onAddQuestion={addQuestionHandler} surveyId={surveyProps}/>
                <SurveyForm
                questions={questions} onDeleteQuestion={removeQuestionHandler}/>
            </div>
        );
    
}

//export default SurveyPage;