import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createSingleUser} from '../Users/redux/actions'
import Card, {CardContent, CardActions} from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import {compose} from 'redux'
import {withStyles} from 'material-ui/styles'
import Icon from 'material-ui/Icon'
import {Link} from 'react-router-dom'
import Dialog, {DialogContent, DialogContentText, DialogActions, DialogTitle} from 'material-ui/Dialog'

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

export class SignUp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      password: '',
      email: '',
      open: false
      // error: ''
    }
  }
  static propTypes = {
    loginId: PropTypes.string,
    classes: PropTypes.object,
    createSingleUser: PropTypes.func
  }

handleChange = name => event => {
  this.setState({[name]: event.target.value})
}

clickSubmit = () => {
  const user = {
    name: this.state.name || undefined,
    email: this.state.email || undefined,
    password: this.state.password || undefined
  }
  this.props.createSingleUser(user).then(res => {
    if (res.type === 'CREATE_SINGLE_USER') {
      this.setState({
        open: true
      })
    } else {
      this.setState({
        error: res.response.data.error
      })
    }
  })
}

render () {
  const {classes} = this.props
  return (
    <Fragment>
      <Card className={classes.card}>
        <CardContent>
          <Typography type='headline' component='h2'
            className={classes.title}>
                  Sign Up
          </Typography>
          <TextField
            id='name'
            label='Name'
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin='normal' /> <br />
          <TextField
            id='email'
            type='email'
            label='Email'
            className={classes.textField}
            value={this.state.email}
            onChange={this.handleChange('email')}
            margin='normal'
          />
          <br />
          <TextField
            id='password'
            type='password'
            label='Password'
            className={classes.textField}
            value={this.state.password}
            onChange={this.handleChange('password')}
            margin='normal'
          /><br />
          {this.state.error && (
            <Typography
              component='p'
              color='error'>
              <Icon color='error' className={classes.error}>error</Icon>
              {this.state.error}</Typography>)}
        </CardContent>
        <CardActions>
          <Button
            color='primary'
            raised='raised'
            onClick={this.clickSubmit}
            className={classes.submit}
          >
                  Submit
          </Button>
        </CardActions>
      </Card>
      <Dialog open={this.state.open} disableBackdropClick>
        <DialogTitle>New Account</DialogTitle>
        <DialogContent>
          <DialogContentText>
                New account successfully created.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to='/signin'>
            <Button color='primary' autoFocus='autoFocus' variant='raised'>
                    Sign In
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}
}

export default compose(
  withStyles(styles, {name: 'SignUp'}),
  connect(null, {createSingleUser})
)(SignUp)
