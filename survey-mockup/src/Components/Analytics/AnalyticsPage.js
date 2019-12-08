import React from 'react';
import AnalyticsHeader from './AnalyticsHeader';
import SurveyResultsTable from './SurveyResultsTable';


//get user id
/* 
    Make requests here?? Need userId, and surveyIds
*/
const analyticsPage = () => {
    return(
        <div>
            <AnalyticsHeader/>
            <SurveyResultsTable/>
        </div>
    );
}

export default analyticsPage;