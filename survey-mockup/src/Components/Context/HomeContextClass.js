import React, { Component } from 'react';
import ApiCalls from '../Axios/ApiCall'

const { Provider, Consumer } = React.createContext();

class HomeContextProvider extends Component {

    //either set the state here or on the HomePage
    //setting it somewhere else look better tbh. 
    //fetch the back end stuff here.
    state = {
        columns: [
            { title: 'Name', field: 'title' },
            { title: 'Published Status', field: 'published' },
            { title: 'Date Created', field: 'creationTime' },
        ],
        //dummy data
        surveys: [],
        //we just need userId to grab all of the needed information??
        userId: "",
        userName: "",
    }

    /*
        Calls this function when the app starts.
        Gets all information we need from the user.

        FIXME getASurvey is what were using rn
        **should be using getAllSurveys but i think its not setup yet**

        using map instead of loop because 
        https://medium.com/@ExplosionPills/map-vs-for-loop-2b4ce659fb03

        looks cleaner
    */
    componentDidMount() {
        //Gets all the surveys
        ApiCalls.getAllSurveys("TheWordMEME").then(response => {
            //this shouldnt be here. Get user info once we have one
            if(response.data.length > 0) {
                this.userItemHandler(response.data[0]);

                response.data.map(element => (
                    this.addSurveyHandler(element)
                ))
            }
        });
    }


    /*
        This function will update the current table of surveys that we have
    */
    //componentDidUpdate() {

    //}

    userItemHandler(apiResponseObject) {
        this.setState({
            userName: apiResponseObject.owner,
            userId: apiResponseObject._id,
        })
    }

    /*
        Takes in a single survey object and builds the off of that 
    */
    addSurveyHandler(surveyObject) {
        this.setState(prevState => ({
            surveys: [...prevState.surveys, {
                title: surveyObject.title,
                published: surveyObject.published,
                creationTime: surveyObject.creationTime,
                key: surveyObject._id
            }]
        }))
    }


    homeObjectChangedHandler = (homeObjectInput) => {
        this.setState({ homeObjectInput })
    }

    deleteSurveyHandler = (survId) => {
        ApiCalls.deleteSurvey(survId).then(response => {
            this.removeSurveyHandler(survId);
            //window.location.reload(false);
            console.log(response);   
        }).catch(error => {
            console.log(error)
        })
        
       // this.setState({ state: this.state });
    }

    removeSurveyHandler = (survId) => {
        this.setState(prevState => ({
            surveys: prevState.surveys.filter(survey => survey.surveyId !== survId)
        }))
    }

    render() {
        return (
            <Provider value={{ homeObject: this.state,
                               deleteSurveyListener: this.deleteSurveyHandler}}>
                {this.props.children}
            </Provider>
        );
    }
}

export { HomeContextProvider, Consumer as HomeContextConsumer }