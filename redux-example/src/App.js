import React, { Component } from "react";
import { connect } from "react-redux";
import Counter from "./containers/Counter";

class App extends Component {


  render() {
    return (
      <div>
        <Counter />
      </div>
    );
  }
}

App.propTypes = {};

export default App;
