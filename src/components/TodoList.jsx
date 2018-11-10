import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import {Paper, Table, TableBody, TableCell, TableFooter, TableHead, TableRow} from '@material-ui/core'

import Todo from './Todo'
import Footer from '../containers/Footer'


const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#757575',
    color: theme.palette.common.white,
    fontSize: 16,
    fontWeight: 700
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});


const TodoList = ({todos, toggleTodo, deleteTodo, classes}) => (
  <Paper className={classes.root}>
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <CustomTableCell padding="dense">Completed</CustomTableCell>
          <CustomTableCell padding="dense">Your Todos</CustomTableCell>
          <CustomTableCell padding="dense">Delete</CustomTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {todos.map(todo => (
          <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} onDelete={() => deleteTodo(todo.id)}/>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>
            <Footer/>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  </Paper>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(TodoList)