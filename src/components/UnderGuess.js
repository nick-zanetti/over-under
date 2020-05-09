import React from 'react'; 

const UnderGuess = (props) => (
  <div>
    <button className="button"
    onClick={props.handleUnderGuess}
    >
    Under
    </button>
  
  </div>
)

export default UnderGuess