import React from 'react'
import PropTypes from 'prop-types'
import {Checkbox, IconButton, TableCell, TableRow} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'


const Todo = ({onClick, completed, text, onDelete}) => (
  <TableRow
    hover
    onClick={onClick}
  >
    <TableCell padding="dense">
      <Checkbox checked={completed}/>
    </TableCell>
    <TableCell padding="dense">{text}</TableCell>
    <TableCell padding="dense">
      <IconButton
        aria-label="Delete"
        color="secondary"
        onClick={onDelete}
      >
        <DeleteIcon/>
      </IconButton>
    </TableCell>
  </TableRow>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}

export default Todo