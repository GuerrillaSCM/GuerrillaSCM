import React from 'react'
import HomeHeader from './HomeHeader'
import SurveyTable from './SurveyTable'
import {HomeContextProvider} from '../Context/HomeContextClass'


//get user id
/* 
    Make requests here?? Need userId, and surveyIds
*/
const homePage = () => {
    return(
        <div>
            <HomeContextProvider>
                <HomeHeader/>
                <SurveyTable/>
            </HomeContextProvider>
        </div>
    );
}

export default homePage;