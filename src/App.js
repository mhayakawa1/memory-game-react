//import logo from './logo.svg';
import './App.css';
import React from 'react';

{/*OBJECTIVES FOR TODAY
- figure out how to make button disabled
*/}

{/*Colors*/}
const red = {
  backgroundColor: "#ea5545"
}
const pink = {
  backgroundColor: "#f46a9b"
}
const darkOrange = {
  backgroundColor: "#ef9b20"
}
const lightOrange = {
  backgroundColor: "#edbf33"
}
const yellow = {
  backgroundColor: "#ede15b"
}
const green = {
  backgroundColor: "#bdcf32"
}
const blue = {
  backgroundColor: "#27aeef"
}
const purple = {
  backgroundColor: "#b33dc6"
}

let colorsArrayDefault = [red, pink, darkOrange, lightOrange, 
  yellow, green, blue, purple];

{/*Cells*/}
const cellOneOne = {
  gridRow: 1,
  gridColumn: 1
}
const cellOneTwo = {
  gridRow: 1,
  gridColumn: 2
}
const cellOneThree = {
  gridRow: 1,
  gridColumn: 3
}
const cellTwoOne = {
  gridRow: 2,
  gridColumn: 1
}
const cellTwoTwo = {
  gridRow: 2,
  gridColumn: 2
}
const cellTwoThree = {
  gridRow: 2,
  gridColumn: 3
}
const cellThreeOne = {
  gridRow: 3,
  gridColumn: 1
}
const cellThreeTwo = {
  gridRow: 3,
  gridColumn: 2
}
const cellThreeThree = {
  gridRow: 3,
  gridColumn: 3
}
let cellsArrayDefault = [cellOneOne, cellOneTwo, cellOneThree, cellTwoOne,
  cellTwoTwo, cellTwoThree, cellThreeOne, cellThreeTwo, cellThreeThree]
 
const noBorder = {
  border: 0
}

