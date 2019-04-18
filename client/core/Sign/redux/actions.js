import {createAction} from "../../../../redux/utils/redux-utils";
import {receivedResponse, sendingRequest} from "../../../../redux/http/redux";
import axios from 'axios'

export const SIGN_IN = 'SIGN_IN' //post
export const signInSuccess = createAction(SIGN_IN, 'id', 'signIn')
export const signInId = () => `signInId`
export const signIn = (userDetails) => {

    const id = signInId()
    return dispatch => {
        dispatch(sendingRequest(id))
        return axios.post('/auth/signin', userDetails)
            .then(data =>{
                dispatch(receivedResponse(id))
                return dispatch(signInSuccess(id, data))
            })
            .catch(errors => {
                return dispatch(receivedResponse(id, errors.response))
            })
    }
}

export const SIGN_OUT = 'SIGN_OUT' //post
export const signOutSuccess = createAction(SIGN_OUT, 'id', 'signOut')
export const signOutId = () => `signOutId`
export const signOut = () => {
    const id = signOutId()
    return dispatch => {
        dispatch(sendingRequest(id))
        fetch('/auth/signout/')
            .then(res => res.json())
            .then(data =>{
                dispatch(receivedResponse(id))
                return dispatch(signOutSuccess(id, data))
            })
            .catch(errors => dispatch(receivedResponse(id, {errors})))
    }
}