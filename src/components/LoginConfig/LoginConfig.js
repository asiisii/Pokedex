import React from 'react'
import { auth } from '../../firebase'
import Login from '../Login/Login'
import { Link } from 'react-router-dom'
class LoginConfig extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      email: '',
      password: '',
      error: '',
    //  isUser: false
    }
  }

  setEmail(e) {
    e.preventDefault()
    this.setState({email: e.target.value})
  }


}

export default LoginConfig