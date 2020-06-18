import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: ''

    }
  }
  handleChange(val) {

    let userInput = this.state;

    this.setState({ userInput: val })

  }

  render() {
    return (
      <div className="app">
        <input onChange={(e) => this.handleChange(e.target.value)} />
        <span>{JSON.stringify(this.state.userInput, null, 10)}</span>
      </div>

    );

  }
}
export default App;
