import React, { Component } from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom'

import Single from './components/Single'
import PhotoGrid from './components/PhotoGrid'

class App extends Component {
  render() {
    return (
      <div>
        <h1> Home </h1>
        <BrowserRouter>
          <div>
            <Route path="/" component={App}/>
            <Route path="/single" component={Single} />
            <Route path="/PhotoGrid" component={PhotoGrid} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
