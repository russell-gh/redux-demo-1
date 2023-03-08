import { initialState } from "./initialState";

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT": {
      const _state = { ...state };
      _state.count += 1;
      return _state;
    }

    case "DECREMENT": {
      const _state = { ...state };
      _state.count -= 1;
      return _state;
    }

    case "RESET": {
      const _state = { ...state };
      _state.count = 0;
      return _state;
    }

    default:
      console.log("Reducer type not known, probably a typo!");
      return state;
  }
}
