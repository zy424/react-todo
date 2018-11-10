import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

import {addTodo} from '../actions'


class AddTodo extends React.Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  state = {
    input: "",
    open: false,
  }

  handleClickOpen = () => {
    this.setState({open: true})
  }

  handleClose = (e) => {
    this.setState({open: false})
  }

  handleSubmit = (e) => {
    const {input} = this.state
    e.preventDefault()
    if (!input.trim()) {
      return
    }
    this.props.addTodo(input)
    this.setState({open: false, input: ''})
  }

  onChange = (e) => {
    let {input} = this.state
    input = e.target.value
    this.setState({input})
  }

  render() {
    return (
      <div>
        <Button variant="extendedFab" color="secondary" aria-label="Add" onClick={this.handleClickOpen}>
          <AddIcon/> Add Todo
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add Todo</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please write down what need to be done, we'll remind you.
            </DialogContentText>
            <TextField
              autoFocus
              value={this.state.input}
              margin="dense"
              label="What need to be done"
              fullWidth
              onChange={this.onChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="primary" type="submit">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}


export default connect(null, {addTodo: addTodo})(AddTodo)