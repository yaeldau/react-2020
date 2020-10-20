import React, {useState} from 'react';

export default class TimeUnits extends React.Component {
  constructor(props) {
      super(props);
        this.state = {
            timeInSec: 0
        }
  }

  setTime(e) {
    return 1;
  }


  render() {

    const {timeInSec} = this.setState;

    return (
        <div>
            <div>
                <p>Seconds: </p>
                <input onChange={(e) => this.setTime(e)} value={timeInSec}/>
            </div>
            <div>
                <p>Minutes: </p>
                <input onChange={(e) => this.setTime(e)} value={timeInSec / 60}/>
            </div>
            <div>
                <p>Hours: </p>
                <input onChange={(e) => this.setTime(e)} value={timeInSec / 60 / 60}/>
            </div>
      </div>
    );
  }
}