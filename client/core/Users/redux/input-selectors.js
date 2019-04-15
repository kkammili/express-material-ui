import {List} from 'immutable'

export const usersList = (state) =>{
    return state.getIn(['User', 'usersList'], List())
}