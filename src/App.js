import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import LandingPage from './components/Landing/Landing';
import SignupPage from './components/Signup/Signup';
import SigninPage from './components/Signin/Signin';
import ProfilePage from './components/Profile/Profile';

import * as routes from './constants/routes';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation/>
          <hr/>
          <Route
            exact path={routes.LANDING}
            component={() => <LandingPage />}
          />
          <Route
            exact path={routes.SIGN_UP}
            component={() => <SignupPage />}
          />
          <Route
            exact path={routes.SIGN_IN}
            component={() => <SigninPage />}
          />
          <Route
            exact path={routes.PROFILE}
            component={() => <ProfilePage />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
