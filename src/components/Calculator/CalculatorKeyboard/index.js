import React from 'react';
import './style.css';
import CalculatorKey from '../CalculatorKey'
function CalculatorKeyboard() {

  const onClick = (value) => { // use consts or let
    alert(value)
  }

  return (
    <div className="CalculatorKeyboard">
        <CalculatorKey onClick={onClick} value="Test"></CalculatorKey>
    </div>
  );
}

export default CalculatorKeyboard;
