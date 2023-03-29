import { KeyboardEvent, useState } from "react";
import styled from "styled-components";
import { ACTIONS } from "../reducers/todosReducer";

const StyledInput = styled.input`
  width: 300px;
  padding: 15px;
`;

const SubmitButton = styled.button``;

const Input = (props: any) => {
  const [name, setName] = useState<string>("");
  const { dispatch } = props;

  const handleSubmit = () => {
    setName("");
    dispatch({
      type: ACTIONS.ADD_TODO,
      payload: { name },
    });
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLElement>) =>
    e.key === "Enter" && handleSubmit();

  return (
    <>
      <StyledInput
        placeholder="What's your todo?"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <SubmitButton disabled={!name} onClick={handleSubmit}>
        Add
      </SubmitButton>
    </>
  );
};

export default Input;
