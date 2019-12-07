import React from 'react';
import './App.css';
import TimerTrigger from './Components/TimerTrigger/TimerTrigger';
import WebsiteModal from './Components/WebsiteModal/WebsiteModal';

function App() {
  return (
    <div className="App">
      <h3>Some random React App</h3>
      <TimerTrigger timerLength={5}/>
    </div>
  );
}

export default App;