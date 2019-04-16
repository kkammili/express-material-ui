import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
// import DevTools from '../DevTools/DevTools'
import store from '../redux/store'
import Home from './core/Users/Home'
import Users from './core/Users/Users'
import Signup from './core/Sign/SignUp'
import Signin from './core/Sign/SignIn'
// import EditProfile from './user/EditProfile'
// import Profile from './user/Profile'
// import PrivateRoute from './auth/PrivateRoute'
import Menu from './core/Menu'

class MainRouter extends Component {
  render () {
    return (
      <div>
        <Provider store={store}>
          <Menu />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/users' component={Users} />
            <Route exact path='/signup' component={Signup} />
             <Route exact path="/signin" component={Signin}/>
            {/* <PrivateRoute path="/user/edit/:userId" component={EditProfile}/> */}
            {/* <Route path="/user/:userId" component={Profile}/> */}
          </Switch>
          {/*<DevTools/>*/}
        </Provider>
      </div>
    )
  }
}

export default MainRouter
