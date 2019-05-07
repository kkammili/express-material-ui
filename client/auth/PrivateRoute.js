import React, {Component} from 'react'
import {Route, Redirect} from 'react-router'
import Home from '../core/Users/Home'
import auth from './auth-helper'

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route props={rest} render={props => {
    if (auth.isAuthenticated()) {
      return <Component {...props} />
    } else {
      return <Redirect to={{
        pathname: '/signin',
        state: {from: props.location}
      }} />
    }
  }
  } />
)

export default PrivateRoute
