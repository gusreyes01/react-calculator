import React from 'react';
import './style.css';
import CalculatorKey from '../CalculatorKey'
import PropTypes from "prop-types";

function CalculatorKeyboard(props) {

  return (
    <div className="CalculatorKeyboard">
        <div className="CalculatorKeyboard__row top">
          <CalculatorKey onClick={props.onClick} value="AC"/>
          <CalculatorKey onClick={props.onClick} value="%"/>
          <CalculatorKey onClick={props.onClick} value="÷"/>
        </div>
        <div className="CalculatorKeyboard__row">
          <CalculatorKey onClick={props.onClick} value="7" />
          <CalculatorKey onClick={props.onClick} value="8" />
          <CalculatorKey onClick={props.onClick} value="9" />
          <CalculatorKey onClick={props.onClick} value="×" />
        </div>
        <div className="CalculatorKeyboard__row">
          <CalculatorKey onClick={props.onClick} value="4"/>
          <CalculatorKey onClick={props.onClick} value="5"/>
          <CalculatorKey onClick={props.onClick} value="6"/>
          <CalculatorKey onClick={props.onClick} value="−"/>
        </div>
        <div className="CalculatorKeyboard__row">
          <CalculatorKey onClick={props.onClick} value="1"/>
          <CalculatorKey onClick={props.onClick} value="2"/>
          <CalculatorKey onClick={props.onClick} value="3"/>
          <CalculatorKey onClick={props.onClick} value="+"/>
        </div>
        <div className="CalculatorKeyboard__row">
          <CalculatorKey onClick={props.onClick} value="0"/>
          <CalculatorKey onClick={props.onClick} value="."/>
          <CalculatorKey onClick={props.onClick} value="="/>
        </div>
    </div>
  );
}

CalculatorKeyboard.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

// Set defaultProps
CalculatorKeyboard.defaultProps = {
  value: "X",
  onClick: null
};

export default CalculatorKeyboard;
