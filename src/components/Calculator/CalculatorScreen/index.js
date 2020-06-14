import React from 'react';
import './style.css';

function CalculatorScreen(props) {
  return (
    <div className="CalculatorScreen">
      <div>{props.obj.total}</div>
    </div>
  );
}

export default CalculatorScreen;
