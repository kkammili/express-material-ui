import {Map, fromJS} from "immutable";
import * as actions from './actions'


function SignIn(state = Map(), {type, ...action}){
    switch(type){
        case actions.SIGN_IN:
            return state.set('signInDetails', fromJS(action.signIn.data))
        default:
            return state
    }
}

SignIn.key = 'SignIn'

export default SignIn