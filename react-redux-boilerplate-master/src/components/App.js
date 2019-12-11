import React from 'react';
import { hot } from 'react-hot-loader/root';
import Home from './Home';

import Nav from './Nav';
import Routes from '../routes';

const App = () => (
  <div>
    <Nav />
    {/* <Routes /> */}
    <Home />
  </div>
);

export default hot(App);