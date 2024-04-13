// App.js
import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import TodoApp from "./TodoApp";
import "./App.css";
function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <TodoApp />
      </div>
    </Provider>
  );
}

export default App;
