import React, { useState } from 'react';
import './style.css';
import CalculatorKeyboard from '../Calculator/CalculatorKeyboard';
import CalculatorScreen from '../Calculator/CalculatorScreen';
import Operation from '../operations';

function App() {
  const [obj, setObj] = useState({total: 0, newVal: null, operand: null});


  const onClick = (val) => {

    console.log(Operation(obj))
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
