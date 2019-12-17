import React from 'react';
import AnalyticsHeader from './AnalyticsHeader';
import SurveyResultsTable from './SurveyResultsTable';
import {AnalyticsContextProvider} from '../Context/AnalyticsContextClass'


//get user id
/* 
    Make requests here?? Need userId, and surveyIds
*/
const analyticsPage = () => {
    return(
        <div>
            <AnalyticsContextProvider>
            <AnalyticsHeader/>
            <SurveyResultsTable/>
            </AnalyticsContextProvider>
        </div>
    );
}

export default analyticsPage;