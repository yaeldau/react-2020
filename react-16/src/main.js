import React from 'react';
import ReactDOM from 'react-dom';

import '../css/main.css';
import CatchTheRedGame from "./CatchTheRedGame";
import FilterList from "./FilterList";

const App = () => {

  return (
      <div>
        {/*<CatchTheRedGame/>*/}
        <FilterList/>
      </div>
  )
};

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App/>, root);
