import {createStructuredSelector} from 'reselect'
import {usersList} from './input-selectors'

export const allUserList = createStructuredSelector({
        usersList,
    }
)