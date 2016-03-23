export function addOneLib(key, details) {
  return {
    type: 'ADD_ONE_LIB',
    lib: {
      key,
      details,
      name: key,
    },
  };
}

export function showLoading() {
  return {
    type: 'PAGE_LOAD',
  };
}

export function removeLoading() {
  return {
    type: 'PAGE_LOAD_DONE',
  };
}

export function filterLibs(searchQuery) {
  return {
    type: 'FILTER_LIBS',
    searchQuery,
  };
}
