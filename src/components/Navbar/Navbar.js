import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <header>
      <NavLink activeStyle={{
        color: 'white',
        fontWeight: 'bold'
      }} to='/' exact={true}><h1>Home</h1></NavLink>
      <h1>Pokédex</h1>
      <NavLink activeStyle={{
        color: 'white',
        fontWeight: 'bold'
      }} to='/caught'><h1>Show Caught</h1></NavLink>
    </header>
  )
}
