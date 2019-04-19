import {Map} from 'immutable'

export const user=(state)=>{
    return state.getIn(['SignIn', 'userDetails'], Map())
}