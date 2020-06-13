import React from 'react';
import './style.css';
import CalculatorKeyboard from '../Calculator/CalculatorKeyboard';
import CalculatorScreen from '../Calculator/CalculatorScreen';

function App() {
  return (
    <div className="App">
      <CalculatorScreen></CalculatorScreen>
      <CalculatorKeyboard></CalculatorKeyboard>
    </div>
  );
}

export default App;
