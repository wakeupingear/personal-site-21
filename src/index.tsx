import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import reportWebVitals from './reportWebVitals';

import './index.css';
import App from './App';
import Chadmin from './components/Chadmin';
import Files from './components/Files';
import OutsetPage from './components/OutsetPage';

ReactDOM.render(
  <React.StrictMode>
    <Router >
      <Switch>
        <Route path="/chadmin" component={Chadmin} />
        <Route path="/files" component={Files} />
        <Route path="/outset" component={OutsetPage} />
        <Route component={App} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();