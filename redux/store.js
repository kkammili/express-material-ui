import {Map} from 'immutable'
import {applyMiddleware, createStore, compose} from 'redux'
import thunk from 'redux-thunk'
import {routerMiddleware} from 'react-router-redux'
import {createMemoryHistory} from 'history'
import reducer from './reducer'
import logger from 'redux-logger'
// import DevTools from '../DevTools/DevTools'
// import {persistState} from 'redux-devtools'

export const history = createMemoryHistory()
const middlewares = [
  thunk,
  routerMiddleware(history)
]

if (global.LOGGER) {
  middlewares.push(logger)
}

const store = createStore(
  reducer,
  Map(),
  compose(
    applyMiddleware(...middlewares),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      // DevTools.instrument(),
      // persistState()
  )
)

export default store
