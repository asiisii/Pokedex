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

  setPassword(e) {
    e.preventDefault()
    this.setState({password: e.target.value})
  }

  handleSignup(e) {
    e.preventDefault()
    auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
       .catch(err => this.setState({error: err}))

       this.props.changeUser()
  }

  // handleLogin(e) {
  //   e.preventDefault()
  //   auth.signInWithEmailAndPassword(this.state.email, this.state.password)
  //   .catch(err => this.setState({error: err}))
  //   this.props.changeUser()
  //   console.log('im logged in');
    
  // }

  handleLogout(e) {
    e.preventDefault()
    auth.signOut()
  }

  
}

export default LoginConfig