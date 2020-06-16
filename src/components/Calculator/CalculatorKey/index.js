import React from 'react';
import './style.css';
import PropTypes from "prop-types";

function CalculatorKey(props) {
 
  const _onClick = () => { 
    props.onClick(props.value)
  }

  return (
    <div className={"CalculatorKey "+ props.className} onClick={_onClick}>
      <div>{props.value}</div>
    </div>
  );
}

CalculatorKey.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  class: PropTypes.string,
}

// Set defaultProps
CalculatorKey.defaultProps = {
  value: "X",
  onClick: null,
  class: null,
};

export default CalculatorKey;
