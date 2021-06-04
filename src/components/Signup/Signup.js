import React, { useRef, useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { Link, useHistory } from 'react-router-dom'

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
    <>
      <div>
      <h2>Sign up</h2>
      {error && <h2>{error}</h2> }
      </div>
      <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type='email'
            ref={emailRef}
            required
            />
          <label>Password</label>
          <input
            type='password'
            ref={passwordRef}
            required
          />
          <label>Confirm Password</label>
          <input
            type='password'
            ref={passwordConfirmationRef}
            required
          />
          <button disabled={loading} className='submit-button' type='submit'>Sign Up</button>
        </form>
        <div>
          <p>Already have an account? <Link to='/login'>Login in</Link></p>
        </div>
      </>
  )
}
