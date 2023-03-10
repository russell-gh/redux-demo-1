import { initialState } from "./initialState";
import { DELETE, SET_API_DATA, TOGGLE_COMPLETED, UPDATE_TODO } from "./types";

export function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_API_DATA: {
      const _state = { ...state };
      _state.cart = action.payload;
      return _state;
    }

    case "SET_QUANTITY": {
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      const cart = [...state.cart];

      //in case it starts as undefined
      cart[index].quantity =
        cart[index].quantity === undefined ? 1 : cart[index].quantity;

      cart[index].quantity = Number(action.payload.newValue);

      return { ...state, cart };
    }

    case "INCREASE_QUANTITY": {
      const index = state.cart.findIndex((item) => item.id === action.id);

      const cart = [...state.cart];

      //in case it starts as undefined
      cart[index].quantity =
        cart[index].quantity === undefined ? 1 : cart[index].quantity;

      cart[index].quantity += 1;

      return { ...state, cart };
    }

    case "DECREASE_QUANTITY": {
      //check you did not go past end

      const index = state.cart.findIndex((item) => item.id === action.id);

      const cart = [...state.cart];

      //in case it starts as undefined
      cart[index].quantity =
        cart[index].quantity === undefined ? 1 : cart[index].quantity;

      cart[index].quantity -= 1;

      if (cart[index].quantity < 1) cart[index].quantity = 1;

      return { ...state, cart };
    }

    case DELETE: {
      const index = state.cart.findIndex((item) => item.id === action.id);
      const cart = [...state.cart];
      cart.splice(index, 1);
      return { ...state, cart };
    }

    default:
      console.log("Reducer type not known, probably a typo!");
      return state;
  }
}
