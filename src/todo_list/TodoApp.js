import React from "react";
import { Provider } from "react-redux";
import { Container } from "semantic-ui-react";
import TodoControl from "./components/TodoControl";
import createStore from "./redux/createStore";

const store = createStore();

export default function TodoApp() {
  return (
    <Container>
      <Provider store={store}>
        <TodoControl />
      </Provider>
    </Container>
  );
}
