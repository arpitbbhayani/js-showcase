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
      background: '#607D8B',
    };
    return (
      <div>
        <div className="ui top large menu borderless shadowless" style={menuStyle}>
          <div className="ui three column stackable padded grid container fitted computer only">
            <div className="header three wide column item"><h1 style={{'color': 'white'}}>JS Showcase</h1></div>
            <div className="ui search item ten wide column">
              <div className="ui input">
                <input type="text" placeholder="JS Search" onChange={this.onTextChange}/>
              </div>
            </div>
          </div>
          <div className="ui one column centered grid container fitted mobile tablet only">
            <div className="row">
              <div className="center aligned column"><h1 style={{'color': 'white'}}>JS Showcase</h1></div>
            </div>
            <div className="row">
              <div className="ui search item center aligned column">
                <div className="ui input">
                  <input type="text" placeholder="JS Search" onChange={this.onTextChange}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
