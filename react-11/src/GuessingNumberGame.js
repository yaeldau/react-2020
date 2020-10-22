import React, {useState} from 'react';
import _ from 'lodash';

export default class GuessingNumberGame extends React.Component {
  constructor(props) {
      super(props);
        this.state = {
            ans: 0,
            guess: 0
        }
  }

  componentDidMount() {
    const random = this.getRandomNumber();
    this.setState({ans : random})
    }

  getRandomNumber() {
    const min = 1;
    const max = 1000;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  checkGuess(e) {
    let currentGuess = Number(e.target.value);
    this.setState({guess: currentGuess});
  }

  showMsg(guess, ans) {
      if (guess) {
      const showCorrentAns = Math.random() > 0.2;
      if (showCorrentAns) {
          if (guess === ans) {
              return <p>Correct !</p>
          }
        return guess < ans ? <p>Your guess is too low</p> : <p>Your guess is too high</p>
      }
      else {
        return guess < ans ? <p>Your guess is too high</p> : <p>Your guess is too low</p>
      }
    }
  }


  render() {

    const {ans, guess} = this.state;

    return (
        <div>
            <text>Enter your guess: </text>
            <input onChange={(e) => this.checkGuess(e)}/>
            {this.showMsg(guess, ans)}
      </div>
    );
  }
}