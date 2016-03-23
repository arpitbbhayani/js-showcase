import React from 'react';
import { connect } from 'react-redux';
import todosStore from '../../store/todoStore';
import { addTodo } from '../../actions/todoActions.js';
import TodosList from '../todo-list/todo-list.jsx';

export default class Todos extends React.Component {
  constructor() {
    super();
    this.id = 0;

    this._getNextId = this._getNextId.bind(this);
    this._addTodo = this._addTodo.bind(this);
  }

  componentWillMount() {
  }

  _getNextId() {
    this.id ++;
    return this.id;
  }

  _addTodo() {
    todosStore.dispatch(addTodo({
      'id': this._getNextId(),
      'text': document.getElementById('new_todo_text').value,
      'completed': false,
    }));
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="your todo" id="new_todo_text"/>
        <button onClick={this._addTodo}>Add this todo</button>
        <TodosList todos={this.props.todos} />
      </div>
    );
  }
}

// connect to Redux store
const mapStateToProps = function(state) {
  return {
    todos: state.todos,
  };
};

Todos = connect(mapStateToProps)(Todos);
export default Todos;
