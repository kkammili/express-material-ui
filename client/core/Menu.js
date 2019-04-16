import React from 'react'
import auth from './../auth/auth-helper'
import {Link, withRouter} from 'react-router-dom'

const isActive = (history, path) => {
  if (history.location.pathname == path)
    return {color: '#ff4081'}
  else
    return {color: '#ffffff'}
}
const Menu = withRouter(({history}) => (
  <div className={'bg-dark'}>
      <Link to="/">
          MERN Skeleton
      </Link>
      <Link to="/users">Users</Link>
            <span>
          <Link to="/signup">Sign up</Link>
          <Link to="/signin">Sign In</Link>
        </span>
      {/*{*/}
        {/*auth.isAuthenticated() && (<span>*/}
          {/*<Link to={"/user/" + auth.isAuthenticated().user._id}>*/}
            {/*My Profile*/}
          {/*</Link>*/}
          {/*<button onClick={() => {*/}
              {/*auth.signout(() => history.push('/'))*/}
            {/*}}>Sign out</button>*/}
        {/*</span>)*/}
      {/*}*/}
  </div>
))

export default Menu
