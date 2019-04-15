import {sendingRequest, receivedResponse} from '../../../../redux/http/redux'
import {createAction} from '../../../../redux/utils/redux-utils'
// import jsFetchHelper from '../../../../redux/http/index'

export const FETCH_USER = 'FETCH_USER'
export const getUserSuccess = createAction(FETCH_USER, 'id', 'users')
export const getUserId = () => `getUserId`
export const getUser = () => {
  const id = getUserId()
  return dispatch => {
    dispatch(sendingRequest(id))
    fetch('/api/users')
      .then(res => res.json())
        .then(data =>{
            dispatch(receivedResponse(id))
            return dispatch(getUserSuccess(id, data))
        })
      .catch(errors => dispatch(receivedResponse(id, {errors})))
  }
}
