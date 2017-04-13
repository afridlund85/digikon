import React, { Component } from 'react'
import App from './App'

class AppContainer extends Component{
  constructor(props) {
    super(props)
  }
  render() {
    const { children } = this.props
    return <App>{children}</App>
  }
}

export default AppContainer
