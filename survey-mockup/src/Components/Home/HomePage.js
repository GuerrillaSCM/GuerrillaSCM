import React from 'react'
import HomeHeader from './HomeHeader'
import SurveyTable from './SurveyTable'


//get user id
const homePage = () => {
    return(
        <div>
            <HomeHeader/>
            <SurveyTable/>
        </div>
    );
}

export default homePage;