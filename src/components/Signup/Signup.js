import React, { useRef, useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import './Signup.css'

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmationRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState('')
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()
    if(passwordRef.current.value !== passwordConfirmationRef.current.value){
      return setError('Passwords do not match')
    }
    try{
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push('/')
    }catch{
      setError('Failed to create an account')
    }
    setLoading(false)
  }

  return (
    <div className='signup'>
      <div className='signup-head'>
        <h2>Start your Adventure</h2>
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
        <div className='txt-feild'>
          <label>Confirm Password
            <input
              type='password'
              ref={passwordConfirmationRef}
              required
              />
          </label>
        </div>
          <button disabled={loading} className='submit-button' type='submit'>Sign Up</button>
        </form>
        <div>
          <p className='login-switch'>Already have an account? <Link to='/login'>Login in</Link></p>
        </div>
      </div>
  )
}
