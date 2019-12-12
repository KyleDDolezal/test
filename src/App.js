import React from 'react';
import logo from './logo.svg';
import './App.css';
import Add from './Add';

function App() {
  return (
    <div className="App">
      <Add numbers={[1,2]}/>
      <Add numbers={[1,2,3]}/>
    </div>
  );
}

export default App;
