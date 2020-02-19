import React, {useEffect} from 'react';
import AnalyticsHeader from './AnalyticsHeader';
import SurveyResultsTable from './SurveyResultsTable';
//redux
import { useDispatch } from "react-redux";
import * as analyticsActions from '../../store/actions/analyticsActions'


/*
    UPDATE: Removed analytics context provider
    If there is an id in the url, make an api call
*/
function AnalyticsPage() {

    const dispatch = useDispatch();

    useEffect(() => {
        const url = (window.location.pathname);
        let id = "";
        //this means that there is an id that is loaded.
        if (url.split('/').length === 3) {
            id = url.split('/')[2];
            //dispatch to get all survey ids
            dispatch(analyticsActions.loadResponses(id));
            dispatch(analyticsActions.setCurrentSurvey(id));
        }
    })

    return(
        <div>
            <AnalyticsHeader/>
            <SurveyResultsTable/>
        </div>
    );
}

export default AnalyticsPage;