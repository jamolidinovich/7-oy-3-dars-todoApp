// actions.js
export const addTodo = (todo) => ({
  type: "ADD_TODO",
  payload: todo,
});

export const deleteTodo = (id) => ({
  type: "DELETE_TODO",
  payload: id,
});

export const updateTodo = (todo) => ({
  type: "UPDATE_TODO",
  payload: todo,
});

export const setUsername = (name) => ({
  type: "SET_USERNAME",
  payload: name,
});

export const toggleDone = (id) => ({
  type: "TOGGLE_DONE",
  payload: id,
});
