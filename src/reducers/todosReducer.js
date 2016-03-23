import todo from './todoReducer.js';

export default function todos(state, action) {
  switch (action.type) {
  case 'ADD_TODO': {
    return [
      ...state,
      todo(undefined, action),
    ];
  }
  case 'TOGGLE_TODO': {
    return state.map(t => todo(t, action));
  }
  default:
    return state || [];
  }
}
