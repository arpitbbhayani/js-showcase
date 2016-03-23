export default function pageReducer(state = {}, action) {
  switch (action.type) {
  case 'PAGE_LOAD': {
    return Object.assign({}, state, {
      is_loading: true,
    });
  }
  case 'PAGE_LOAD_DONE': {
    return Object.assign({}, state, {
      is_loading: false,
    });
  }
  default:
    return state;
  }
}
