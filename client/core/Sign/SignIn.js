import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withStyles} from 'material-ui/styles'
import {compose} from 'redux'
import {signIn} from './SignIn'
import {auth} from '../../auth/auth-helper'

const styles = theme => ({
    card: {
        maxWidth: 600,
        margin: 'auto',
        textAlign: 'center',
        marginTop: theme.spacing.unit * 5,
        padding: theme.spacing.unit * 2
    },
    title: {
        marginTop: theme.spacing.unit * 2,
        color: theme.palette.openTitle
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 300
    }
})

export class SignIn extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            error: '',
            redirectToReferrer: false
        }
    }
  static propTypes = {
    loginId: PropTypes.string
  }

clickSubmit = () => {
        const user = {
            email: this.state.email || undefined,
            password: this.state.password || undefined
        }
        this.props.signIn(user).then((data) => {
            if (data.error) {
                this.setState({error: data.error})
            } else {
                console.log("<---- redirect check")
                auth.authenticate(data, () => {
                    this.setState({redirectToReferrer: true})
                })
            }
        })
    }

    render () {
        console.log(this.props.location, '<--- location check')
    return (
      <Fragment>

      </Fragment>
    )
  }
}

export default compose(
    withStyles(styles, {name:'SignIn'}),
    connect(null, {signIn})
)(SignIn)