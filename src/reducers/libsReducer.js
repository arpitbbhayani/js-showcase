import libReducer from './libReducer.js';

export default function todos(state = {
  libs: [],
  visibleLibs: [],
  activeLibDetails: {},
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
  case 'SET_ACTIVE_LIB': {
    const matchedLibs = state.libs.filter(function(lib) {
      return lib.name === action.slug;
    });
    if (matchedLibs.length !== 1) {
      return state;
    }
    return Object.assign({}, state, {
      activeLibDetails: matchedLibs[0],
    });
  }
  default:
    return state;
  }
}
