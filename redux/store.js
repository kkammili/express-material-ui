import {Map} from 'immutable'
import {applyMiddleware, createStore, compose} from 'redux'
import thunk from 'redux-thunk'
import {routerMiddleware} from 'react-router-redux'
import {createMemoryHistory} from 'history'
import reducer from './reducer'
import logger from 'redux-logger'
import config from '../config/config'

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
      config.window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store
