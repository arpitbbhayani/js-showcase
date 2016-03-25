import React from 'react';
import { connect } from 'react-redux';
import libStore from '../../store/libStore.js';
import { setActiveLib } from '../../actions/libActions.js';

export default class LibDetailViewComponent extends React.Component {
  constructor() {
    super();
    this.githubStats = this.githubStats.bind(this);
    this.getGithubStatsTable = this.getGithubStatsTable.bind(this);
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

  getGithubStatsTable(details) {
    return (
      <table className="ui three column table">
        <thead>
          <tr>
            <th colSpan="3">
              <h5><a href={details.source.github.repo}><i className="github icon"></i> Github Stats</a></h5>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{details.source.github.stars} <span className="ui grey header"><h5><i className="star icon"></i>STARS</h5></span></td>
            <td>{details.source.github.forks} <span className="ui grey header"><h5><i className="fork icon"></i>FORKS</h5></span></td>
            <td>{details.source.github.open_issues} <span className="ui grey header"><h5><i className="warning circle icon"></i>OPEN ISSUES</h5></span></td>
          </tr>
        </tbody>
      </table>
    );
  }

  githubStats(details) {
    if (!details || !details.source.github) {
      return '';
    }
    return (
      <div className="ui grid">
        <div className="twelve wide column computer only">
          {this.getGithubStatsTable(details)}
        </div>
        <div className="sixteen wide column tablet only">
          {this.getGithubStatsTable(details)}
        </div>
      </div>
    );
  }

  render() {
    const details = this.props.activeLibDetails.details;
    const packageName = this.props.activeLibDetails.name;

    return (
      <div className="ui basic segment">
        <div className="ui grey header">
          { (details && details.homepage) ? <h1><a target="_blank" href={details.homepage}>{packageName}</a></h1> : <h1>{packageName}</h1> }
        </div>
        <div>
          { (details && details.keywords) ? details.keywords.map(function(label, index) {
            return (
              <div key={'tag' + index} className="ui green basic label" style={{marginTop: '5px', fontWeight: 'normal'}}>
                {label}
              </div>
            );
          }) : ''}
        </div>
        <div className="ui divider"></div>
        <p><i>{(details && details.description) ? details.description : ''}</i></p>

        <div className="ui grey header">
          <h4>Latest version: <i>{(details && details.latest_version) ? details.latest_version : '<a>Report toArpit</a>'}</i></h4>
        </div>

        {this.githubStats(details)}

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
            { (details && details.versions) ? details.versions.map(function(version, index) {
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
