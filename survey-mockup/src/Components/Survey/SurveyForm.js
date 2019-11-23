/* This will handle accepting all the stuff from the modal and outputting 
it to the survey page in a form of a survey.
Accept props to fill up the survey */

/* 
    TODO: Create or mock question list
    Item mock should look like below
    | Icon  | Question #       | Edit      |
    | Icon  | Question Text    | Button    |
    Potentially get all the information after adding question
*/
import React from 'react';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import QuestionList from './SurveyQuestionList';
import { makeStyles } from '@material-ui/core/styles';
import {useState} from 'react'


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
  function generateQuestionArray(questionArray, deleteid) {
      if(questionArray.length > 0)
      return questionArray.map(element => <QuestionList 
        question={element.questionText} 
        type={element.questionType}
        id={element.id}
        key={element.id}
        //remove delete handler after
        onDelete={deleteid}/>);
  }

export default function SurveyForm(props) {

    const classes = useStyles();
    const [dense, setDense] = useState(false);
    const questions = props.questions;

    const deleteHandler = questionId => {
        props.onDeleteQuestion(questionId);
    }

    return(
        <div className="">
            <Paper className={classes.root}>
          <Typography variant="h6" className={classes.title}>
            Questions
          </Typography>
          <div className={classes.demo}>
            <List dense={dense}>
              {
                //remove deletehandler  
                generateQuestionArray(questions, deleteHandler)
              }
            </List>
          </div>
            </Paper>
        </div>
    );
}



