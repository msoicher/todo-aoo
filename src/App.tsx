import { useMemo } from "react";
import "./App.css";
import Input from "./components/Input";
import Todo from "./components/Todo/Todo";
import { TodoType } from "./components/Todo/types";
import styled from "styled-components";
import { useSelector } from "react-redux";

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
  const todos = useSelector((todos: TodoType[]) => todos);

  const getTodosComplete = () => {
    const todosComplete = todos.filter((todo: TodoType) => todo.isComplete).length;
    return `Completed ${todosComplete} of ${todos.length}`;
  };

  return (
    <div>
      <StyledH2>My Todo List</StyledH2>
      <Text>{getTodosComplete()}</Text>
      <InputContainer>
        <Input />
      </InputContainer>
      <TodosGrid>
        {todos &&
          todos.length > 0 &&
          todos.map((todo: TodoType) => <Todo key={todo.id} {...todo} />)}
      </TodosGrid>
    </div>
  );
};

export default App;
