import {Map} from 'immutable'
import {applyMiddleware, createStore, compose} from 'redux'
import thunk from 'redux-thunk'
import {routerMiddleware} from 'react-router-redux'
// import createHistory from 'history.createBrowserHistory'
const createHistory = require('history').createBrowserHistory
import reducer from './reducer'
import logger from 'redux-logger'
import DevTools from '../DevTools/DevTools'

export const history = createHistory()
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
    DevTools.instrument()
    // window && window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

export default store
