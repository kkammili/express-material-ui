import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withStyles} from 'material-ui/styles'
import {compose} from 'redux'
import {signIn} from '../Sign/redux/actions'
import auth from '../../auth/auth-helper'
import Card, {CardContent, CardActions} from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import Icon from 'material-ui/Icon'
import {Redirect} from 'react-router'


const styles = theme => ({
    card: {
        maxWidth: 600,
        margin: 'auto',
        textAlign: 'center',
        marginTop: theme.spacing.unit * 5,
        padding: theme.spacing.unit * 2
    },
    error:{
        verticalAlign:'middle'
    },
    title: {
        marginTop: theme.spacing.unit * 2,
        color: theme.palette.openTitle
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 300
    },
    submit:{
        margin:'auto',
        marginBottom:theme.spacing.unit * 2
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
                auth.authenticate(data, () => {
                    this.setState({redirectToReferrer: true})
                })
            }
        })
    }

    handleChange = name => event => {
        this.setState({[name]: event.target.value})
    }

    render () {
        const {classes} = this.props
        const {from} = this.props.location.state || {
            from: {
                pathname: '/'
            }
        }
        const {redirectToReferrer} = this.state
        if (redirectToReferrer) {
            return (<Redirect to={from}/>)
        }
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography type="headline" component="h2" className={classes.title}>
                    Sign In
                </Typography>
                <TextField
                    id="email"
                    type="email"
                    label="Email"
                    className={classes.textField}
                    value={this.state.email}
                    onChange={this.handleChange('email')}
                    margin="normal"/>
                <br/>
                <TextField
                    id="password"
                    type="password"
                    label="Password"
                    className={classes.textField}
                    value={this.state.password}
                    onChange={this.handleChange('password')}
                    margin="normal"
                />
                <br/> {
                this.state.error && (
                    <Typography component="p" color="error">
                    <Icon color="error" className={classes.error}>error</Icon>
                    {this.state.error}
                </Typography>
                )
            }
            </CardContent>
            <CardActions>
                <Button color="primary" variant="raised" onClick={this.clickSubmit} className={classes.submit}>Submit</Button>
            </CardActions>
        </Card>
    )
  }
}

export default compose(
    withStyles(styles, {name:'SignIn'}),
    connect(null, {signIn})
)(SignIn)