import React from 'react';
import { Route } from 'react-router';

import JSShowcaseHome from './components/jsshowcase-home/jsshowcase-home.jsx';
import LibDetailViewComponent from './components/jsshowcase-lib-details/jsshowcase-lib-details.jsx';

export default(
  <Route path="/" component={ JSShowcaseHome }>
    <Route path="/:slug" component={ LibDetailViewComponent } />
  </Route>
);
