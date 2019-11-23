import React from 'react';
import './App.css';
import LikeButton from './Components/LikeButton/LikeButton'
import TimerTrigger from './Components/TimerTrigger/TimerTrigger';

function App() {
  return (
    <div className="App">
      <h3>Some random React App</h3>
      <LikeButton></LikeButton>
      <TimerTrigger></TimerTrigger>
    </div>
  );
}

export default App;