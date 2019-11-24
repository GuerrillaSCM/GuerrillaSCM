import React from 'react';
import './App.css';
import LikeButton from './Components/LikeButton/LikeButton'
import TimerTrigger from './Components/TimerTrigger/TimerTrigger';
import WebsiteModal from '../src/Components/WebsiteModal';

function App() {
  return (
    <div className="App">
      <h3>Some random React App</h3>
      <LikeButton></LikeButton>
      <TimerTrigger timerLength={5}/>
      <WebsiteModal></WebsiteModal>
    </div>
  );
}

export default App;