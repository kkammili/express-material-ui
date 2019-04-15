import {Map} from 'immutable'
import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import {routerMiddleware} from 'react-router-redux'
import {createMemoryHistory} from 'history'
import reducer from './reducer'
import {createLogger} from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension'
import Immutable from 'immutable'
export const history = createMemoryHistory()



const logger = createLogger({
    stateTransformer: (state) => {
        if(Immutable.isImmutable(state)) return state.toJS()
        else return state;
    } ,
    collapsed:true
});

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
