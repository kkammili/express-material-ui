import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import {connect} from 'react-redux'
import {compose} from 'redux'

import {getUser} from './redux/actions'
import {allUserList} from '../Users/redux/memoized-selectors'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import ListUI, {ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import Person from 'material-ui-icons/Person'
import ArrowForward from 'material-ui-icons/ArrowForward'
import IconButton from 'material-ui/IconButton'
import {Link} from 'react-router-dom'
import {List} from 'immutable'

const styles = theme => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing.unit * 5
  },
  title: {
    padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2.5}px ${theme.spacing.unit * 2}px`,
    color: theme.palette.text.secondary
  },
  media: {
    minHeight: 330
  }
})

class Users extends Component {
    static propTypes = {
      classes: PropTypes.object.isRequired,
        getUser: PropTypes.func,
        UsersList: PropTypes.instanceOf(List)
    }
    componentDidMount () {
      this.props.getUser()
    }

    render () {
      const {classes} = this.props
      return (
        <Paper className={classes.root} elevation={4}>
          <Typography type='title' className={classes.title}>
                All Users
          </Typography>
          <ListUI dense>
            {this.props.usersList.map((item, i) => {
              return (
                <Link to={'/user/' + item.get('_id')} key={i}>
                  <ListItem button>
                    <ListItemAvatar>
                      <Avatar>
                        <Person />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={item.get('name')} />
                    <ListItemSecondaryAction>
                      <IconButton>
                        <ArrowForward />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                </Link>
              )
            })}
          </ListUI>
        </Paper>
      )
    }
}

export default compose(
  withStyles(styles, {name: 'Users'}),
  connect(allUserList, {getUser})
)(Users)
