import React, { Component } from 'react';

export default class Sum extends Component {
    constructor(){
        super();
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    sumMethod(number1, number2){
        let num1 = Number(number1);
        let num2 = Number(number2);
        let newSum = num1 + num2;
        this.setState({sum: newSum})
    }

  render() {
    return (
      <div className='puzzleBox sumPB'>
          <h4>Sum</h4>
          <input className='inputLine' onChange={(e) => this.setState({number1: e.target.value})}></input>
          <input className='inputLine' onChange={(e) => this.setState({number2: e.target.value})}></input>
          <button className='confirmationButton' onClick={()=> this.sumMethod(this.state.number1, this.state.number2)}>Add</button>
          <span className='resultsBox'>{this.state.sum}</span>
          </div>
    )
  }
}