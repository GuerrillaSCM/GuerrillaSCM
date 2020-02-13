import * as analyticsActions from '../actions/analyticsActions';

const intialState = {
    responses: [],
    currentSurveyId: ""
}

const reducer = (state = intialState, action) => {
    switch(action.type) {
        case analyticsActions.LOAD_RESPONSES:
            return {
                ...state,
                responses: action.responses
            }
        case analyticsActions.CLEAR_RESPONSES:
            return {
                ...state,
                responses: action.responses
            }
        case analyticsActions.SET_CURRENT_SURVEY:
            return {
                ...state,
                currentSurveyId: action.surveyId
            }
        default: return state;
    }
}

//call a function that parses each answer. 

// const parseResponses = (responsesObject) => {
//     responsesObject.map(response => {
//         response.map(answerList => {
//             answerList.answers.map(eachAnswer => {
//                 if(eachAnswer.answerType === "CommentBoxAnswer")

//             })
//         })
//     })
// }

export default reducer;