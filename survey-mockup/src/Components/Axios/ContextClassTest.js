import React, { Component } from 'react';
import axios from 'axios';

const { Provider, Consumer } = React.createContext();


class HomeContextProvider extends Component {

    //either set the state here or on the HomePage
    //setting it somewhere else look better tbh. 
    //fetch the back end stuff here.
    state = {
    //    // dummy data
        surveys: [
             { title: 'Test Survey 1', published: 'Yes', creationTime: '11/21/2019'},
        ],
    //     //we just need userId to grab all of the needed information??
    //     userId: "",
    //     userName: "",
    }

    addQuestionHandler = (surveyObject) => {
        this.setState(prevState => ({
            surveys: [...prevState.surveys, {
                //questionId: this.createNewId(), 
                ...surveyObject
            }]
        }))
    }

    componentDidMount() {
    
        axios.get("http://localhost:3005/api/survey/survey/5dec493cf525a2415c89c290") //+ "response/survey/5dec493cf525a2415c89c290")
        .then(response => {
            console.log(response.data);
            this.addQuestionHandler({title: response.data.title, published: response.data.published,
            creationTime: response.data.creationTime})
        });

        // //prevState => {
        //     prevState.surveys = response;
        // }
    }

    

    homeObjectChangedHandler = (homeObjectInput) => {
        this.setState({ homeObjectInput })
    }

    render() {
        return(
            <Provider value={{homeObject: this.state}}>
                {this.props.children}
            </Provider>
        );
    }
}

export {HomeContextProvider, Consumer as HomeContextConsumer}