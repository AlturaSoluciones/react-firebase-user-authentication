import React, { Component } from 'react';
import * as routes from '../../constants/routes';

import { auth } from '../../firebase';
const initialState = {
  username: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  errorMessage: ''
};

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };
    this.handleInputFieldChange = this.handleInputFieldChange.bind(this);
  }

  onSubmit = (event) => {
    const {
      email,
      password
    } = this.state;
    const {
      history
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email,password)
      .then(authUser => {
        this.setState(() => ({ ...initialState }));
        history.push(routes.SIGN_IN);
      })
      .catch(error => {
        this.setState({errorMessage: error.message})
      });

    event.preventDefault();
  }

  handleInputFieldChange(event) {
    const name = event.target.name;
    this.setState({[name]: event.target.value});
  }

  render() {
    const isInvalid =
      this.state.password !== this.state.passwordConfirmation ||
      this.state.password === '' ||
      this.email === '' ||
      this.username === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input name="username"
               value={this.state.username}
               onChange={this.handleInputFieldChange}
               type="text"
               placeholder="Full Name"
        />
        <input name="email"
               value={this.state.email}
               onChange={this.handleInputFieldChange}
               type="text"
               placeholder="Email Address"
        />
        <input name="password"
               value={this.state.password}
               onChange={this.handleInputFieldChange}
               type="password"
               placeholder="Password"
        />
        <input name="passwordConfirmation"
               value={this.state.passwordConfirmation}
               onChange={this.handleInputFieldChange}
               type="password"
               placeholder="Confirm Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>

        <p>{this.state.errorMessage}</p>
      </form>
    )
  }
}

export default SignupForm;