import { useState } from "react";
import styled from "styled-components";
import { ACTIONS, newTodo } from "../reducers/todosReducer";

const StyledInput = styled.input`
  width: 300px;
`;

const SubmitButton = styled.button``;

const Input = (props: any) => {
  const [name, setName] = useState<string>("");
  const { dispatch } = props;

  const handleSubmit = () => {
    setName("");
    dispatch({
      type: ACTIONS.ADD_TODO,
      payload: newTodo({ name }),
    });
  };

  return (
    <>
      <StyledInput
        placeholder="What's your todo?"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <SubmitButton disabled={!name} onClick={handleSubmit}>
        Add
      </SubmitButton>
    </>
  );
};

export default Input;
