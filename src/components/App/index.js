import React, { useState } from 'react';
import './style.css';
import CalculatorKeyboard from '../Calculator/CalculatorKeyboard';
import CalculatorScreen from '../Calculator/CalculatorScreen';
import Operation from '../operations';

function App() {
  let [obj, setObj] = useState({userTotal: 0, calcTotal: null, curVal: null, operand: null});

  const onClick = (val) => {
    obj.curVal = val
    const op = Operation(obj)
    setObj(op.calculate)
  }


  return (
    <div className="App">
      <CalculatorScreen obj={obj}></CalculatorScreen>
      <CalculatorKeyboard onClick={onClick}></CalculatorKeyboard>
    </div>
  );
}

export default App;
