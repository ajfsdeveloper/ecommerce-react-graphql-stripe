import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import App from './components/App'
import Navbar from './components/Navbar'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Checkout from './components/Checkout'

const Root = () => (
  <Router>
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route component={App} exact path="/" />
        <Route component={Signin} path="/signin" />
        <Route component={Signup} path="/signup" />
        <Route component={Checkout} path="/checkout" />
      </Switch>
    </React.Fragment>
  </Router>
)

export default Root
