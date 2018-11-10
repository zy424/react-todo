import {combineReducers} from 'redux'
import todos from './Todos'
import visibilityFilter from './VisibilityFilter'

export default combineReducers({
  todos,
  visibilityFilter
})

// function todoApp(state = {}, action) {
//   return {
//     todos: todos(state.todos, action),
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action)
//   }
// }