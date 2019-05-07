import React, {Component} from 'react'
import {Route, Switch} from 'react-router'
import {Provider} from 'react-redux'
import store from '../redux/store'
import Home from './core/Users/Home'
import Users from './core/Users/Users'
import SignUp from './core/Sign/SignUp'
import SignIn from './core/Sign/SignIn'
import Profile from './core/Users/Profile'
import EditProfile from './core/Users/EditProfile'

import PrivateRoute from './auth/PrivateRoute'
import Menu from './core/Menu'
import {withRouter} from 'react-router'

class MainRouter extends Component {
  render () {
    return (
      <div>
        <Provider store={store}>
          <Menu />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/users' component={Users} />
            <Route exact path='/user/:userId' component={Profile} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/signin' component={SignIn} />
             <PrivateRoute exact path="/user/edit/:userId" component={EditProfile}/>
            {/* <Route path="/user/:userId" component={Profile}/> */}
          </Switch>
          {/* <DevTools/> */}
        </Provider>
      </div>
    )
  }
}

export default withRouter(MainRouter)
