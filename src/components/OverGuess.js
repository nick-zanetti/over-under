import React from 'react';

const OverGuess = (props) => (
  <div>
    <button className="button"
    onClick={props.handleOverGuess}
    >
    Over
    </button>
  
  </div>
)

export default OverGuess