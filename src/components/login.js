import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      password:'',
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    var username = this.state.username;
    var password = this.state.password;
    console.log("attemping sign in with:" + username + password)
    this.props.onSignIn(username, password);
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value,
    });
  }
  handlePasswordChange(event) {
    this.setState({
      password: event.target.value,
    });
  }

  render() {
    return(
      <Container className='Login'>
        <form onSubmit={this.handleSubmit}>
          <input type='text' onChange={this.handleUsernameChange} placeholder='Username'/>
          <input type='password' onChange={this.handlePasswordChange} placeholder='Password'/>
          <input type='submit' value='Login' />
        </form>


      </Container>
    )
  }
}
