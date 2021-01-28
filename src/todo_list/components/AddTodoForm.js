import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Container, Input, Button } from "semantic-ui-react";
import { addTodo } from "../redux/actions/todo-list";

export default function NewTodoForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const createTodo = () => {
    dispatch(addTodo(title));
    setTitle("");
  };

  return (
    <Container>
      <Input value={title} onChange={(e) => setTitle(e.target.value)} />
      <Button style={{ marginLeft: 20 }} primary onClick={createTodo}>
        ADD TODO
      </Button>
    </Container>
  );
}
