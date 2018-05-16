import React, { Component } from 'react';
import './App.css';
import Navbar from './component/Navbar'
import ChangeName from './component/ChangeName'


class App extends Component {
  constructor() {
    super();
    this.state = { text: 'Hello World!' }
  }

  handleChange(e) {
    var value = e.target.value;
    this.setState({ text: value })
  }

  render() {
    return (
      <div>
        <input onChange={this.handleChange.bind(this)} />
        <h1>{this.state.text}</h1>
        <ChangeName/>
      </div>
    )
  }


}

export default App;
