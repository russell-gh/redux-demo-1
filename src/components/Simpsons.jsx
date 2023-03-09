import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Characters from "./Characters";

const Simpsons = (props) => {
  const simpsons = useSelector((state) => state.simpsons);
  const sortOrder = useSelector((state) => state.sortOrder);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  if (!simpsons) {
    return <p>Loading....</p>;
  }

  const { getApiData } = props;

  const filtered = simpsons.filter((character) => {
    console.log(searchTerm);
    return character.character
      .toLowerCase()
      .includes(searchTerm ? searchTerm.toLowerCase() : "");
  });

  let total = 0;
  simpsons.forEach((character) => {
    if (character.liked) {
      total += 1;
    }
  });

  if (sortOrder && sortOrder === "asc") {
    filtered.sort((item, nextItem) => {
      if (item.character > nextItem.character) return 1;
      if (item.character < nextItem.character) return -1;
      return 0;
    });
  } else if (sortOrder) {
    filtered.sort((item, nextItem) => {
      if (item.character > nextItem.character) return -1;
      if (item.character < nextItem.character) return 1;
      return 0;
    });
  }

  return (
    <>
      <div>
        <h3>Total characters liked: {total}</h3>
        <button onClick={getApiData}>Get new data</button>
        <label htmlFor="filter">Filter: </label>
        <input
          id="filter"
          type="text"
          onInput={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <label htmlFor="sort">Sort</label>
        <select
          id="sort"
          onChange={(e) => {
            dispatch({ type: "SET_SORT_ORDER", payload: e.target.value });
          }}
        >
          <option value="asc">Asc</option>
          <option value="desc">Desc</option>
        </select>
      </div>
      <Characters simpsons={filtered} />
    </>
  );
};

export default Simpsons;
