export default function todos(state, action) {
  switch (action.type) {
  case 'ADD_TODO': {
    return action.todo;
  }
  case 'TOGGLE_TODO': {
    if (state.id === action.id) {
      state.completed = !state.completed;
    }
    return state;
  }
  default:
    return state | [];
  }
}
