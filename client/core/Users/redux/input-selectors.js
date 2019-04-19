import {List, Map} from 'immutable'

export const usersList = (state) =>{
    return state.getIn(['User', 'usersList'], List())
}

export const userProfile = (state) =>{
    return state.getIn(['User', 'userProfile'], Map())
}