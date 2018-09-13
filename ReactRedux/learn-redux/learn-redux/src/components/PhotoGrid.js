import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class PhotoGrid extends Component {
  render() {
    return (
      <div>
         <h1> <Link to="/home"> photo </Link> </h1>
      </div>
    );
  }
}

export default PhotoGrid;
