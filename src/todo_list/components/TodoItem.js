import React from "react";
import { useDispatch } from "react-redux";
import { Icon, List } from "semantic-ui-react";
import { completeTodo, removeTodo } from "../redux/actions/todo-list";

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const completeItem = () => {
    dispatch(completeTodo(todo.id));
  };
  const deleteTodo = () => {
    dispatch(removeTodo(todo.id));
  };

  return (
    <List.Item>
      {todo.completed && (
        <List.Icon name="checkmark" size="small" verticalAlign="middle" />
      )}
      <List.Content>
        <List.Header>
          <span style={{ marginRight: 20 }} onClick={completeItem}>
            {todo.title}
          </span>
          <Icon
            name="trash alternate"
            verticalAlign="middle"
            onClick={deleteTodo}
          />
        </List.Header>
      </List.Content>
    </List.Item>
  );
}
