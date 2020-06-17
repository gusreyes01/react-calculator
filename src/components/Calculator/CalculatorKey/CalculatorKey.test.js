import React from 'react';
import ReactDOM from "react-dom";
import CalculatorKey from './index.js';
import renderer from 'react-test-renderer';

test('app CalculatorKey renders successfully', () => {
  const div = document.createElement("div");
  ReactDOM.render(<CalculatorKey />, div);
});


test('props.onClick is called when button is clicked', () =>{
  const fn = jest.fn();
  let tree = renderer.create(<CalculatorKey onClick={fn} />);
  // Simulate button click
  const key = tree.root.findByType('div');
  key.props.onClick();
  // Verify callback is invoked
  expect(fn.mock.calls.length).toBe(1);
  expect(fn.mock.calls[0][0]).toBe('X');
});