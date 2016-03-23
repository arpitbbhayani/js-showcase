import React from 'react';

export default class LibSnippetComponent extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
  }

  render() {
    return (
      <div className="ui fluid item">
        <h3>{this.props.name}</h3>
        <p>{this.props.details.description}</p>
      </div>
    );
  }
}
