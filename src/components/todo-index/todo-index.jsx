import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import routes from '../../routes.jsx';
import todosStore from '../../store/todoStore';


export default class IndexView extends React.Component {
  constructor() {
    super();
  }
  componentWillMount() {
  }

  render() {
    // const history = createBrowserHistory();
    // syncReduxAndRouter(history, this.todoStore);
    const history = syncHistoryWithStore(browserHistory, todosStore);
    return (
      <div>
        <Provider store={ todosStore }>
          <Router history={ history } onUpdate={() => window.scrollTo(0, 0)}>
            { routes }
          </Router>
        </Provider>
      </div>
    );
  }
}

ReactDOM.render(
  <IndexView {...todosStore.getState()} />,
  document.getElementById('root')
);

export default connect()(IndexView);
