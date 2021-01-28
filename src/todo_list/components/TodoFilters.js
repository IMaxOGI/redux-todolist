import React from "react";
import { Container, Input } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { filterTodo } from "../redux/actions/todo-list";

export default function TodoFilters() {
  const currentFilterValue = useSelector((state) => state.todoList.filter);
  const dispatch = useDispatch();

  return (
    <Container>
      <Input
        type="text"
        placeholder="search"
        value={currentFilterValue}
        onChange={(e) => dispatch(filterTodo(e.target.value))}
      />
    </Container>
  );
}
