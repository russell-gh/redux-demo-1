import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  if (!cart) {
    return <p>Please add some items</p>;
  }

  let total = 0;
  cart.forEach((item) => {
    if (!item.quantity) {
      total += item.price;
    } else {
      total += item.price * item.quantity;
    }
  });

  return (
    <>
      <h3>Total: &pound; {total.toFixed(2)}</h3>
      {cart.map((item) => {
        return <CartItem key={item.id} item={item} />;
      })}
    </>
  );
};

export default Cart;
