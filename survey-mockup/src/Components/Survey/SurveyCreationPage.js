/*
    This class will hold the survey list and survey edit components
    We could use this class to manipulate and show new or existing
    survey items. 
*/

import React from 'react';
import SurveyActions from './SurveyActions';
import SurveyForm from './SurveyForm';
import {SurveyContextProvider} from '../Context/SurveyContextClass';

/*
    This class is where we do the requests if we are editing a survey.
    Could potentiall pass in a survey id then do request on that. 
*/
export default function SurveyPage (){
    
    /*
        TODO: We should pass a prop here
        
        
        constMockObject() {
            if(fetch is null) {
                //set null object
            }
            else {
                //set the object from the fetch
            }
        }
    */

    const createNewId = require('uuid/v1');

    // const mockSurveyObject = {
    //     //surveyId : createNewId(),
    //     title: "",
    //     //creationDate: "12/5/2019",
    //     //isPublished: "No",
    //     //probably need a mock of this object so we have a blueprint or not? 
    //     questions : [],
    //     triggers : [{
    //         triggerType: "TimerTrigger",
    //         timer: "10000",
    //     }]
            
        
    // }

        return(
            <div className="">
                <SurveyContextProvider>
                    <SurveyActions/>
                    <SurveyForm/>
                </SurveyContextProvider>
            </div>
        );
}