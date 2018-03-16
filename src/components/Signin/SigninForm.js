import React, { Component } from 'react';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';

const initialState = {
  email: '',
  password: '',
  errorMessage: ''
}
class SigninForm extends Component {
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

    auth.doSignInWithEmailAndPassword(email, password)
      .then((authUser) => {
        this.setState(() => ({ ...initialState }));
        history.push(routes.PROFILE);
      })
      .catch(error => {
        this.setState({errorMessage: error.message});
      })
    event.preventDefault();
  }

  handleInputFieldChange(event) {
    const name = event.target.name;
    this.setState({[name]: event.target.value});
  }

  render() {
    const isInvalid =
      this.state.password === '' ||
      this.state.email === '';

    return (
      <form onSubmit={this.onSubmit}>
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
        <button disabled={isInvalid} type="submit">
          Sign in
        </button>
        <p>{this.state.errorMessage}</p>
      </form>
    )
  }
}

export default SigninForm;