let guessValues = [];

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      gameStarted: false,
      colorsArray: [],
      cellsArray: [],
      randomNum: 0,
      render: false,
      selectedZero: false,
      selectedOne: false,
      selectedTwo: false,
      selectedThree: false,
      selectedFour: false,
      selectedFive: false,
      selectedSix: false,
      selectedSeven: false,
      selectedEight: false,
      result: ''
    }
    this.gameRound = this.gameRound.bind(this)
    this.selectButton = this.selectButton.bind(this)
    this.submit = this.submit.bind(this)
  }

  gameRound() {
    guessValues = [];
    this.setState({
      gameStarted: false,
      cellsArray: [],
      randomNum: 0,
      render: false,
      selectedZero: false,
      selectedOne: false,
      selectedTwo: false,
      selectedThree: false,
      selectedFour: false,
      selectedFive: false,
      selectedSix: false,
      selectedSeven: false,
      selectedEight: false,
      result: ''
    })
    this.setState({
      gameStarted: true,
      colorsArray: colorsArrayDefault.sort(() => Math.random() - 0.5),
      randomNum: Math.floor(Math.random() * (8)),
      render: true
    })

    setTimeout(function() {
      this.setState({
        render: false
      })
      }.bind(this), 500)
  }

  selectButton (event, value, button, addDelete){
    if (addDelete == 'add') {
      guessValues.push(value)
    } else {
      guessValues.splice(guessValues.indexOf(value), 1)
    }

    if(this.state.gameStarted == false){
      return
    }else{
      switch(button){
      case 'button0':
        this.setState({
          selectedZero: !this.state.selectedZero
        });
        break;
      case 'button1':
        this.setState({
          selectedOne: !this.state.selectedOne
        });
        break;
      case 'button2':
        this.setState({
          selectedTwo: !this.state.selectedTwo
        });
        break;
      case 'button3':
        this.setState({
          selectedThree: !this.state.selectedThree
        });
        break;
      case 'button4':
        this.setState({
          selectedFour: !this.state.selectedFour
        });
        break;
      case 'button5':
        this.setState({
          selectedFive: !this.state.selectedFive
        });
        break;
      case 'button6':
        this.setState({
          selectedSix: !this.state.selectedSix
        });
        break;
      case 'button7':
        this.setState({
          selectedSeven: !this.state.selectedSeven
        });
        break;
      case 'button8':
        this.setState({
          selectedEight: !this.state.selectedEight
        });
    }
    }
    
  }

  submit(){
    this.setState({
      render: true
    })

    if(guessValues.length == 2 && guessValues[0] == guessValues[1]){
      this.setState({
        result: 'Correct! You Win.'
      })
    }else{
      this.setState({
        result: 'Wrong! You Lose.'
      })
    }
  }

  render(){
    const unselected = {backgroundColor: 'black'};
    const selected = {backgroundColor: '#505050'};
    let display = null
    if(this.state.render) {
      display =
        <div className='grid'>
          <button style={{...this.state.colorsArray[0], ...cellsArrayDefault[0], ...noBorder}}
            className='circle-style'></button>
          <button style={{...this.state.colorsArray[1], ...cellsArrayDefault[1], ...noBorder}}
            className='circle-style'></button>
          <button style={{...this.state.colorsArray[2], ...cellsArrayDefault[2], ...noBorder}}
            className='circle-style'></button>
          <button style={{...this.state.colorsArray[3], ...cellsArrayDefault[3], ...noBorder}}
            className='circle-style'></button>
          <button style={{...this.state.colorsArray[4], ...cellsArrayDefault[4], ...noBorder}}
            className='circle-style'></button>
          <button style={{...this.state.colorsArray[5], ...cellsArrayDefault[5], ...noBorder}}
            className='circle-style'></button>
          <button style={{...this.state.colorsArray[6], ...cellsArrayDefault[6], ...noBorder}}
            className='circle-style'></button>
          <button style={{...this.state.colorsArray[7], ...cellsArrayDefault[7], ...noBorder}}
            className='circle-style'></button>
          <button style={{...this.state.colorsArray[this.state.randomNum], ...cellsArrayDefault[8], ...noBorder}}
            className='circle-style'></button>
        </div>
    }else{
      display =
        <div className='grid'>
          <div>
              {this.state.selectedZero === true ? <button style={{...selected, ...cellsArrayDefault[0], ...noBorder}}
              onClick={event => this.selectButton(event, 0, 'button0', 'delete')}
              className='circle-style'></button>
                : <button style={{...unselected, ...cellsArrayDefault[0], ...noBorder}}
                onClick={event => this.selectButton(event, 0, 'button0', 'add')}
                className='circle-style'></button>}
          </div>
          <div>
              {this.state.selectedOne === true ? <button style={{...selected, ...cellsArrayDefault[1], ...noBorder}}
              onClick={event => this.selectButton(event, 1, 'button1', 'delete')}
              className='circle-style'></button>
                : <button style={{...unselected, ...cellsArrayDefault[1], ...noBorder}}
                onClick={event => this.selectButton(event, 1, 'button1', 'add')}
                className='circle-style'></button>}
          </div>
          <div>
              {this.state.selectedTwo === true ? <button style={{...selected, ...cellsArrayDefault[2], ...noBorder}}
              onClick={event => this.selectButton(event, 2, 'button2', 'delete')}
              className='circle-style'></button>
                : <button style={{...unselected, ...cellsArrayDefault[2], ...noBorder}}
                onClick={event => this.selectButton(event, 2, 'button2', 'add')}
                className='circle-style'></button>}
          </div>
          <div>
              {this.state.selectedThree === true ? <button style={{...selected, ...cellsArrayDefault[3], ...noBorder}}
              onClick={event => this.selectButton(event, 3, 'button3', 'delete')}
              className='circle-style'></button>
                : <button style={{...unselected, ...cellsArrayDefault[3], ...noBorder}}
                onClick={event => this.selectButton(event, 3, 'button3', 'add')}
                className='circle-style'></button>}
          </div>
          <div>
              {this.state.selectedFour === true ? <button style={{...selected, ...cellsArrayDefault[4], ...noBorder}}
              onClick={event => this.selectButton(event, 4, 'button4', 'delete')}
              className='circle-style'></button>
                : <button style={{...unselected, ...cellsArrayDefault[4], ...noBorder}}
                onClick={event => this.selectButton(event, 4, 'button4', 'add')}
                className='circle-style'></button>}
          </div>
          <div>
              {this.state.selectedFive === true ? <button style={{...selected, ...cellsArrayDefault[5], ...noBorder}}
              onClick={event => this.selectButton(event, 5, 'button5', 'delete')}
              className='circle-style'></button>
                : <button style={{...unselected, ...cellsArrayDefault[5], ...noBorder}}
                onClick={event => this.selectButton(event, 5, 'button5', 'add')}
                className='circle-style'></button>}
          </div>
          <div>
              {this.state.selectedSix === true ? <button style={{...selected, ...cellsArrayDefault[6], ...noBorder}}
              onClick={event => this.selectButton(event, 6, 'button6', 'delete')}
              className='circle-style'></button>
                : <button style={{...unselected, ...cellsArrayDefault[4], ...noBorder}}
                onClick={event => this.selectButton(event, 6, 'button6', 'add')}
                className='circle-style'></button>}
          </div>
          <div>
              {this.state.selectedSeven === true ? <button style={{...selected, ...cellsArrayDefault[7], ...noBorder}}
              onClick={event => this.selectButton(event, 7, 'button7', 'delete')}
              className='circle-style'></button>
                : <button style={{...unselected, ...cellsArrayDefault[7], ...noBorder}}
                onClick={event => this.selectButton(event, 7, 'button7', 'add')}
                className='circle-style'></button>}
          </div>
          <div>
              {this.state.selectedEight === true ? <button style={{...selected, ...cellsArrayDefault[8], ...noBorder}}
              onClick={event => this.selectButton(event, this.state.randomNum, 'button8', 'delete')}
              className='circle-style'></button>
                : <button style={{...unselected, ...cellsArrayDefault[8], ...noBorder}}
                onClick={event => this.selectButton(event, this.state.randomNum, 'button8', 'add')}
                className='circle-style'></button>}
          </div>
        </div>
    }
    return(
      <div>
        <h1>Memory Game</h1>
        <p>Select the matching colors</p>

        {display}
        
        <div>
          <button onClick={this.gameRound}>New Round</button>
        </div>
        <div>
          <button onClick={this.submit}>Submit</button>
        </div>
        <p>{this.state.result}</p>
      </div> 
    )
  }
}

