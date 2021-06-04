import React, { useRef, useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { Link, useHistory } from 'react-router-dom'

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
      setError('Failed to sign in')
    }
    setLoading(false)
  }

  return (
    <>
      <div>
      <h2>Continue Adventure</h2>
      {error && <h2>{error}</h2> }
      </div>
      <form onSubmit={handleSubmit}>
          <label>Email
            <input
              type='email'
              ref={emailRef}
              required
              />
          </label>
          <label>Password
            <input
              type='password'
              ref={passwordRef}
              required
            />
          </label>
          <button disabled={loading} className='submit-button' type='submit'>Login</button>
        </form>
        <div>
          <p>Need an account? <Link to='/signup'>Sign Up</Link></p>
        </div>
      </>
  )
}
