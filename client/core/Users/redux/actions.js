import {sendingRequest, receivedResponse} from '../../../../redux/http/redux'
import {createAction} from '../../../../redux/utils/redux-utils'
import ajax from '../../../../redux/http/index'


// export const FETCH_SOMETHING = 'FETCH_SOMETHING'
// export const fetchSomethingSuccess = createAction(FETCH_SOMETHING, 'id', 'questionnaire')
// export const fetchSomethingId = () => `fetchSomethingId`
// export const fetchSomething = () => {
//   const id = fetchSomethingId()
//   return dispatch => {
//     dispatch(sendingRequest(id))
//     ajax.get('/something/something')
//       .then(res => {
//         dispatch(receivedResponse(id))
//         return dispatch(fetchSomethingSuccess(id, res.data))
//       })
//       .catch(errors => dispatch(receivedResponse(id, {errors})))
//   }
// }

export const FETCH_USER = 'FETCH_USER'
export const getUserSuccess = createAction(FETCH_USER, 'id', 'users')
export const getUserId = () => `getUserId`
export const getUser = () => {
  const id = getUserId()
    console.log('<----getting called')
  return dispatch => {
    dispatch(sendingRequest(id))
    ajax.get('/api/users')
      .then(res => {
          console.log(res, '<---- response check')
        dispatch(receivedResponse(id))
        return dispatch(getUserSuccess(id, res.data))
      })
      .catch(errors => dispatch(receivedResponse(id, {errors})))
  }
}
