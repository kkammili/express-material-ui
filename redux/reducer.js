/**
 * ALL reducers should go here.
 * The combined reducer is then fed into the store.
 */
import {combineReducers} from 'redux-immutable'
import {LOCATION_CHANGE} from 'react-router-redux'
import http from './http/redux'
import Users from '../client/core/Users/redux/reducer'
// import {FormsReducer} from '../utils/form_utils'
import {fromJS, Map} from 'immutable'

// import AppReducer from '../../src/app/redux/reducer'

const initialState = fromJS({
  locationBeforeTransitions: null
})

function Routes (state = initialState, {type, payload} = {}) {
  if (type === LOCATION_CHANGE) {
    return state.merge({locationBeforeTransitions: fromJS(payload)})
  }

  return state
}

const appReducer = combineReducers({
  Routes,
  [http.key]: http,
  [Users.key]: Users
  // Forms: FormsReducer,
  // [AppReducer.key]: AppReducer,
})

const rootReducer = (state = initialState, action = {}) => {
  // logout functionality here
  if (action.type === 'LOGOUT') {
    return Map()
  }
  return appReducer(state, action)
}

export default rootReducer
