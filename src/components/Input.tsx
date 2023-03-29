import { useState } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 300px;
`;

const SubmitButton = styled.button``;

const Input = (props: any) => {
  const [input, setInput] = useState("");
  const { dispatch } = props;

  const handleSubmit = () => {
    setInput('')
    dispatch({ type: 'TODO_ADDED', payload: input })
  }

  return (
    <>
      <StyledInput
        placeholder="What's your todo?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <SubmitButton disabled={!input} onClick={handleSubmit}>Add</SubmitButton>
    </>
  );
};

export default Input;
