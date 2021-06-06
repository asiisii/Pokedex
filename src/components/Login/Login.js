import React, { useRef, useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import './Login.css'

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState('')
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()
    try{
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push('/')
    }catch{
      setError('Email or password is incorrect')
    }
    setLoading(false)
  }

  return (
    <div className='login'>
      <div className='login-head'>
      <h2>Continue Adventure</h2>
      {error && <h2>{error}</h2> }
      </div>
      <form onSubmit={handleSubmit}>
        <div className='txt-feild'>
          <label>Email
            <input
              type='email'
              ref={emailRef}
              required
              />
          </label>
        </div>
        <div className='txt-feild'>
          <label>Password
            <input
              type='password'
              ref={passwordRef}
              required
              />
          </label>
        </div>
          <button disabled={loading} className='submit-button' type='submit'>Login</button>
        </form>
        <div>
          <p className='switch'>Become a Trainer? <Link to='/signup'>Sign Up</Link></p>
        </div>
      </div>
  )
}
