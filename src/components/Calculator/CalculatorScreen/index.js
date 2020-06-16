import React from 'react';
import './style.css';

function CalculatorScreen(props) {
  return (
    <div className="CalculatorScreen">
      <div>{props.obj.userTotal}</div>
    </div>
  );
}

export default CalculatorScreen;
