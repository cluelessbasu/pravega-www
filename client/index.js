import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';

import Menubar from './components/menubar.js';

import './styles/main.css';

class App {
  render() {
    return (
      <div>
        <Menubar />
      </div>
    );
  }
}

const AppRouter = (
  <Router>
    <Route path="/" component={App} />
  </Router>
);

ReactDOM.render(AppRouter, document.getElementById('app'));

export default App;