export default App;
{/*

          <button style={{...this.state.colorsArray[1], ...this.state.cellsArray[1], ...noBorder}} 
            onClick={event => this.selectButton(event, 0)}
            className='circle-style'></button>
          <button style={{...this.state.colorsArray[2], ...this.state.cellsArray[2], ...noBorder}} 
            onClick={event => this.selectButton(event, 2)}
            className='circle-style'></button>
          <button style={{...this.state.colorsArray[3], ...this.state.cellsArray[3], ...noBorder}} 
            onClick={event => this.selectButton(event, 3)}
            className='circle-style'></button>
          <button style={{...this.state.colorsArray[4], ...this.state.cellsArray[4], ...noBorder}} 
            onClick={event => this.selectButton(event, 4)}
            className='circle-style'></button>
          <button style={{...this.state.colorsArray[5], ...this.state.cellsArray[5], ...noBorder}} 
            onClick={event => this.selectButton(event, 5)}
            className='circle-style'></button>
          <button style={{...this.state.colorsArray[6], ...this.state.cellsArray[6], ...noBorder}} 
            onClick={event => this.selectButton(event, 6)}
            className='circle-style'></button>
          <button style={{...this.state.colorsArray[7], ...this.state.cellsArray[7], ...noBorder}} 
            onClick={event => this.selectButton(event, 7)}
            className='circle-style'></button>
          <button style={{...this.state.colorsArray[this.state.randomNum], ...this.state.cellsArray[8], ...noBorder}} 
            onClick={event => this.selectButton(event, this.state.randomNum)}
            className='circle-style'></button>
*/}