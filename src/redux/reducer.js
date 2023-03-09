import { initialState } from "./initialState";
import { DELETE, SET_API_DATA, TOGGLE_COMPLETED, UPDATE_TODO } from "./types";

export function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_API_DATA: {
      const _state = { ...state };
      _state.todos = action.payload;
      return _state;
    }

    case TOGGLE_COMPLETED:
      const index = state.todos.findIndex((todo) => todo.id === action.payload);
      const _todos = [...state.todos];
      _todos[index].completed = !_todos[index].completed;
      return { ...state, todos: _todos };

    case DELETE: {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);
      const _todos = [...state.todos];
      _todos.splice(index, 1);
      return { ...state, todos: _todos };
    }

    case UPDATE_TODO: {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      const _todos = [...state.todos];
      _todos[index].title = action.payload.title;
      return { ...state, todos: _todos };
    }

    default:
      console.log("Reducer type not known, probably a typo!");
      return state;
  }
}
