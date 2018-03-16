import React from "react";
import { Link } from "react-router-dom";

import * as routes from "../../constants/routes";

const Navigation = () =>
  <div>
    <ul>
      <li><Link to={routes.LANDING}>Landing</Link></li>
      <li><Link to={routes.PROFILE}>User Profile</Link></li>
      <li><Link to={routes.SIGN_IN}>Signin</Link></li>
      <li><Link to={routes.SIGN_UP}>Signup</Link></li>
    </ul>
  </div>

export default Navigation;