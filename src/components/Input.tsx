import React from "react";
import { KeyboardEvent, useState } from "react";
import { ACTIONS, ActionType } from "../reducers/todosReducer";
import { PrimaryButton } from "./ui/Button";
import { Input as InputField } from "./ui/Input";

export type Dispatch = { dispatch: React.Dispatch<ActionType> }

const Input = ({ dispatch }: Dispatch) => {
  const [name, setName] = useState<string>("");

  const handleSubmit = () => {
    setName("");
    dispatch({
      type: ACTIONS.ADD_TODO,
      payload: name,
    });
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => e.key === "Enter" && handleSubmit();

  return (
    <>
      <InputField
        placeholder="What's your todo?"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      &nbsp;
      <PrimaryButton disabled={!name} onClick={handleSubmit}>
        Add
      </PrimaryButton>
    </>
  );
};

export default Input;
