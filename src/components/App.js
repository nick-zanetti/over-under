import React from 'react';
import OverGuess from './OverGuess';
import UnderGuess from './UnderGuess';
import Reset from './Reset';
import './App.css';

class App extends React.Component {
  state = {
    raninitialnum: Math.floor(Math.random() * 100),
    generatedrannum: Math.floor(Math.random() * 100),
    message: 'Pick over or under (1-100)'
  }


  handleOverGuess = () => {
    if (this.state.generatedrannum > this.state.raninitialnum) {
      this.setState(() => ({
        message: `You won! The number was ${this.state.generatedrannum}`
    }))
    } else if (this.state.generatedrannum < this.state.raninitialnum) {
      this.setState(() => ({
        message: `You lost! The number was ${this.state.generatedrannum}`
    }))
    } else if (this.state.raninitialnum === this.state.generatedrannum) {
      this.setState(() => ({
        message: 'The numbers were the same lol! Roll again!'
    }))
    }
    
  }

  handleReset = () => {
    this.setState(() => ({
      raninitialnum: Math.floor(Math.random() * 100),
      generatedrannum: Math.floor(Math.random() * 100),
      message: 'Pick over or under (1-100)'
  }))
  }

  handleUnderGuess = () => {
    if (this.state.generatedrannum > this.state.raninitialnum) {
      this.setState(() => ({
        message: `You lost! The number was ${this.state.generatedrannum}`
    }))
      
    } else if (this.state.generatedrannum < this.state.raninitialnum) {
      this.setState(() => ({
        message: `You won! The number was ${this.state.generatedrannum}`
    }))
    } else if (this.state.raninitialnum === this.state.generatedrannum) {
      this.setState(() => ({
        message: 'The numbers were the same lol! Roll again!'
    }))
      
    }
  }


  render() {
    return (
      <div className="App">
        <div id="wrapper">
          
        <h1 id="heading">Over / Under</h1>
        
        <p id="initial-num">{this.state.raninitialnum}</p>
        
        <p>{this.state.message}</p>
        <div id="button-wrapper">
          <OverGuess 
            handleOverGuess={this.handleOverGuess}
          />
          <UnderGuess 
            handleUnderGuess={this.handleUnderGuess}
          />
          <Reset 
            handleReset={this.handleReset}
          />
        </div>  
        </div>
      </div>
    );
  }
}



export default App;
