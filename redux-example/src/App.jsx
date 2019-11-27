import React, { Component } from "react";
import { connect } from "react-redux";
import { getMessage } from "./actions/actions";

class App extends Component {
  render() {
    this.props.getMessage("hi");
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

// function mapDispatchToProps(dispatch) {
//   return {
//     getMessage: () => dispatch(getMessage())
//   };
// }

export default connect(mapStateToProps, { getMessage })(App);
