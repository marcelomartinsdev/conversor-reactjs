import React from 'react';
import logo from './logo.svg';
import './App.css';

import Converter from "./components/Converter"

function App() {
  return (
    <div className="App">
      <Converter coinA="USD" coinB="BRL"></Converter>


    </div>
  );
}

export default App;
