import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

export class DeleteUser extends Component {
  static propTypes = {
    loginId: PropTypes.string
  }

  render () {
    return (
      <div>Delete the user</div>
    )
  }
}

export default connect()(DeleteUser)