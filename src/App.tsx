import { useReducer } from "react";
import "./App.css";
import Input from "./components/Input";
import { reducer } from "./reducers/todosReducer";

const App = () => {
  const [todos, dispatch] = useReducer(reducer, []);

  return (
    <div className="App">
      <Input dispatch={dispatch}/>
      {todos && todos.map((todo, index) => (
        <div key={index}>{todo}</div>
      ))}
    </div>
  );
};

export default App;
