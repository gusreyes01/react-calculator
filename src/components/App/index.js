import React, { useState } from 'react';
import './style.css';
import CalculatorKeyboard from '../Calculator/CalculatorKeyboard';
import CalculatorScreen from '../Calculator/CalculatorScreen';
import Operation from '../operations';

function App() {
  const [obj, setObj] = useState({userTotal: 0, calcTotal: null, newVal: null});

  const onClick = (val) => {
    obj.newVal = val
    setObj(obj => Operation(obj))
  }

  return (
    <div className="App">
      <CalculatorScreen obj={obj}></CalculatorScreen>
      <CalculatorKeyboard onClick={onClick}></CalculatorKeyboard>
    </div>
  );
}

export default App;
