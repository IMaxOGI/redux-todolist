import { combineReducers } from "redux";
import todoList from "./todo-list";
import counter from "./counter";
import filter from "./filter";

export default combineReducers({
  todoList: combineReducers({
    list: todoList,
    filter: filter,
  }),
  counter,
});
