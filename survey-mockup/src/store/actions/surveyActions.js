import ApiCalls from '../../Components/Axios/ApiCall'

export const LOAD_SURVEY = "LOAD_SURVEY";
export const SAVE_SURVEY = "SAVE_SURVEY";
export const UPDATE_SURVEY = "UPDATE_SURVEY"
export const ADD_QUESTION = "ADD_QUESTION";
export const DELETE_QUESTION = "DELETE_QUESTION";
export const EDIT_QUESTION = "EDIT_QUESTION";
export const CLEAR_SURVEY = "CLEAR_SURVEY";
export const GET_EMBED = "GET_EMBED";
export const UPDATE_TITLE = "UPDATE_TITLE"

export const loadSurvey = (id) => {
    return dispatch => {
        ApiCalls.getASurvey(id)
            .then(response => {
                dispatch(returnSurvey(response.data));
            }).catch(error => {
                console.log(error)
            });
    }
}

export const returnSurvey = (surveyVal) => {
    return {
        type: LOAD_SURVEY,
        survey: surveyVal
    }
}

export const clearSurvey = () => {
    return {
        type: CLEAR_SURVEY,
    }
}

//decide how were gonna save...
//probably pass the survey object using the useSelector.
export const saveSurvey = (surveyObject, currentUser) => {
    return dispatch => {
        let survId = "";
        if(surveyObject.surveyId === undefined || surveyObject.surveyId === "") {
            ApiCalls.postSurvey(surveyObject, currentUser).then(response => {
                survId = response.data.split(" ")[0];
                window.location.href += "/"+survId;
                return {
                    type: SAVE_SURVEY
                }
            }) 
        }
        else {
            ApiCalls.updateSurvey(surveyObject, surveyObject.surveyId).then(response => {
                //survId = response.data.split(" ")[0];
                //window.location.href = "http://localhost:3000/create/"+survId;
                return {
                    type: UPDATE_SURVEY
                }
            }).catch(error => {
                console.log(error)
            })
        }
    }
}

export const updateTitle = (title) => {
    return {
        type: UPDATE_TITLE,
        surveyTitle: title
    }
}

export const addQuestion = (newQuestion) => {
    return {
        type: ADD_QUESTION,
        //whole question object
        question: newQuestion
    }
}

//accept the id, then edit that item
export const editQuestion = (id,newValue) => {
    return {
        type: EDIT_QUESTION,
        //either pass new state value or pass id
        questionId: id,
        newQuestion: newValue
    }
}

//accept the id then delete that item from the state list
export const deleteQuestion = (id) => {
    return {
        type: DELETE_QUESTION,
        questionId: id
    }
}

//I was thinking we could call this on any of the items that need extra text
//basically, pass 2 values, like the questionId, then the extra prompt.
export const addQuestionExtras = () => {
    return {
        type: "TEST"
    }
}


export const getEmbed = (id) => {
    return dispatch => {
        if(id !== undefined)
            alert(ApiCalls.getEmbedCode(id));
            return {
                type: GET_EMBED
            }
    }
}