import React from 'react';
import ReactDOM from "react-dom";
import CalculatorKeyboard from './index.js';

test('app CalculatorKeyboardKey renders successfully', () => {
  const div = document.createElement("div");
  ReactDOM.render(< CalculatorKeyboard />, div);
});
