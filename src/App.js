import React from 'react';
import logo from './logo.svg';
import './App.css';
import Add from './Add';

function App() {
  return (
    <div className="App">
      <Add firstNumber={1} secondNumber={2} />
    </div>
  );
}

export default App;
