import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import Simpsons from "./components/Simpsons";

const App = () => {
  const dispatch = useDispatch();

  const getApiData = async () => {
    const results = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
    );

    results.data.forEach((item) => {
      item.uniqueId = Math.random();
    });

    //send them to the store
    dispatch({ type: "SET_API_DATA", payload: results.data });
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <Simpsons getApiData={getApiData} />
    </>
  );
};

export default App;
