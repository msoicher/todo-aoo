import styled from "styled-components";
import { ACTIONS } from "../../reducers/todosReducer";
import { WarningButton, DangerButton } from "../ui/Button";
import { TodoType } from "./types";
import { useDispatch } from "react-redux";

const Container = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TodoText = styled.p<{ isComplete: boolean }>`
  ${(props) => props.isComplete && "text-decoration: line-through"};
`;

const Todo = ({ name, id, isComplete }: TodoType) => {
  const dispatch = useDispatch();
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
