import React,{Component} from 'react';
import logo from './logo.svg';
import TextField from '@material-ui/core/TextField';
import './App.css';
import Rating from './StarRating.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <body style={{backgroundColor: "#333333", minHeight: "100vh"}}>

          <img src={logo} className="App-logo" alt="logo" />

          {/* Survey Question*/}
          <h1 style={{color: "white"}}>What do you think of our product?</h1>

          {/* Star Rating Tool */}
          <Rating/>

          <div>
            {/* Survey Answer Box */}
            {/* MaterialUI textbox
            <TextField
              id="outlined-textarea"
              label="Multiline Placeholder"
              placeholder="Placeholder"
              multiline
              className={classes.textField}
              margin="normal"
              variant="outlined"
            /> */}
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
          </div>

          <div> 
            {/* Save Button */}
            <button style={{marginRight: "5px"}}>Save</button>
            {/* Submit Button */}
            <button style={{marginLeft: "5px"}}>Submit</button>
          </div>

        </body>
      </div>
    );
  }
}

export default App;
