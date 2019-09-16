import React, {
  Component
} from "react";
import {
  connect
} from "react-redux";
import {
  addToCounter,
  subtractCounter
} from "../actions/actions";
import CounterDisplay from './CounterDisplay'


class Counter extends Component {

  add() {
    this.props.add()
  }

  subtractCounter() {
    this.props.subtractCounter()
  }

  render() {
    return ( <
      div style = {
        {
          backgroundColor: "blue"
        }
      } >
      <
      h1 > Counter < /h1> <
      button onClick = {
        () => this.add()
      } > plus < /button> <
      button onClick = {
        () => this.subtractCounter()
      } > subtract < /button> <
      CounterDisplay / >
      <
      /div>
    );
  }
}

Counter.propTypes = {};

function mapStateToProps(state) {
  return {
    counter: state.counterReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    add: () => dispatch(addToCounter()),
    subtractCounter: () => dispatch(subtractCounter()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);