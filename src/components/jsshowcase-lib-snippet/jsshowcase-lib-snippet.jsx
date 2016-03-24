import React from 'react';
import { Link } from 'react-router';
import './jsshowcase-lib-snippet.scss';

export default class LibSnippetComponent extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
  }

  render() {
    const libLink = '/' + this.props.name;
    return (
      <div className="ui fluid item libSnippet">
        <Link to={libLink}>
        <h3>
          {this.props.name}
        </h3>
        <p>{this.props.details.description}</p>
        </Link>
      </div>
    );
  }
}
