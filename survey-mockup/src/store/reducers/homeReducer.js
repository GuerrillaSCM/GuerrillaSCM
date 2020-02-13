import * as homeActions from '../actions/homeActions'

const initialState = {
    surveys: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case homeActions.LOAD_SURVEYS:
            return {
                ...state,
                surveys: action.surveys
            }

        case homeActions.DELETE_SURVEY:
            const updatedSurveys = state.surveys.filter(result => result._id !== action.surveyId)
            return {
                ...state,
                surveys: updatedSurveys
            }
            
        default: return state;
    }
}

export default reducer;