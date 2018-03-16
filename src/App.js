import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation'

class App extends Component {
  render() {
    return (
      <Router>
        <Navigation/>
      </Router>
    );
  }
}

export default App;
