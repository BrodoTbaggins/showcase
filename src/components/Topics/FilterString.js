import React, { Component } from 'react';

export default class FilterString extends Component {
    constructor(){
        super();
        this.state = {
            unfilteredArray: ["test", "test2", "test3", "test4"],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(event){
this.setState({userInput: event})
    }

    filterStringMethod(userInput){
        var names = this.state.unfilteredArray;
        var filteredNames = [];
    
        for ( var i = 0; i < names.length; i++ ) {
          if ( names[i].includes(userInput) ) {
            filteredNames.push(names[i]);
          }
        }
    
        this.setState({ filteredArray: filteredNames });
    }
    

  render() {
    return (
      <div className='puzzleBox filterStringPB'>
          <h4>Filter String</h4>
          <span className='puzzleText'>Original:{JSON.stringify(this.state.unfilteredArray)}</span>
          <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)}></input>
          <button className='confirmationButton' onClick={() => this.filterStringMethod(this.state.userInput)}>Filter</button>
          <span className='resultsBox filterStringRB'>Filtered:{JSON.stringify(this.state.filteredArray)}</span>
          </div>
    )
  }
}