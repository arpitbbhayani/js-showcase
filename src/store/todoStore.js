import { createStore } from 'redux';
import todos from '../reducers/todosReducer.js';
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

export const finalReducer = combineReducers({
  todos,
  routing,
});

const todoStore = createStore(finalReducer);

export default todoStore;
