import React from 'react'
import { NavLink } from 'react-router-dom'

import './nav.scss'

const Nav = () => (
  <ul id="nav">
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/about">About</NavLink></li>
  </ul>
)

export default Nav
