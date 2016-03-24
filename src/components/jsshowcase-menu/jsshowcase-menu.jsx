import React from 'react';
import { filterLibs } from '../../actions/libActions';
import '../../static/css/ux.css';

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
    const menuStyle = {
      height: '80px',
      background: '#607D8B',
    };
    return (
      <div>
        <div className="ui top large menu borderless shadowless fixed" style={menuStyle}>
          <div className="ui three column stackable grid container fitted computer tablet only">
            <div className="header three wide column item"><h1 style={{'color': 'white'}}>JS Showcase</h1></div>
            <div className="ui search item ten wide column">
              <div className="ui input">
                <input type="text" placeholder="JS Search" onChange={this.onTextChange}/>
              </div>
            </div>
          </div>
          <div className="ui three column grid container fitted mobile only">
            <div className="ui search item ten wide column">
              <div className="ui input">
                <input type="text" placeholder="JS Search" onChange={this.onTextChange}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
