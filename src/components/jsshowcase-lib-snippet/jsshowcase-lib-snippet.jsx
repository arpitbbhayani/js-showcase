import React from 'react';
import { Link } from 'react-router';
import './jsshowcase-lib-snippet.scss';

export default class LibSnippetComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    const libLink = '/' + this.props.name;
    return (
      <div className="ui fluid item libSnippet">
        <Link to={libLink}>
          <div className="largetext">
            {this.props.name}
          </div>
        </Link>
      </div>
    );
  }
}
