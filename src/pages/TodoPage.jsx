import React from 'react'
import {Typography} from '@material-ui/core'

import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'


class TodoPage extends React.Component {

  render() {
    return (
      <div>
        <Typography variant="h4" gutterBottom component="h2">
          Todo Lists
        </Typography>
        < AddTodo/>
        < VisibleTodoList/>
      </div>
    )
  }
}

export default TodoPage
