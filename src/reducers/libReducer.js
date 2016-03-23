export default function libReducer(state, action) {
  switch (action.type) {
  case 'ADD_ONE_LIB': {
    return action.lib;
  }
  default:
    return state || {};
  }
}
