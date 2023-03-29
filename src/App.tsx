import { useReducer } from "react";
import "./App.css";
import Input from "./components/Input";
import Todo from "./components/Todo/Todo";
import { TodoType } from "./components/Todo/types";
import { reducer } from "./reducers/todosReducer";

const App = () => {
  const [todos, dispatch] = useReducer(reducer, []);

  return (
    <div className="App">
      <Input dispatch={dispatch} />
      {todos &&
        todos.map((todo: TodoType) => (
          <Todo key={todo.id} dispatch={dispatch} {...todo} />
        ))}
    </div>
  );
};

export default App;
