import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import routes from '../../routes.jsx';
import libStore from '../../store/libStore';


export default class Layout extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    console.log(this.conetxt);
  }

  render() {
    const history = syncHistoryWithStore(browserHistory, libStore);
    return (
      <div>
        <Provider store={ libStore }>
          <Router history={ history } onUpdate={() => window.scrollTo(0, 0)}>
            { routes }
          </Router>
        </Provider>
      </div>
    );
  }
}

ReactDOM.render(
  <Layout />,
  document.getElementById('root')
);

export default connect()(Layout);
