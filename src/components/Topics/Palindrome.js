import React, { Component } from 'react';

export default class Palindrome extends Component {
    constructor(){
        super();
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    palindromeMethod(userInput){
        let forwards = userInput;
        let backwards = userInput;

        backwards = backwards.split('');
        backwards = backwards.reverse();
        backwards = backwards.join('');

        if (forwards === backwards){
            this.setState({palindrome: 'true'})
        } else {
            this.setState({palindrome: 'false'})
        }

    }

  render() {
    return (
      <div className='puzzleBox filterStringPB'>
          <h4>Palindrome</h4>
          <input  className="inputLine" onChange={(e) => this.setState({userInput: e.target.value})}></input>
          <button className='confirmationButton' onClick={() => this.palindromeMethod(this.state.userInput)}>Check</button>
          <span className='resultsBox'>{this.state.palindrome}</span>
          </div>
    )
  }
}