import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { history } from 'react-router/lib/BrowserHistory';

import './styles/main.css';

class App {
  render() {
    return (
      <div>Hello</div>
    );
  }
}

const AppRouter = (
  <Router history={history}>
    <Route path="/" component={App} />
  </Router>
);

ReactDOM.render(AppRouter, document.getElementById('app'));

export default App;
