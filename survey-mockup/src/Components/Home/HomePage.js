import React, { useEffect } from 'react'
import HomeHeader from './HomeHeader'
import SurveyTable from './SurveyTable'
//redux
import { useDispatch, useSelector } from "react-redux";
import * as homeActions from '../../store/actions/homeActions';


//get user id
/* 
    Make requests here?? Need userId, and surveyIds
*/

/*
    TODO: Maybe convert this to a class then use the component did mount feature
          to call a fetch user, or survey to start the program....
*/


function HomePage() {
    const dispatch = useDispatch();

    //get the appwide current user value
    const currentUser = useSelector(state => state.appWide.current_user);

    //component did mount
    useEffect(() => {
        //dipatch event that gets the survey??
        dispatch(homeActions.loadSurveys(currentUser));
    });

    return(
        <div>
            <HomeHeader/>
            <SurveyTable/>
        </div>
    );
}

export default HomePage;