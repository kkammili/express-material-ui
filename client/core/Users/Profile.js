import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Redirect} from 'react-router'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import List, {ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import Divider from 'material-ui/Divider'
import Person from 'material-ui-icons/Person'
import Edit from 'material-ui-icons/Edit'
import {withStyles} from 'material-ui/styles'
import {compose} from 'redux'
import auth from '../../auth/auth-helper'
import {fetchSingleUser} from './redux/actions'
import {userDetails} from '../Users/redux/memoized-selectors'
import {Link} from 'react-router-dom'
import IconButton from 'material-ui/IconButton'
import DeleteUser from './DeleteUser'

const styles = theme => ({
  root: theme.mixins.gutters({
    maxWidth: 600,
    margin: 'auto',
    padding: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 5
  }),
  title: {
    margin: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 2}px`,
    color: theme.palette.protectedTitle
  }
})

export class Profile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: {},
      redirectToSignin: false
    },
    this.match = props.match
  }
  static propTypes = {
    loginId: PropTypes.string,
    classes: PropTypes.object
  }

  componentDidMount () {
    const {userId} = this.props.match.params
    const {token} = auth.isAuthenticated()
    this.props.fetchSingleUser(userId, token)
  }

  render () {
    const {classes} = this.props
    const redirectToSignin = this.state.redirectToSignin
    if (redirectToSignin) {
      return <Redirect to={'/signin'} />
    }
    return (
      <Fragment>
        <Paper className={classes.root} elevation={4}>
          <Typography type='title' className={classes.title}> Profile </Typography>
          <List dense>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <Person />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={this.props.user.get('name')}
                secondary={this.props.user.get('email')} />
              {
                auth.isAuthenticated().user && auth.isAuthenticated().user._id === this.props.user.get('_id') && (
                  <ListItemSecondaryAction>
                    <Link to={'/user/edit/' + this.props.user.get('_id')}>
                      <IconButton color='primary'>
                        <Edit />
                      </IconButton>
                    </Link>
                    <DeleteUser userId={this.props.user.get('_id')} />
                  </ListItemSecondaryAction>
                )
              }
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary={'Joined: ' +
                (new Date(this.props.user.get('created'))).toDateString()} />
            </ListItem>
          </List>
        </Paper>
      </Fragment>
    )
  }
}

export default compose(
  withStyles(styles, {name: 'Profile'}),
  connect(userDetails, {fetchSingleUser})
)(Profile)
