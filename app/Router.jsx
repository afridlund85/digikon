import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './App/AppContainer'

const AppRouter = () => (
  <Router>
      <Route render={({location}) => (
        <App>
          asdasd
        </App>
      )}/>
  </Router>
)

export default AppRouter
