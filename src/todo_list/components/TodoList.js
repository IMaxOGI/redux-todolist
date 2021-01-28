import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { List } from "semantic-ui-react";
import TodoItem from "./TodoItem";

export default function TodoList() {
  // const todoList = useSelector((state) => state.todoList.list);
  // const filter = useSelector((state) => state.todoList.filter);
  const { list, filter } = useSelector((state) => state.todoList);

  const filteredTodoList = useMemo(() => {
    return filter
      ? list.filter((todo) =>
          todo.title.toLowerCase().includes(filter.toLowerCase())
        )
      : list;
  }, [list, filter]);
  return (
    <List divided relaxed>
      {filteredTodoList.length === 0 && (
        <List.Item>
          No Todos to show, please create one or remove the filter
        </List.Item>
      )}
      {filteredTodoList.map((todoItem) => (
        <TodoItem key={todoItem.id} todo={todoItem} />
      ))}
    </List>
  );
}
