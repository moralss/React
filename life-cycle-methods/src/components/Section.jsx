import React, { Component } from "react";
import PropTypes from "prop-types";

class Section extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
      console.log("will unmount ");
  }


  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    console.log("willReceiveProps");


  }


    componentWillUpdate(nextProps, nextState) {
        console.log("willUpdate")
    }


  render() {
    console.log(this.props);
    return (
      <div>
      {this.props.name}
        <h1> Section </h1>
      </div>
    );
  }
}

Section.propTypes = {};

export default Section;
