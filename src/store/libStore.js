import { createStore } from 'redux';
import libs from '../reducers/libsReducer.js';
import pageReducer from '../reducers/pageReducer.js';
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

export const finalReducer = combineReducers({
  libs,
  page: pageReducer,
  routing,
});

const libStore = createStore(finalReducer);

export default libStore;
