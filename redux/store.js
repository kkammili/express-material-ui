import {Map} from 'immutable'
import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import {routerMiddleware} from 'react-router-redux'
import {createMemoryHistory} from 'history'
import reducer from './reducer'
import logger from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension'

export const history = createMemoryHistory()
const middlewares = [
  thunk,
  routerMiddleware(history),
  logger
]

const store = createStore(
  reducer,
  Map(),
  composeWithDevTools(
    applyMiddleware(...middlewares)
  )
)

export default store
