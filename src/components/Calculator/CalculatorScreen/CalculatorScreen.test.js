import React, { useState } from 'react';
import ReactDOM from "react-dom";
import CalculatorScreen from './index.js';

test('app CalculatorScreen renders successfully', () => {
  const obj = {userTotal: 0, curVal: null, operand: null}
  const div = document.createElement("div");
  ReactDOM.render(< CalculatorScreen obj={obj} />, div);
});
