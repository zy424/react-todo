import React from 'react'
import {NavLink} from 'react-router-dom'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import todo from '../assets/todo.jpg'


class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Todo image"
              image={todo}
              title="Todo image"
              height='420'
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Yi To-Do
              </Typography>
              <Typography component="p">
                From work to play, Yi To-Do is the easiest way to get stuff done, every day.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <NavLink to='/comment'>
              <Button size="small" color="primary">
                Get Started
              </Button>
            </NavLink>
          </CardActions>
        </Card>
      </div>
    )
  }
}


export default HomePage
