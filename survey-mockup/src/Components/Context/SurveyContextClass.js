import React, { Component } from 'react';
import ApiCall from '../Axios/ApiCall'
import { useHistory } from "react-router-dom";


const { Provider, Consumer } = React.createContext();

class SurveyContextProvider extends Component {

    /*
        Im not sure if we should do the fetch here.
        The reason im assigning the props
        and not creating the object here is becuase 
        idk what im doing and i havent thought it through
        to the point where ive thought about the trade offs.
        Its a pretty easy fix to move stuff too. 
    */
    state =  {
        //surveyId : createNewId(),
        title: "",
        //creationDate: "12/5/2019",
        //isPublished: "No",
        //probably need a mock of this object so we have a blueprint or not? 
        questions : [],
        triggers : [{
            triggerType: "TimerTrigger",
            timer: "10000",
        }]    
    }

    componentDidUpdate() {

    }

    componentDidMount() {
        const url = (window.location.pathname);
        let id = "";
        if (url.split('/').length === 3) {
            id = url.split('/')[2];
        }
        if(id !== "") {
            ApiCall.getASurvey(id)
            .then(response => {
                //console.log(response.data)
                this.setState({
                    title : response.data.title,
                    creationDate : response.data.creationTime,
                    isPublished : response.data.published,
                    surveyId : response.data._id,
                    questions : response.data.questions,
                })
            }).catch(error => {
                console.log(error)
            });
        }
    }

    testChange = (someObject) => {
        this.setState(prevState => {
            
        })
    }

    createNewId = require('uuid/v1');

    /*
        Updates the current state with new values.
        @param: survey object
    
        Takes in a survey object and uses setState
        to update the current state.
    */
    surveyObjectChangedHandler = (surveyObjectInput) => {
        console.log("This changed!");
        this.setState({ surveyObjectInput })
    }

    /*
        Adds a question to the questionlist.
        @param: question object 

        Get the previous state then assign questionList with
        all the questions in the previousState questionList, 
        then set the newQuestion's id using a UUID generator.
    */
    addQuestionHandler = (newQuestionObject) => {
        this.setState(prevState => ({
            questions: [...prevState.questions, {
                //questionId: this.createNewId(), 
                ...newQuestionObject
            }]
        }))
    }

    /*
        Removes a question from the questionlist
        @param: question id

        Removes the item from the question list if the question
        id matches the one inside the list.
    */
    removeQuestionHandler = (questionId) => {
        this.setState(prevState => ({
            questions: prevState.questions.filter(question => question.questionId !== questionId)
        }))
    }

    /*
        Im not sure if this is a good approach but it works.
        @param: updated question object 
        
        Removes the question with the same id using removeQuestionHandler,
        then adds the same object using using the addQuestionHandler

        Bug: It puts the edited question to the bottom of the list....
        **I think this shouldnt matter right now since its a prototype**
    */
    editQuestionHandler = (questionObject) => {
        this.removeQuestionHandler(questionObject.questionId);
        this.addQuestionHandler(questionObject);
    }

    saveSurveyHandler = () => {
        //console.log(this.state);
        let survId = "";
        if(this.state.surveyId === undefined) {
            //right now this call only handles surveys from testpacito
            ApiCall.postSurvey(this.state, "TheWordMEME").then(response => {
                survId = response.data.split(" ")[0];
                window.location.href += "/"+survId;

            })
        }
        else {
            ApiCall.updateSurvey(this.state, this.state.surveyId).then(response => {
                //survId = response.data.split(" ")[0];
                //window.location.href = "http://localhost:3000/create/"+survId;
            }).catch(error => {
                console.log(error)
            })
        }
    }

    embedCodeHandler = () => {
        if(this.state.surveyId !== undefined) {
            //console.log(ApiCall.getEmbedCode(this.state.surveyId))
              //  console.log()
            alert(ApiCall.getEmbedCode(this.state.surveyId));
            
        }
    }




    render() {
        return (
            <Provider value={{
                survey: this.state,
                surveyChangeListener: this.surveyObjectChangedHandler,
                addQuestionListener: this.addQuestionHandler,
                removeQuestionListener: this.removeQuestionHandler,
                editQuestionListener : this.editQuestionHandler,
                saveSurveyListener: this.saveSurveyHandler,
                embedCodeListener: this.embedCodeHandler,
            }}>
                {this.props.children}
            </Provider>
        );
    }
}

export { SurveyContextProvider, Consumer as SurveyContextConsumer }