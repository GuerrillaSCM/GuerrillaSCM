import React,{Component} from 'react';
import scmLogo from './guerillaSCM.png';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Rating from './StarRating.js';
import './UserSurvey.css';

class UserSurvey extends Component {
  render() {
    return (
      <div className="UserSurvey">
        <body style={{backgroundColor: "#fffdd0", minHeight: "100vh"}}>

          <img src={scmLogo} className="UserSurvey-logo" alt="logo" />

          {/* Survey Question*/}
          <h1>What do you think of our product?</h1>

          {/* Star Rating Tool */}
          <Rating/>

          <div style={
            {width: "80%",
            display: "flex",
            marginTop: "10px",
            marginBottom: "10px",
            marginLeft: "10%",
            marginRight: "10%"}
          }>
            {/* Survey Answer Box */}
            {/* MaterialUI textbox */}
            <TextField
              id="outlined-textarea"
              label="Feedback"
              placeholder="Leave some feedback..."
              multiline
              margin="normal"
              fullWidth="true"
              variant="outlined"
              rows="4"
            /> 
            {/*
            <textarea style={
              { width: "80%",
                height: "100px",
                marginTop: "10px",
                marginBottom: "10px",
                marginLeft: "10%",
                marginRight: "10%"}
            }>
              Leave some feedback...
            </textarea>
            */}
          </div>

          <div> 
            {/* Save Button */}
            <Button variant="contained" style={{marginRight: "5px"}}>Save</Button>
            {/* Submit Button */}
            <Button variant="contained" style={{marginLeft: "5px"}}>Submit</Button>
          </div>

        </body>
      </div>
    );
  }
}

export default UserSurvey;
