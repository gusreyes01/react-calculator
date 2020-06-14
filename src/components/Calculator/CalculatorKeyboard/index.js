import React from 'react';
import './style.css';
import CalculatorKey from '../CalculatorKey'
function CalculatorKeyboard() {

  const onClick = (value) => { // use consts or let
    alert(value)
  }

  return (
    <div className="CalculatorKeyboard">
        <div className="CalculatorKeyboard__row top">
          <CalculatorKey onClick={onClick} value="AC"/>
          <CalculatorKey onClick={onClick} value="%"/>
          <CalculatorKey onClick={onClick} value="÷"/>
        </div>
        <div className="CalculatorKeyboard__row">
          <CalculatorKey onClick={onClick} value="7" />
          <CalculatorKey onClick={onClick} value="8" />
          <CalculatorKey onClick={onClick} value="9" />
          <CalculatorKey onClick={onClick} value="×" />
        </div>
        <div className="CalculatorKeyboard__row">
          <CalculatorKey onClick={onClick} value="4"/>
          <CalculatorKey onClick={onClick} value="5"/>
          <CalculatorKey onClick={onClick} value="6"/>
          <CalculatorKey onClick={onClick} value="−"/>
        </div>
        <div className="CalculatorKeyboard__row">
          <CalculatorKey onClick={onClick} value="1"/>
          <CalculatorKey onClick={onClick} value="2"/>
          <CalculatorKey onClick={onClick} value="3"/>
          <CalculatorKey onClick={onClick} value="+"/>
        </div>
        <div className="CalculatorKeyboard__row">
          <CalculatorKey onClick={onClick} value="0"/>
          <CalculatorKey onClick={onClick} value="."/>
          <CalculatorKey onClick={onClick} value="="/>
        </div>
    </div>
  );
}

export default CalculatorKeyboard;
