import React from 'react'

import Header from './Header'
import Nav from './Nav'
import './app.scss'

const App = ({children}) => (
  <div id="app">
    <Header/>
    <Nav/>
    {children}
  </div>
)

export default App
