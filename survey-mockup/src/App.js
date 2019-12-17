/* Enclose container in a browser router */
import React from 'react';
import './App.css';
import Container from './Components/Container/Container'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/'>
        <Container/>
      </BrowserRouter>
    </div>
  );
}

export default App;
