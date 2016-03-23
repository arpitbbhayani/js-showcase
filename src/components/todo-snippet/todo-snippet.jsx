import React from 'react';
import todosStore from '../../store/todoStore';
import { toggleTodo } from '../../actions/todoActions.js';


export default class TodoSnippetComponent extends React.Component {
  constructor() {
    super();
    this._toggleTodo = this._toggleTodo.bind(this);
  }

  componentWillMount() {
  }

  _toggleTodo() {
    todosStore.dispatch(toggleTodo(this.props.todo.id));
  }

  render() {
    const isCompleted = this.props.todo.completed ? 'Done' : 'TODO';
    return (
      <div>
        <h1 onClick={this._toggleTodo}>{isCompleted} - {this.props.todo.text}</h1>
      </div>
    );
  }
}
