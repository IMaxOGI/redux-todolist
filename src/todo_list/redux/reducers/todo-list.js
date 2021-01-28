import { ADD_TODO, REMOVE_TODO, COMPLETE_TODO } from "../actions/todo-list";

const todoReducers = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: Math.random() + "",
          title: action.payload.title,
          complete: false,
        },
      ];
    case REMOVE_TODO:
      return state.filter((todoItem) => todoItem.id !== action.payload);
    case COMPLETE_TODO:
    case COMPLETE_TODO:
      return state.map((todoItem) =>
        todoItem.id === action.payload
          ? { ...todoItem, completed: true }
          : todoItem
      );
    default:
      return state;
  }
};

export default todoReducers;
