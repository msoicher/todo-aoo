import styled from "styled-components";
import { ACTIONS } from "../../reducers/todosReducer";
import { Dispatch } from "../Input";
import { WarningButton, DangerButton } from "../ui/Button";
import { TodoType } from "./types";

const Container = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TodoText = styled.p<{ isComplete: boolean }>`
  ${(props) => props.isComplete && "text-decoration: line-through"};
`;

const Todo = ({ name, id, isComplete, dispatch }: TodoType & Dispatch) => {
  const deleteTodo = (id: string) => dispatch({ type: ACTIONS.DELETE_TODO, payload: id });
  const toggleTodo = (id: string) => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: id });

  return (
    <Container>
      <TodoText isComplete={isComplete}>{name}</TodoText>
      <div>
        <DangerButton onClick={() => deleteTodo(id)}>Delete</DangerButton>
        &nbsp;
        <WarningButton onClick={() => toggleTodo(id)}>Toggle</WarningButton>
      </div>
    </Container>
  );
};

export default Todo;
