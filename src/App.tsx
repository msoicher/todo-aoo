import { useReducer, useMemo } from "react";
import "./App.css";
import Input from "./components/Input";
import Todo from "./components/Todo/Todo";
import { TodoType } from "./components/Todo/types";
import { reducer } from "./reducers/todosReducer";
import styled from "styled-components";

const TodosGrid = styled.div`
  display: grid;
`;

const InputContainer = styled.div`
  margin-bottom: 10px;
`;

const StyledH2 = styled.h2`
  margin-bottom: 12px;
`;

const Text = styled.p`
  margin-bottom: 16px;
`;

const App = () => {
  const [todos, dispatch] = useReducer(reducer, []);

  const getTodosComplete = useMemo(() => {
    const todosComplete = todos.filter((todo: TodoType) => todo.isComplete).length;
    return `Completed ${todosComplete} of ${todos.length}`
  }, [todos]);

  return (
    <div>
      <StyledH2>My Todo List</StyledH2>
      <Text>{getTodosComplete}</Text>
      <InputContainer>
        <Input dispatch={dispatch} />
      </InputContainer>
      <TodosGrid>
        {todos &&
          todos.length > 0 &&
          todos.map((todo: TodoType) => <Todo key={todo.id} dispatch={dispatch} {...todo} />)}
      </TodosGrid>
    </div>
  );
};

export default App;
