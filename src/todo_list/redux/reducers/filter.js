import { FILTER_TODO } from "../actions/todo-list";

const initialState = "";

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case FILTER_TODO:
      return action.payload;

    default:
      return state;
  }
}
