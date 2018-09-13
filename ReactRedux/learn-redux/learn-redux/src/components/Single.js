import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Single extends Component {
  render() {
    return (
      <div>
        <h1> <Link to="/home"> Single </Link> </h1>
      </div>
    )
  }
}

export default Single;
