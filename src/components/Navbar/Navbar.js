import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header>
      <NavLink to='/'>Home</NavLink>
      <h1>Pokédex</h1>
      <NavLink to='/caught'>Show Caught</NavLink>
    </header>
  )
}
