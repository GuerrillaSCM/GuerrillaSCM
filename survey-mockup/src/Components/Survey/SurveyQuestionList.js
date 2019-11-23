import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItem from '@material-ui/core/ListItem';

/*
    param: props.question (Question text)
           props.type (Question type)
           props.id (Question id) <- doesnt need to be stored. easier to manipulate 
           data with an id, also serves as the list key which is kinda required.
*/

const surveyQuestionList = (props) =>{
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
                    <IconButton edge="end" aria-label="delete" onClick={() => props.onDelete(props.id)}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton edge="end" aria-label="delete">
                        <EditIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </div>
    );
}

export default surveyQuestionList;
