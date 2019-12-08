/* Contains all the buttons with all the functionality
This might be a beefy js file if we decide to put all of 
the button handlers here. */

/* 
  FIXME: surveyName textfield variant="outlined" is not working! 
         Using default textfield right now
*/


import React from 'react';
import QuestionModal from '../Modal/QuestionModal';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {SurveyContextConsumer} from '../Context/SurveyContextClass'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(5),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  marginAlign: {
    marginLeft: theme.spacing(1),
  },
  noStyle: {
    textAlign: 'left',
    listStyle: 'none',
    marginLeft: theme.spacing(1),
    padding: '0',
  },
}));

/*
    param: props.surveyId
           props.dateCreated
           props.publishedStatus
*/
export default function SurveyActions(props) {

  const [reqHelperText, setReqHelperText] = React.useState("");

  const [isError, setIsError] = React.useState(false);

  const handleOnTextChange = () => {
    setReqHelperText("");
    setIsError(false);
  }

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = value => {
    setOpen(false);
  };


  //could be improved....
  const isPopulated = (surveyObject) => {
    if(surveyObject.surveyTitle.length) {
      return false;
    }
    if(surveyObject.questions.length) {
      return false;
    }
    return true;
  }


  return (
    <Paper className={classes.root}>
      <React.Fragment>
        <SurveyContextConsumer>
          {({survey, surveyChangeListener}) => (
            //Potentially wrap the textfield in a form
            <TextField
            error={isError}
            id="surveyName"
            className={classes.textField}
            margin="normal"
            //Something about this version not having a variant prop??
            fullWidth
            label="Survey Name"
            helperText={reqHelperText}
            defaultValue={survey.surveyTitle}
            onChange={() => surveyChangeListener(
              survey.surveyTitle = document.getElementById("surveyName").value
            )}
          />
          )}
        </SurveyContextConsumer>
       </React.Fragment>
      <React.Fragment>
        <SurveyContextConsumer>
          {({survey}) => (
            <Typography variant="h6" gutterBottom>
            <ul className={classes.noStyle}>
          <li>Date Created: <span>{survey.creationDate}</span></li>
          <li>Published Status: <span style={{color: 'red'}}>{survey.isPublished}</span></li>
              <li>Survey ID: <span>{survey.surveyId}</span></li>
            </ul>
          </Typography>
          )}
        </SurveyContextConsumer>
      </React.Fragment>

      <React.Fragment>
        <SurveyContextConsumer>
          {({survey}) => (
            <Grid container spacing={1} direction="column" alignItems="flex-start">
        <Grid item>
            <Button
            variant="contained"
            color="primary"
            size="large"
            disabled={isPopulated(survey)}
            className={classes.marginAlign}
            >Publish</Button>
            <Button
            variant="contained"
            color="primary"
            size="large"
            disabled={isPopulated(survey)}
            className={classes.marginAlign}
            >Save</Button>
        </Grid>
        <Grid item>     
            <Button 
            onClick={handleClickOpen}
            variant="contained"
            color="secondary"
            size="large"
            className={classes.marginAlign}
            >Add Question
            </Button>
            <Button
            variant="contained"
            color="secondary"
            size="large"
            className={classes.marginAlign}>Configure Trigger</Button>
            <Button
            variant="contained"
            color="secondary"
            size="large"
            disabled={isPopulated(survey)}
            className={classes.marginAlign}>Get Embeddable Code</Button>
        </Grid>
      </Grid>
          )}
      </SurveyContextConsumer>
      </React.Fragment>
      <SurveyContextConsumer>
          {({addQuestionListener}) => (
          <QuestionModal open={open} onClose={handleClose} onAdd={addQuestionListener} buttonText="Add"/>
          )}
          </SurveyContextConsumer>
    </Paper>
  );
}