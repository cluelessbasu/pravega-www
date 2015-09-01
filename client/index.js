import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';

import Menubar from './components/Menubar.js';
import Sidebar from './components/Sidebar.js';
import Footer from './components/Footer.js';

import './styles/main.css';

class App {
  static propTypes = {
    children: PropTypes.element
  }

  render() {
    return (
      <div className="container">
        <Menubar />
        <div className="content">
          <Sidebar />
          <div>
            {this.props.children}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const AppRouter = (
  <Router history={createHistory()}>
    <Route path="/" component={App} />
  </Router>
);

ReactDOM.render(AppRouter, document.getElementById('app'));

export default App;
