import React from 'react'
import TextField from '@material-ui/core/TextField';

export default function MultipleChoiceType(props) {
    


    return (
        <div>
            <TextField 
            id="question_choice_1"
            autoFocus
            fullWidth
            inputProps = {{
                maxLength: 60,
            }}
            label="Choice One"
            />

            <TextField 
            id="question_choice_2"
            autoFocus
            fullWidth
            label="Choice Two"/>

            <TextField 
            id="question_choice_3"
            autoFocus
            fullWidth
            label="Choice Three"/>

            <TextField 
            id="question_choice_4"
            autoFocus
            fullWidth
            label="Choice Four"/>
        </div>
    );
}