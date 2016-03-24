import React from 'react';
import { connect } from 'react-redux';
import libStore from '../../store/libStore.js';
import { setActiveLib } from '../../actions/libActions.js';

export default class LibDetailViewComponent extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
  }

  componentDidMount() {
    const slug = this.props.routeParams.slug;
    libStore.dispatch(setActiveLib(slug));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.routeParams.slug !== this.props.routeParams.slug) {
      const slug = nextProps.routeParams.slug;
      libStore.dispatch(setActiveLib(slug));
    }
  }

  render() {
    const libDetailsStyle = {
      paddingTop: '80px',
    };
    return (
      <div className="ui basic segment" style={libDetailsStyle}>
        <div className="ui grey header">
          <h1>{this.props.activeLibDetails.name}</h1>
        </div>
        <div className="ui divider"></div>
      </div>
    );
  }
}


// connect to Redux store
const mapStateToProps = function(state) {
  return {
    activeLibDetails: state.libs.activeLibDetails,
  };
};

LibDetailViewComponent = connect(mapStateToProps)(LibDetailViewComponent);
export default LibDetailViewComponent;
