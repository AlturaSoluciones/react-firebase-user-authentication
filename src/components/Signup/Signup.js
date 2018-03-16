import React from 'react';
import SignupForm from './SignupForm';

import {
  withRouter
} from 'react-router-dom';

const SignupPage = ({history}) =>
  <div>
    <h1>Signup</h1>
    <SignupForm history={history} />
  </div>;

export default withRouter(SignupPage);