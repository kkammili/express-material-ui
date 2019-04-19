import React from 'react'
import { Route, Redirect } from 'react-router'
import Home from '../core/Users/Home'
import auth from './auth-helper'

const PrivateRoute = (rest) => (
  <Route props={rest} render={props => (
    auth.isAuthenticated() ? (
      <Home {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/signin',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

export default PrivateRoute
