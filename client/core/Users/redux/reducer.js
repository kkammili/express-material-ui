import {Map, fromJS} from 'immutable'
import * as actions from './actions.js'
// import {addEntities} from '../../../../redux/utils/redux-utils'

function Users (state = Map(), {type, ...action}) {
  switch (type) {
    // case actions.FETCH_SOMETHING:
    //   return state.set('somethingSample', Map({'name':'krishna'}))
      case actions.FETCH_USER:
        return state.set('usersList', fromJS(action.users))
    default: return state
  }
}

Users.key = 'User'
export default Users
