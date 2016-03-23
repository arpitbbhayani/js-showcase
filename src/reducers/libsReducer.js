import libReducer from './libReducer.js';

export default function todos(state = [], action) {
  switch (action.type) {
  case 'ADD_ONE_LIB': {
    return [
      ...state,
      libReducer(undefined, action),
    ];
  }
  case 'FILTER_LIBS': {
    const newState = state.filter(function(value) {
      return value.details.description && value.details.description.includes(action.searchQuery);
    });
    return newState;
  }
  default:
    return state;
  }
}
