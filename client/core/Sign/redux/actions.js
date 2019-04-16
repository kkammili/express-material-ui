import jsFetchHelper from "../../../../redux/http";
import {createAction} from "../../../../redux/utils/redux-utils";
import {receivedResponse, sendingRequest} from "../../../../redux/http/redux";

export const SIGN_IN = 'SIGN_IN' //post
export const signInSuccess = createAction(SIGN_IN, 'id', 'signIn')
export const signInId = () => `signInId`
export const signIn = (userDetails) => {
    const id = signInId()
    return dispatch => {
        dispatch(sendingRequest(id))
        fetch('/auth/signin', {
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json',
            },
            credentials:'include',
            body:JSON.stringify(userDetails)
        })
            .then(res => res.json())
            .then(data =>{
                dispatch(receivedResponse(id))
                return dispatch(signInSuccess(id, data))
            })
            .catch(errors => dispatch(receivedResponse(id, {errors})))
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