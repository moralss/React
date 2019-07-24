import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class CounterDisplay extends Component {
  render() {

    return (
      <div style={{ backgroundColor: "grey" }}>
        <h1> Counter result</h1>
        <h1> {this.props.counter}</h1>
      </div>
    );
  }
}

CounterDisplay.propTypes = {};

function mapStateToProps(state) {
  return { counter: state.counterReducer.counter };
}

export default connect(
  mapStateToProps,
  null
)(CounterDisplay);
