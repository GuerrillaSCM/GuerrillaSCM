/*
    Making one so everything is uniform

    Also makes passing around data easier since were already 
    following this pattern
*/

import React, {Component} from 'react';
import ApiCalls from '../Axios/ApiCall'

const {Provider , Consumer} = React.createContext();

class AnalyticsContextProvider extends Component {

    state = {
        columns: [
            { title: 'Response Number', field: 'resNum' },
            { title: 'Question', field: 'question' },
            { title: 'Rating', field: 'stars' },
        ],
        surveyId: this.props.surveyId,
        responses: [
            {answers: []},
        ],
    }

    componentDidUpdate() {
        
    }

    /*
        This class should be called once the view analytics button in pressed.
        rn im just hard coding it to make it work but setting it up shouldnt be
        hard once all the react-routing has been done i think...
    */
    componentDidMount() {
        //hard coded rn but should be this.state.surveyId
        ApiCalls.getAllSurveyResponses("5dec493cf525a2415c89c290")
        .then(response => {
            console.log(response.data)
            response.data.map((element,index) => ( //response element
               this.responseListHandler(element,index+1)
            ))
        });
    }

    /*
        Gets a response Object that should contain multiple answers, but for
        this iteration of the project im just hardcoding the first answer
        since we only have one question. 

        FIXME
        Theres always an object that shouldnt be there, its called proto
        or smthng but that object gets added to analytics when it shouldnt.
    */
    responseListHandler(responseObject,index) {
        this.setState(prevState => ({ 
            responses: [...prevState.responses, {
                //kind of hard coding it rn coz im tired and i dont want to think anymore...
                resNum: index,
                question: responseObject.answers[0].answerType,
                stars: responseObject.answers[0].stars,
                key: responseObject.answers[0]._id
            }]
        }));
    }

    /*
        IDK whats going on with this part but i just got lost iterating through
        arrays of objects inside an array of objects. Ill deal with it another 
        day since we dont need it rn. 
    */
    answerListHandler(answerObject) {
        answerObject.map((answer, index) => ({
            resNum: index,
            question: answer.answerType,
            stars: answer.stars,
            key: answer._id,
        }))
    }

    render() {
        return(
            <Provider value={{analyticsObject : this.state}}>
                {this.props.children}
            </Provider>
        );
    }
}

export {AnalyticsContextProvider, Consumer as AnalyticsContextConsumer}