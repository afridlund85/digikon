import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

import App from './App/AppContainer'
import Home from './Home/Home'
import About from './About/About'

const AppRouter = () => (
  <Router>
      <Route render={({location}) => (
        <App>
          <CSSTransitionGroup
          transitionName="content"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          <Route location={location} key={location.key} render={() => (
            <div className="content">
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
            </div>
          )}/>
        </CSSTransitionGroup>
        </App>
      )}/>
  </Router>
)

export default AppRouter
