import React from "react";
import { Container } from "semantic-ui-react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import TodoFilters from "./TodoFilters";

export default function TodoControl() {
  return (
    <Container>
      <AddTodoForm />
      <TodoList />
      <TodoFilters />
    </Container>
  );
}
