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

  changeAuthState() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({user: user})
      } else {
        this.setState({user: ''})
      }
    })
  }

  componentDidMount() {
    this.changeAuthState()
  }

  render() {
    console.log(this.props.isUser);
    return (
      <section>
        <form>
          <label>Username</label>
          <input 
            type='email' 
            required 
            value={this.state.email} 
            onChange={e => this.setEmail(e)}
          />
          <label>Password</label>
          <input 
            type='password' 
            required 
            value={this.state.password} 
            onChange={e => this.setPassword(e)}
          />
          <div>
            {/* {this.props.isUser ? (
              <>
              <button onClick={ (e) => this.handleLogin(e)}>Login</button>
              <p>Don't have an account?</p>
             <Link to="/signup">Sign up here</Link>
              </>
            ) : (  */}
              <> 
              <button onClick={ (e) => this.handleSignup(e)}>Sign Up</button>
              <p>Already have an account?</p><Link to="/login">Login here</Link>
              </>
            {/* )}  */}
          </div>
        </form>
      </section>
    )
  }
}

export default LoginConfig