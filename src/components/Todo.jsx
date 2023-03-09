import React from "react";
import { useDispatch } from "react-redux";
import { DELETE, TOGGLE_COMPLETED } from "../redux/types";
import TodoEdit from "./TodoEdit";

const Todo = (props) => {
  const { todo } = props;
  const dispatch = useDispatch();

  return (
    <li className={todo.completed ? "completed" : ""}>
      <p onClick={() => dispatch({ type: TOGGLE_COMPLETED, payload: todo.id })}>
        {todo.title}
      </p>
      <button
        onClick={() => {
          dispatch({ type: DELETE, payload: todo.id });
        }}
      >
        Delete
      </button>
      <TodoEdit id={todo.id} />
    </li>
  );
};

export default Todo;
