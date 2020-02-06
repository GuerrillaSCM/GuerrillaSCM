import React from 'react'
import HomeHeader from './HomeHeader'
import SurveyTable from './SurveyTable'
import {HomeContextProvider} from '../Context/HomeContextClass'


//get user id
/* 
    Make requests here?? Need userId, and surveyIds
*/

/*
    TODO: Maybe convert this to a class then use the component did mount feature
          to call a fetch user, or survey to start the program....
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