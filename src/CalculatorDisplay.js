import React from 'react';
import './css/CalculatorDisplay.css';

const CalculatorDisplay = (props) => {
  const { current, total } = props;
  return(
    <div className="CalculatorDisplay">
      <h2>{total}</h2>
      <h1 id="display">{current}</h1>
    </div>
  );
};

export default CalculatorDisplay;