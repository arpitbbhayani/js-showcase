import React from 'react';
import TodoSnippetComponent from '../todo-snippet/todo-snippet.jsx';

export default class TodosList extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
  }

  render() {
    return (
      <div>
      {this.props.todos.map(todo => <TodoSnippetComponent key={todo.id} todo={todo} />)}
      </div>
    );
  }
}
