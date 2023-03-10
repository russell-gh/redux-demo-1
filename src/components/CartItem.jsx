import React from "react";
import { useDispatch } from "react-redux";
import { DELETE } from "../redux/types";

const CartItem = (props) => {
  const { item } = props;
  const dispatch = useDispatch();

  return (
    <div className="flexContainer">
      <div className="title">
        <p>Title: {item.title}</p>
      </div>
      <div className="price">
        <p>Price: &pound;{item.price}</p>
      </div>
      <div className="subtotal">
        <p>
          Sub total: &pound;
          {item.quantity ? item.price * item.quantity : item.price}
        </p>
      </div>
      <div className="controls">
        <button
          onClick={() => dispatch({ type: "INCREASE_QUANTITY", id: item.id })}
        >
          +
        </button>
        <input
          type="number"
          value={item.quantity ? item.quantity : 1}
          onInput={(e) =>
            dispatch({
              type: "SET_QUANTITY",
              payload: { id: item.id, newValue: e.target.value },
            })
          }
        />
        <button
          onClick={() => dispatch({ type: "DECREASE_QUANTITY", id: item.id })}
        >
          -
        </button>{" "}
        <button
          onClick={() => {
            dispatch({ type: DELETE, id: item.id });
          }}
        >
          Delete
        </button>
      </div>

      {/* <TodoEdit id={todo.id} /> */}
    </div>
  );
};

export default CartItem;
