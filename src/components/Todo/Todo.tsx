import styled from "styled-components";
import { ACTIONS } from "../../reducers/todosReducer";

const Button = styled.button<{ color: string }>`
  background-color: ${(props) => props.color};
  margin: 0 1rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Text = styled.div<{ isComplete: boolean }>`
  color: ${(props) => (props.isComplete ? "grey" : "black")};
`;

const Todo = ({ name, id, isComplete, dispatch }: any) => {
  return (
    <Container>
      <Text isComplete={isComplete}>{name}</Text>
      <Button
        onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id } })}
        color="red"
      >
        Delete
      </Button>
      <Button
        onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id } })}
        color="green"
      >
        Toggle
      </Button>
    </Container>
  );
};

export default Todo;
