import React from 'react';
import LibSnippetComponent from '../jsshowcase-lib-snippet/jsshowcase-lib-snippet.jsx';

export default class LibsListComponent extends React.Component {
  constructor() {
    super();
    this.renderContents = this.renderContents.bind(this);
  }

  componentWillMount() {
  }

  renderContents() {
    return (
      <div className="ui vertical menu fluid">
        {this.props.libs.map(lib => <LibSnippetComponent key={lib.key} name={lib.name} details={lib.details}/>)}
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderContents()}
      </div>
    );
  }
}
