import React from 'react';
import { withRouter } from 'react-router-dom';

import SigninForm from '../Signin/SigninForm';
import SignupLink from '../Signup/SignupLink';

const SigninPage = ({history}) =>
  <div>
    <h1>Signin Page</h1>
    <SigninForm history={history} />
    <SignupLink/>
  </div>

export default withRouter(SigninPage);