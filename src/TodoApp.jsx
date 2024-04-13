import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  deleteTodo,
  updateTodo,
  setUsername,
  toggleDone,
} from "./redux/actions";
import { IoAdd } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
import "./TodoApp.css";
function TodoApp() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const username = useSelector((state) => state.username);
  const [todoText, setTodoText] = useState("");

  const handleAddTodo = () => {
    if (todoText) {
      dispatch(
        addTodo({
          id: Date.now(),
          text: todoText,
          done: false, // default value for done
        })
      );
      setTodoText("");
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleUpdateTodo = (updatedTodo) => {
    dispatch(updateTodo(updatedTodo));
  };

  const handleSetUsername = (name) => {
    dispatch(setUsername(name));
  };

  const handleToggleDone = (id) => {
    dispatch(toggleDone(id));
  };

  return (
    <div>
      {/* <h1>Welcome, {username || "Guest"}</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={username}
        onChange={(e) => handleSetUsername(e.target.value)}
      /> */}
      <div className="input-btn">
        <input
          className="input"
          type="text"
          placeholder="Add a new task"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button className="btn" onClick={handleAddTodo}>
          <IoAdd color="#fff" fontSize={"30px"} />
        </button>
      </div>
      <div className="ul">
        <p className="task">Tasks to do </p>
        <ul>
          {todos.map((todo) => (
            <li
              className="li"
              key={todo.id}
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: todo.done ? "line-through" : "none",
              }}
            >
              <span>{todo.text}</span>
              <div className="delet">
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => handleToggleDone(todo.id)}
                  //   style={{ marginRight: "10px" }}
                />
                <span onClick={() => handleDeleteTodo(todo.id)}>
                  <FaRegTrashCan fontSize={"20px"} />
                </span>
                <span
                  onClick={() =>
                    handleUpdateTodo({
                      ...todo,
                      text: prompt("Enter new text:", todo.text),
                    })
                  }
                >
                  <MdEdit fontSize={"20px"} />
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoApp;
