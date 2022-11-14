//import logo from './logo.svg';
import './App.css';
import React from 'react';

//Colors
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

//Cells
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

let guessValues = []; //Values of selected buttons

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      gameStarted: false,
      colorsArray: [],
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
    guessValues = []; //Set guessValues to empty array
    this.setState({ //set values to default state
      gameStarted: false,
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
      gameStarted: true, //allow buttons to be clicked
      colorsArray: colorsArrayDefault.sort(() => Math.random() - 0.5), //set to array of randomly sorted values in colorsArrayDefault
      randomNum: Math.floor(Math.random() * (8)), //set to random number from 0-7
      render: true //turn buttons from black to colored
    })

    setTimeout(function(){ //turn buttons from colored to black after .5 second
      this.setState({
        render: false
      })
      }.bind(this), 500)
  }

  selectButton (event, value, button, addDelete){ //called when black buttons are clicked
    if (addDelete === 'add'){ //if addDelete is 'add' push number value to guessValues
      guessValues.push(value)
    } else { //if addDelete is 'delete' remove number value from guessValues
      guessValues.splice(guessValues.indexOf(value), 1) 
    }

    if(this.state.gameStarted === false){ //if game is not started, nothing happens when button is clicked
      return
    }else{ //if game is started allow buttons to turn grey when clicked by switching from false to true
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
        break;
      default:
        return
      }
    }
  }

  submit(){
    this.setState({ //turn buttons from black to colored
      render: true
    })

    //if guessValues has two elements that are equal to each other, return winning text
    if(guessValues.length === 2 && guessValues[0] === guessValues[1]){
      this.setState({
        result: 'Correct! You Win.'
      })
    }else{ //else, return losing text
      this.setState({
        result: 'Wrong! You Lose.'
      })
    }
  }

  render(){ //
    const unselected = {backgroundColor: 'black'};
    const selected = {backgroundColor: '#505050'};
    let display = null
    if(this.state.render) { //if render is true set display to buttons with randomized colors and fixed grid positions
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
    }else{ //if render is false set display to black buttons that turn grey when clicked
      display =
        <div className='grid'>
          <div> 
              {this.state.selectedZero === true ? <button style={{...selected, ...cellsArrayDefault[0], ...noBorder}}
              onClick={event => this.selectButton(event, 0, 'button0', 'delete')}
              className='circle-style'></button> //when selectedZero is true, display grey button, delete number value from guessValues when clicked
                : <button style={{...unselected, ...cellsArrayDefault[0], ...noBorder}}
                onClick={event => this.selectButton(event, 0, 'button0', 'add')} //when selectedZero is false, display black button, add number value to guessValues when clicked
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
      <div className='container'>
        <div className='titleHeader'>
          <h1>Memory Game</h1>
          <h2>You have half a second to view the colors. Then, select the two circles that match.</h2>
        </div>

        <div className='game'>
          {display //return buttons grid
          }
          <div className='control-btn-pair'>
            <button className='control-btn' onClick={this.gameRound}>New Round</button>
            <button className='control-btn' onClick={this.submit}>Submit</button>
          </div>

          <p className='result'>{this.state.result //return win/lose text
            }</p>
        </div>

      </div> 
    )
  }
}

export default App;