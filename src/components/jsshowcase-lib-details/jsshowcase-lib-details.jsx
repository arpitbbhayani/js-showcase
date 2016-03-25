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
    return (
      <div className="ui basic segment">
        <div className="ui grey header">
          <h1>{this.props.activeLibDetails.name}</h1>
        </div>
        <div>
          { (this.props.activeLibDetails.details && this.props.activeLibDetails.details.keywords && ? this.props.activeLibDetails.details.keywords.map(function(label, index) {
            return (
              <div key={'tag' + index} className="ui green basic label" style={{marginTop: '5px', fontWeight: 'normal'}}>
                {label}
              </div>
            );
          }) : ''}
        </div>
        <div className="ui divider"></div>
        <p><i>{(this.props.activeLibDetails.details && this.props.activeLibDetails.details.description) ? this.props.activeLibDetails.details.description : ''}</i></p>

        <div className="ui grey header">
          <h4>Latest version: <i>{(this.props.activeLibDetails.details && this.props.activeLibDetails.details.latest_version) ? this.props.activeLibDetails.details.latest_version : '<a>Report toArpit</a>'}</i></h4>
        </div>
        <div className="ui header">
          <h5>Applications that uses <i>{this.props.activeLibDetails.name}</i></h5>
        </div>
        <table className="ui very basic table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Version</th>
            </tr>
          </thead>
          <tbody>
            { (this.props.activeLibDetails.details && this.props.activeLibDetails.details.versions) ? this.props.activeLibDetails.details.versions.map(function(version, index) {
              return (
                <tr key={'version' + index}>
                  <td>{version.product}</td>
                  <td>{version.version}</td>
                </tr>
              );
            }) : ''}
          </tbody>
        </table>
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
