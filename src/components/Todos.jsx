import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

const Todos = () => {
  const todos = useSelector((state) => state.todos);

  if (!todos) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </ul>
  );
};

export default Todos;
