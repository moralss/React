import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Single from './components/Single'
import PhotoGrid from './components/PhotoGrid'

import registerServiceWorker from './registerServiceWorker';


import { BrowserRouter, Link, Route } from 'react-router-dom';



ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path="/" component={App} />
            <Route path="/single" component={Single} />
            <Route path="/PhotoGrid" component={PhotoGrid} />
        </div>
    </BrowserRouter>

    , document.getElementById('root'));
registerServiceWorker();
