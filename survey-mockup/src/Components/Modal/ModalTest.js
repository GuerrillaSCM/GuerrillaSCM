/* This creates and displays an add question dialog 
   The dialog will take in a question string 
   and a question type
   in the future it should also accept questionOptions 
   for like multiple choice or extra text
*/

/*
    TODO: Dynamically enter menu items
          Margin in between texts
          Get the question text and type value to the parent 
*/

import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export default function AddQuestionDialog(props) {
    const { open, onClose } = props

    const handleClose = () => {
        onClose();
    };

    const handleAdd = () => {
        var qText = document.getElementById("question_text").value;
        var qType = document.getElementById("question_type").value;
        var test = {text: qText, type: qType}
        //props.onAdd({questionText: qText, questionNumber: '1'})
        props.onAdd(test);
        onClose();
    }

    return (
        <div className="">
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title"
                fullWidth>
                <DialogTitle id="form-dialog-title">Add Question</DialogTitle>
                <DialogContent >
                    <DialogContentText >
                        Enter your question
                    </DialogContentText>
                    <TextField
                        autoFocus
                        id="question_text"
                        label="Question"
                        type="text"
                        value={props.questionText}
                        fullWidth
                        //defaultValue="This is a test"
                    />
                    </DialogContent>
                    <DialogContent >
                    <DialogContentText>
                        Select Question Type
                    </DialogContentText>
                    <Select
                        fullWidth
                        autoFocus
                        defaultValue="star-rating"
                        value={props.questionType}
                        id='question_type_select'
                        inputProps={{
                            name: 'question_type',
                            id: 'question_type',
                        }}>
                        <MenuItem value="star-rating">Star Rating</MenuItem>
                        <MenuItem value="multiple-choice">Multiple Choice</MenuItem>
                        <MenuItem value="comments-box">Comments Box</MenuItem>
                    </Select>
                    </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handleAdd} color="primary">
                        Add
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

//not sure if this is needed
AddQuestionDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

