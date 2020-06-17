import React from 'react';
import './style.css';

function CalculatorScreen(props) {
  return (
    <div className="CalculatorScreen">
      <div> { props.obj.calcVal  || props.obj.userTotal  || 0 }</div>
    </div>
  );
}

export default CalculatorScreen;
