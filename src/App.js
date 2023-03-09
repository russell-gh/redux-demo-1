import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import Todos from "./components/Todos";
import "./App.css";
import { SET_API_DATA } from "./redux/types";

const App = () => {
  const dispatch = useDispatch();

  const getTodos = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/`
    );

    dispatch({ type: SET_API_DATA, payload: data });
  };

  useEffect(() => {
    getTodos();
  }, []);

  return <Todos />;
};

export default App;
