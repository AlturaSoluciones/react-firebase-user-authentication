import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';

const SignupLink = () =>
  <p>
    Don't have and account?
    {' '}
    <Link to={routes.SIGN_UP}>
      Sign up
    </Link>
  </p>;

export default SignupLink;