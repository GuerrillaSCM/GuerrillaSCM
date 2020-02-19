import * as surveyActions from '../actions/surveyActions'


const initialState =  {
    title: "", 
    questions : [],
    triggers : [{
        triggerType: "TimerTrigger",
        timer: "10000",
    }]    
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case surveyActions.LOAD_SURVEY:
        console.log(action.survey.questions);
        return {
            ...state,
            title : action.survey.title,
            creationDate : action.survey.creationTime,
            isPublished : action.survey.published,
            surveyId : action.survey._id,
            questions : action.survey.questions,
        }

        case surveyActions.CLEAR_SURVEY: 
        return {
            ...state,
            title : "",
            creationDate : "",
            isPublished : "",
            surveyId : "",
            questions : [],
        }

        case surveyActions.SAVE_SURVEY:
        return state;

        case surveyActions.UPDATE_SURVEY:
        return {
            state
        }


        case surveyActions.UPDATE_TITLE: 
        return {
            ...state,
            title: action.surveyTitle
        }

        case surveyActions.ADD_QUESTION: 
            return {
                ...state, 
                questions: [...state.questions, {
                    ...action.question
                }]
            }

        case surveyActions.DELETE_QUESTION:
            return {
                ...state,
                questions: state.questions.filter(question => question.questionId !== action.questionId)
            }

        //doesnt work...
        case surveyActions.EDIT_QUESTION:
            return {
                ...state,
                questions: state.questions.map(question => {
                    if(question.questionId === action.questionId) {
                        question = action.newQuestion
                    }
                })
            }

        default: return state;
    }
    
}

export default reducer;