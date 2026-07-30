import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import App from './index.js';

test('calculates a result from keyboard input', () => {
  const { container, getByText } = render(<App />);

  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('='));

  expect(container.querySelector('.CalculatorScreen')).toHaveTextContent('5');
});
