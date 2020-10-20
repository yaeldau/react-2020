import React, {useState} from 'react';

export default class MultiInput extends React.Component {
  constructor(props) {
      super(props);
        this.state = {
            text: "type something..."
        }
  }

  setText(e) {
    this.setState({text: e.target.value});
  };

  render() {

    const {text} = this.state;

    return (
        <div>
            <input onChange={(e) => this.setText(e)} value={text}/>
            <br/>
            <br/>
            <input onChange={(e) => this.setText(e)} value={text}/>
            <br/>
            <br/>
            <input onChange={(e) => this.setText(e)} value={text}/>
            <br/>
            <br/>
            <input onChange={(e) => this.setText(e)} value={text}/>
            <br/>
            <br/>
            <input onChange={(e) => this.setText(e)} value={text}/>
      </div>
    );
  }
}