import React from 'react';
import ReactDOM from "react-dom";
import App from './index.js';

test('app App renders successfully', () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});
