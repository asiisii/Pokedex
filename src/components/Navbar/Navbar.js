import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import './Navbar.css'

export default function Navbar() {
  const { signOut } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    try{
      await signOut()
      history.push('/login')
    }catch (e) {
      console.log(e.message);
    }
  }

  return (
    <header>
      <h1>Pokédex</h1>
      <div>
        <NavLink activeStyle={{
          color: 'white',
          fontWeight: 'bold'
        }} to='/' exact={true}><h1>Home</h1></NavLink>
        <NavLink activeStyle={{
          color: 'white',
          fontWeight: 'bold'
        }} to='/caught'><h1>Show Caught</h1></NavLink>
        <button onClick={handleLogout}>Log out</button>
      </div>
    </header>
  )
}
