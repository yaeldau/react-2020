import React from 'react';
import ReactDOM from 'react-dom';

import '../css/main.css';
import CatchTheRedGame from "./CatchTheRedGame";

const App = () => {

  return (
      <div>
        <CatchTheRedGame/>
      </div>
  )
};

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App/>, root);
