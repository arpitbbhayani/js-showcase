import React from 'react';
import { Route } from 'react-router';

import Todos from './components/todo-all/todo-all.jsx';

export default(
  <Route path="/" component={ Todos } />
);
