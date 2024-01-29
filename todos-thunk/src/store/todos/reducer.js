import { CREATE_TODO, DELETE_TODO, FETCH_TODOS, UPDATE_TODO } from "./thunks";

const initialState = {
  todos: [],
};

export default function todosReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_TODOS:
      return { ...state, todos: payload };
    case UPDATE_TODO:
      return { ...state, todos: state.todos.map((todo) => {
        if (todo.id === payload.id) {
          return payload;
        }

        return todo;
      })}
    case DELETE_TODO:
      return { ...state, todos: state.todos.filter((todo) => todo.id !== payload) };
    case CREATE_TODO:
      return { ...state, todos: [...state.todos, payload] };
    default:
      return state;
  }
};
