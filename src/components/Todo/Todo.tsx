import styled from "styled-components";
import { ACTIONS } from "../../reducers/todosReducer";

const Button = styled.button<{ color: string; isComplete: boolean }>`
  color: ${(props) => props.color};
  textColor: ${(props) => (props.isComplete ? "grey" : "black")}
  margin: 0 1rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Todo = ({ name, id, isComplete, dispatch }: any) => {
  return (
    <Container>
      <div>{name}</div>
      <Button
        onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id } })}
        color="red"
        isComplete={isComplete}
      >
        Delete
      </Button>
    </Container>
  );
};

export default Todo;
