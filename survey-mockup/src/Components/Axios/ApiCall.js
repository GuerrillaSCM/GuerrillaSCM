/*
    javascript static methods are called without instantiating the class.
    These methods are also used to create utility functions.. whatever that means 
    
    How to use: import ApiCall from '../File_location'
    Then: 
        ApiCall.getAllSurveyResponses(surveyId).then(response => {process information....})
*/
import axios from 'axios'

const LOCAL_URL = "http://localhost:3005/api/";

const USER = "user/";

const SURVEY = "survey/";

const RESPONSE = "response/";

const EMBED = "embed/";

class ApiCall {

    static postSurvey(surveyObject,id) {
        return (axios.post(LOCAL_URL + SURVEY + USER + id, surveyObject));
    }

    static updateSurvey(surveyObject,id) {
        return (axios.put(LOCAL_URL + SURVEY + SURVEY + id, surveyObject));
    }

    static getEmbedCode(id) {
        //return (axios.get(URL + EMBED + id));
        return (
        "<script type=\"text/javascript\" id=\"embedID\" data-name=\"" + id + "\" src=\"http://localhost:3005/embed/main.js\"></script>"
        );
    }

    static deleteSurvey(id) {
        return (axios.delete(LOCAL_URL + SURVEY + SURVEY + id));
    }


    /*
        Gets all survey responses from an id
        @param: surveyId

        Currently returns a survey id, creationTime, an answers array that contains
            [answerType = StarRating, questionId = 0 <- should be varrying, stars:, id]

        "5dec493cf525a2415c89c290"
    */
    static getAllSurveyResponses(surveyId) {
        return (axios.get(LOCAL_URL + RESPONSE + SURVEY + surveyId));
    }

    /*
        Gets one single survey response
        @param: responseId

        Currently cannot access one survey response, im probably not 
        pulling from the latest backend

        "5dec57ba743746253cb0039e" <- id i tried
    */
    static getASurveyResponse(responseId) {
        return (axios.get(LOCAL_URL + RESPONSE + RESPONSE + responseId));
    }

    /*
        Gets a single survey
        @param: surveyId

        Returns an object with
        creationTime, owner, published, questions, title, triggers, _id.

        "5dec493cf525a2415c89c290"
    */
    static getASurvey(surveyId) {
        return (axios.get(LOCAL_URL + SURVEY + SURVEY + surveyId));
    }

    /*
        Gets all the surveys a user has
        @param: userId

        "TestPacito"
    */
    static getAllSurveys(userId) {
        return (axios.get(LOCAL_URL + SURVEY + USER + userId));
    }
}

export default ApiCall;