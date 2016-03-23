export function addTodo(todo) {
  return {
    type: 'ADD_TODO',
    todo: todo,
  };
}

export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    id: id,
  };
}
