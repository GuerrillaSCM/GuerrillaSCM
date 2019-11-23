import React,{Component} from 'react';
import logo from './logo.svg';
import TextField from '@material-ui/core/TextField';
import './App.css';
import Rating from './StarRating.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <body style={{backgroundColor: "#fffdd0", minHeight: "100vh"}}>

          <img src={logo} className="App-logo" alt="logo" />

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
              label="Multiline Placeholder"
              placeholder="Placeholder"
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
