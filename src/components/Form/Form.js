import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value})
  }

  render() {
    return (
      <form>
        <label>Email</label>
        <input
          type='email'
          name='email'
          value={this.state.email}
          onChange={event => this.handleChange(event)}
          required
          />
        <label>Password</label>
        <input
          type='password'
          name='password'
          value={this.state.password}
          onChange={event => this.handleChange(event)}
          required
        />
        <button>Login</button>
      </form>
    )
  }
}

export default Form
