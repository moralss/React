import React, { Component } from "react";
import { connect } from "react-redux";
import Counter from "./containers/Counter";
import { saveMessage } from "./actions/actions";

class App extends Component {
  render() {
    this.props.saveMessage("hi");
    return (
      <div>
        <h1> thunk example </h1>
        {/* <Counter /> */}
      </div>
    );
  }
}

App.propTypes = {};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    saveMessage: payload => dispatch(saveMessage(payload))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
