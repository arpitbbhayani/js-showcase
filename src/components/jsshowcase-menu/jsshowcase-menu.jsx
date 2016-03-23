import React from 'react';
import { filterLibs } from '../../actions/libActions';

export default class MenuComponent extends React.Component {
  constructor() {
    super();
    this.onTextChange = this.onTextChange.bind(this);
    this.theStore = null;
  }

  componentWillMount() {
    this.theStore = this.props.store;
  }

  onTextChange(e) {
    const searchQuery = e.target.value;
    this.theStore.dispatch(filterLibs(searchQuery));
  }

  render() {
    return (
      <div>
        <div className="ui top menu borderless">
          <a className="header item">JS Showcase</a>
          <input type="text" placeholder="JS Search" onChange={this.onTextChange}/>
        </div>
      </div>
    );
  }
}
