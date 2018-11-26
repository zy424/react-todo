import {ADD_TODO, DELETE_TODO, TOGGLE_TODO} from "../actions/ActionTypes";

const iniTodos =[
    {text: 'washing clothes', completed:true},
    {text: '5km running',completed:true},
    {text: 'reading books'},
    {text: 'learning React'},
]
const todos = (state = iniTodos, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map(
        todo =>
          todo.id === action.id ? {...todo, completed: !todo.completed} : todo
      )
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);
    default:
      return state
  }
}
export default todos