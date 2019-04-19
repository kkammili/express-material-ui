import {createStructuredSelector} from 'reselect'
import {user} from './selectors'

export const userDetails=createStructuredSelector({
    user
})