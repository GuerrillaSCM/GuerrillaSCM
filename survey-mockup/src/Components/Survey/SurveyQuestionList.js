import React, {useState} from 'react';
import StarIcon from '@material-ui/icons/Star';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItem from '@material-ui/core/ListItem';
import {SurveyContextConsumer} from '../Context/SurveyContextClass'
import QuestionModal from '../Modal/QuestionModal';
//redux
import {useDispatch} from 'react-redux'
import * as surveyActions from '../../store/actions/surveyActions'

/*
    param: props.question (Question text)
           props.type (Question type)
           props.id (Question id) <- doesnt need to be stored. easier to manipulate 
           data with an id, also serves as the list key which is kinda required.
*/

export default function SurveyQuestionList(props) {

    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = value => {
      setOpen(false);
    };


    return (
        <div className="">
            <ListItem>
                <ListItemAvatar>
                    <Avatar >
                        <StarIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={props.question}
                    secondary={props.type}
                    id={props.id}
                />
                <ListItemSecondaryAction>
                    <SurveyContextConsumer> 
                        {({removeQuestionListener}) => (
                            <IconButton edge="end" aria-label="delete" onClick={
                                () => dispatch(surveyActions.deleteQuestion(props.id))}>
                            <DeleteIcon />
                            </IconButton>
                        )}
                    </SurveyContextConsumer>
                        <IconButton edge="end" aria-label="delete" onClick={handleClickOpen}>
                            <EditIcon />
                        </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        {/* Open question dialog from clicking edit */}
         <SurveyContextConsumer>
          {({editQuestionListener}) => (
          <QuestionModal open={open} onClose={handleClose} onAdd={editQuestionListener} 
          questionId={props.id} 
          prompt={props.question} 
          questionType={props.type}
          buttonText="Update"
          />
          )}
          </SurveyContextConsumer>
        </div>
    );
}
