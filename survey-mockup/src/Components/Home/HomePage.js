import React from 'react'
import HomeHeader from './HomeHeader'
import SurveyTable from './SurveyTable'


//get user id
/* 
    Make requests here?? Need userId, and surveyIds
*/
const homePage = () => {
    return(
        <div>
            <HomeHeader/>
            <SurveyTable/>
        </div>
    );
}

export default homePage;