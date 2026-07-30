import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import CalculatorKeyboard from './index.js';

test('renders the calculator keys and forwards a key press', () => {
  const onClick = jest.fn();
  const { getByText } = render(<CalculatorKeyboard onClick={onClick} />);

  fireEvent.click(getByText('7'));
  expect(onClick).toHaveBeenCalledWith('7');
  expect(getByText('AC')).toBeInTheDocument();
});
