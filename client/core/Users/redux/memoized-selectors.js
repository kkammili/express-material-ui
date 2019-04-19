import {createStructuredSelector} from 'reselect'
import {usersList, userProfile} from './input-selectors'

export const allUserList = createStructuredSelector({
        usersList,
    }
)

export const userDetails = createStructuredSelector({
    user:userProfile
})