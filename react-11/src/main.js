import React from 'react';
import ReactDOM from 'react-dom';


import '../css/main.css';
import ColorPallet from './ColorPallet';
import GuessingNumberGame from './GuessingNumberGame';
import InputColor from './InputColor';
import MultiInput from './MultiInput';
import TimeUnits from './TimeUnits';

const App = () => {

  return (
    <div>
      {/* <MultiInput/> */}
      {/* <TimeUnits/> */}
      {/* <GuessingNumberGame /> */}
      {/* <InputColor initColor={'black'}/> */}
      <ColorPallet  initColor={'red'}/>
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
