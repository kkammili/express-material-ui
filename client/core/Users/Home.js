import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Card, {CardContent, CardMedia} from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import seashellImg from '../../assets/images/seashell.jpg'
import {connect} from 'react-redux'
import {compose} from 'redux'

import {getUser} from './redux/actions'
import {allUserList} from '../Users/redux/memoized-selectors'
import {usersList} from "./redux/input-selectors";


const styles = theme => ({
    card: {
        maxWidth: 600,
        margin: 'auto',
        marginTop: theme.spacing.unit * 5
    },
    title: {
        padding:`${theme.spacing.unit * 3}px ${theme.spacing.unit * 2.5}px ${theme.spacing.unit * 2}px`,
        color: theme.palette.text.secondary
    },
    media: {
        minHeight: 330
    }
})

class Home extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  }
  componentDidMount(){
      this.props.getUser()
  }

    render() {
        const {classes} = this.props
        return (
            <div>
                <Card className={classes.card}>
                    <Typography type="headline" component="h2" className={classes.title}>
                        Home Page
                    </Typography>
                    <CardMedia className={classes.media} image={seashellImg} title="Unicorn Shells"/>
                    <CardContent>
                        <Typography type="body21" component="p">
                            Welcome to the Mern Skeleton home page
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default compose(
    withStyles(styles, {name:'Home'}),
    connect(allUserList, {getUser})
)(Home)