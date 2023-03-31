import { KeyboardEvent, useState } from "react";
import { ACTIONS } from "../reducers/todosReducer";
import { PrimaryButton } from "./ui/Button";
import { Input as InputField } from "./ui/Input";

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

  const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => e.key === "Enter" && handleSubmit();

  return (
    <>
      <InputField
        placeholder="What's your todo?"
        value={name}
        onChange={(e: any) => setName(e.target.value)}
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
