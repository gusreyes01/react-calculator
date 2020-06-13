import React from 'react';
import ReactDOM from "react-dom";
import CalculatorKey from './index.js';

test('app CalculatorKey renders successfully', () => {
  const div = document.createElement("div");
  ReactDOM.render(<CalculatorKey />, div);
});
