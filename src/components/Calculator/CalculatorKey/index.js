import React from 'react';
import './style.css';
import PropTypes from "prop-types";



const CalculatorKey = (props) => {
 
  const _onClick = () => { // use consts or let
    props.onClick(props.value)
  }

  return (
    <div className="CalculatorKey" onClick={_onClick}>
      <div>{props.value}</div>
    </div>
  );
}

CalculatorKey.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

// Set defaultProps
CalculatorKey.defaultProps = {
  value: "X",
  onClick: null
};

export default CalculatorKey;
