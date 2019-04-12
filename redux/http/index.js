import axios from 'axios'
import config from '../../config/config'
// import {addErrorInterceptor} from 'c2-error'
// import {Map} from 'immutable'

// import browserStorage from '../../client/assets/browserStorage'

const ajax = axios.create({baseURL: config.apiBaseURL})

ajax.interceptors.request.use(client => {
  let headers = {
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
  let proxy = {
    host: '127.0.0.1',
    port: 3000
  }

  // const fullToken = Map(browserStorage.get('auth-token') || {})
  // if (fullToken.size > 0) {
  //   headers.Authorization = fullToken.get('token', '')
  // }
  client.headers = headers
  client.proxy = proxy
  return client
})

// addErrorInterceptor(ajax)

export default ajax

export const rawClient = axios.create({baseURL: config.apiBaseURL})
