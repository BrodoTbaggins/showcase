import React, { Component } from 'react';

export default class FilterObject extends Component {
    constructor(){
        super();
        this.state = {
            unFilteredArray: [
                {
                    firstName: 'Austin',
                    lastName: 'Pack',
                    age: 21
                },
                {
                    firstName: 'John',
                    lastName: 'Smith',
                    hair: 'Brown'
                },
                {
                    firstName: 'Robert',
                    lastName: 'Jones',
                    dead: 'no'
                }
            ],
            userInput: '',
            filteredArray: []

        }
    }

    filterObjectMethod(prop){
        let originalArray = this.state.unFilteredArray;
        let newArray = [];

        for(let i=0; i < originalArray.length; i++){
            if(originalArray[i].hasOwnProperty(prop)){
                newArray.push(originalArray[i]);
            }
        }
        this.setState({filteredArray: newArray})
    }

  render() {
    return (
      <div className='puzzleBox filterObjectPB'>
        <h4>Filter Object</h4>
        <span className='puzzleText'>Original:{JSON.stringify(this.state.unFilteredArray)}</span>
        <input className='inputLine' onChange={(e) => this.setState({ userInput: e.target.value })}></input>
        <button className='confirmationButton' onClick={() => this.filterObjectMethod(this.state.userInput)}>Filter</button>
        <span className='resultsBox filterObjectRB'>Filtered:{JSON.stringify(this.state.filteredArray)}</span>
        </div>
    )
  }
}