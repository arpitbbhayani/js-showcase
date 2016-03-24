import libReducer from './libReducer.js';

export default function todos(state = {
  libs: [],
  visibleLibs: [],
}, action) {
  switch (action.type) {
  case 'ADD_ONE_LIB': {
    const newLibs = [
      ...state.libs,
      libReducer(undefined, action),
    ];
    const newVisibleLibs = newLibs.slice();
    return Object.assign({}, state, {
      libs: newLibs,
      visibleLibs: newVisibleLibs,
    });
  }
  case 'FILTER_LIBS': {
    const newVisibleLibs = state.libs.filter(function(lib) {
      return lib.details.description && lib.details.description.includes(action.searchQuery);
    });
    return Object.assign({}, state, {
      visibleLibs: newVisibleLibs,
    });
  }
  default:
    return state;
  }
}
