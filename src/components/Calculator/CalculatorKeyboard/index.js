import React from 'react';
import './style.css';
import CalculatorKey from '../CalculatorKey'
function CalculatorKeyboard() {

  const onClick = (value) => { // use consts or let
    alert(value)
  }

  return (
    <div className="CalculatorKeyboard">
        <div className="CalculatorKeyboard__row">
          <CalculatorKey onClick={onClick} value="AC"></CalculatorKey>
          <CalculatorKey onClick={onClick} value="%"></CalculatorKey>
          <CalculatorKey onClick={onClick} value="÷"></CalculatorKey>
        </div>
        <div className="CalculatorKeyboard__row">
          <CalculatorKey onClick={onClick} value="7"></CalculatorKey>
          <CalculatorKey onClick={onClick} value="8"></CalculatorKey>
          <CalculatorKey onClick={onClick} value="9"></CalculatorKey>
          <CalculatorKey onClick={onClick} value="×"></CalculatorKey>
        </div>
        <div className="CalculatorKeyboard__row">
          <CalculatorKey onClick={onClick} value="4"></CalculatorKey>
          <CalculatorKey onClick={onClick} value="5"></CalculatorKey>
          <CalculatorKey onClick={onClick} value="6"></CalculatorKey>
          <CalculatorKey onClick={onClick} value="−"></CalculatorKey>
        </div>
        <div className="CalculatorKeyboard__row">
          <CalculatorKey onClick={onClick} value="1"></CalculatorKey>
          <CalculatorKey onClick={onClick} value="2"></CalculatorKey>
          <CalculatorKey onClick={onClick} value="3"></CalculatorKey>
          <CalculatorKey onClick={onClick} value="+"></CalculatorKey>
        </div>
        <div className="CalculatorKeyboard__row">
          <CalculatorKey onClick={onClick} value="0"></CalculatorKey>
          <CalculatorKey onClick={onClick} value="."></CalculatorKey>
          <CalculatorKey onClick={onClick} value="="></CalculatorKey>
        </div>
    </div>
  );
}

export default CalculatorKeyboard;
