/*
    This class will hold the survey list and survey edit components
    We could use this class to manipulate and show new or existing
    survey items. 
*/

import React, { useEffect }  from 'react';
import SurveyActions from './SurveyActions';
import SurveyForm from './SurveyForm';
import {SurveyContextProvider} from '../Context/SurveyContextClass';
import { useDispatch, useSelector } from "react-redux";
import * as surveyActions from '../../store/actions/surveyActions';

/*
    This class is where we do the requests if we are editing a survey.
    Could potentiall pass in a survey id then do request on that. 
*/
export default function SurveyPage (){
    
    const dispatch = useDispatch();

    useEffect(() => {
        const url = (window.location.pathname);
        let id = "";
        //this means that there is an id that is loaded.
        dispatch(surveyActions.clearSurvey());
        if (url.split('/').length === 3) {
            id = url.split('/')[2];
            //dispatch to get all survey ids
            dispatch(surveyActions.loadSurvey(id));
        }
    })

    return(
        <div className="">
            <SurveyContextProvider>
                <SurveyActions/>
                <SurveyForm/>
            </SurveyContextProvider>
        </div>
    );
}