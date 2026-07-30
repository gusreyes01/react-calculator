import React from 'react';
import { render } from '@testing-library/react';
import CalculatorScreen from './index.js';

test('renders the active calculator value', () => {
  const obj = {userTotal: 8, calcVal: '42', curVal: null, operand: null};
  const { getByText } = render(<CalculatorScreen obj={obj} />);

  expect(getByText('42')).toBeInTheDocument();
});
