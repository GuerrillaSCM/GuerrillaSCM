/* This will handle accepting all the stuff from the modal and outputting 
it to the survey page in a form of a survey.
Accept props to fill up the survey */

/* 
    TODO: Create or mock question list
    Item mock should look like below
    | Icon  | Question #       | Edit      |
    | Icon  | Question Text    | Button    |
    Potentially get all the information after adding question

    TODO!!!
    Change icon to star or a multiple choice icon or comment box
*/
import React from 'react';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import QuestionList from './SurveyQuestionList';
import { makeStyles } from '@material-ui/core/styles';
import {useState} from 'react';
import {SurveyContextConsumer} from '../Context/SurveyContextClass'


const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
      margin: theme.spacing(5),
      minHeight: "100px"
    },
    title: {
        //margin: theme.spacing(4, 0, 2),
        textAlign: 'left',
        marginLeft: theme.spacing(1),
      },
  }));

  //array should be state, so when state is updated, everything is rerendered
  function generateQuestionArray(questionArray) {
      if(questionArray.length > 0)
      return questionArray.map(element => <QuestionList 
        question={element.prompt} 
        type={element.questionType}
        id={element.questionId}
        key={element.questionId}
        />);
  }


/*
    param: props.questions (Question object, should contain all the questions in one object?)
*/  
export default function SurveyForm(props) {

    const classes = useStyles();
    const [dense, setDense] = useState(false);

    return(
        <div className="">
            <Paper className={classes.root}>
          <Typography variant="h6" className={classes.title}>
            Questions
          </Typography>
          <div className={classes.demo}>
            <List dense={dense}>
            <SurveyContextConsumer>
              {({survey}) => 
                (generateQuestionArray(survey.questions))
              }
            </SurveyContextConsumer>
            </List>
          </div>
            </Paper>
        </div>
    );
}



