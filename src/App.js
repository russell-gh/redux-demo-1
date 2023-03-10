import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import Cart from "./components/Cart";
import "./App.css";
import { SET_API_DATA } from "./redux/types";

const App = () => {
  const dispatch = useDispatch();

  const getCartItems = async () => {
    const { data } = await axios.get(`https://fakestoreapi.com/products`);

    dispatch({ type: SET_API_DATA, payload: data });
  };

  useEffect(() => {
    getCartItems();
  }, []);

  return <Cart />;
};

export default App;
