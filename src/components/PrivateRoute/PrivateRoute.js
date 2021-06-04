import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import Home from '../Home/Home'

export default function PrivateRoute({component: Component, ...rest}) {
  const { currentUser } = useAuth()
  return (
    <Route
      render={() => {
        const id = rest.computedMatch.params.id
        return currentUser ? <Component id={id} { ...rest} /> : <Redirect to='/login' />
      }}>
    </Route>
  )
}
