import React, { Component } from 'react';

export default class EvenAndOdd extends Component {
  constructor(){
      super();
      this.state = {
        evenArray: [],
        oddArray: [],
        userInput: ''
      };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  evenOddMethod(userInput){
      let newArray = userInput.split(',');
      let evens = [];
      let odds = [];

      for(let i=0; i < newArray.length; i++){
          if(newArray[i] % 2 === 0){
              evens.push(Number(newArray[i]));
          } else {
              odds.push(Number(newArray[i]));
          }

      }
      this.setState({evenArray: evens, oddArray: odds});
  }
  
    render() {
    return (
      <div className="puzzleBox evenAndOddPB">
          <h4>Evens and Odds</h4>
          <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
          <button className="confirmationButton" onClick={() => this.evenOddMethod(this.state.userInput)}>Split</button>
          <span className="resultsBox">Evens:{JSON.stringify(this.state.evenArray)}</span>
          <span className="resultsBox">Odds:{JSON.stringify(this.state.oddArray)}</span>
      </div>    
    )
  }
}