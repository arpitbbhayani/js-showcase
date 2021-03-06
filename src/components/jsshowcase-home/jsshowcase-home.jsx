import React from 'react';
import { connect } from 'react-redux';
import MenuComponent from '../jsshowcase-menu/jsshowcase-menu.jsx';
import LibsListComponent from '../jsshowcase-libslist/jsshowcase-libslist.jsx';
import superagent from 'superagent';
import libStore from '../../store/libStore';
import { addOneLib, showLoading, removeLoading } from '../../actions/libActions.js';

import '../../client/home.js';


export default class JSShowcaseHome extends React.Component {
  constructor() {
    super();
    this.loadLibs = this.loadLibs.bind(this);
  }

  componentWillMount() {
    this.loadLibs();
  }

  componentDidUpdate() {
    window.refreshStickyForLibs();
  }

  loadLibs() {
    libStore.dispatch(showLoading());
    const currentHostName = window.location.hostname;
    const currentPort = window.location.port;
    const dataUrl = 'http://' + currentHostName + ':' + currentPort + '/data';
    superagent
      .get(dataUrl)
      .accept('application/json')
      .end(function(err, response) {
        if ( err ) {
          throw new Error('Bad response from server');
        }
        Object.keys(response.body).forEach(function(key) {
          const obj = response.body[key];
          libStore.dispatch(addOneLib(key, obj));
        });
        libStore.dispatch(removeLoading());
      });
  }

  render() {
    return (
      <div>
        <MenuComponent store={libStore} />
        <div className="ui hidden divider"></div>
        <div className="ui grid">
          <div className="six wide column computer tablet only" id="liblist_container">
            <LibsListComponent libs={this.props.libs.visibleLibs}/>
          </div>
          <div className="ten wide column computer tablet only">
            <div className="ui sticky" id="liblist_details">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// connect to Redux store
const mapStateToProps = function(state) {
  return {
    libs: state.libs,
    page: state.page,
  };
};

JSShowcaseHome = connect(mapStateToProps)(JSShowcaseHome);
export default JSShowcaseHome;
