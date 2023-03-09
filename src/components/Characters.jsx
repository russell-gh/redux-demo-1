import React from "react";
import { useSelector } from "react-redux";
import Character from "./Character";

const Characters = (props) => {
  return props.simpsons.map((item) => {
    return (
      <div className="character" key={item.uniqueId}>
        <Character
          liked={item.liked}
          name={item.character}
          quote={item.quote}
          image={item.image}
          characterDirection={item.characterDirection}
        />
      </div>
    );
  });
};

export default Characters;
