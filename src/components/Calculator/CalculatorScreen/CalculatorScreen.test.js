import React from 'react';
import ReactDOM from "react-dom";
import CalculatorScreen from './index.js';

test('app CalculatorScreen renders successfully', () => {
  const div = document.createElement("div");
  ReactDOM.render(< CalculatorScreen />, div);
});
