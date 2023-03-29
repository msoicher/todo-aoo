import { getUniqueId } from "../components/Todo/helpers";
import { TodoType } from "../components/Todo/types";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  DELETE_TODO: "delete-todo",
  TOGGLE_TODO: "toggle-todo",
};

export const reducer = (todos: any, action: any) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo: TodoType) => todo.id !== action.payload.id);
    case ACTIONS.TOGGLE_TODO:
      return todos.map(
        (todo: TodoType) =>
          todo.id === action.payload.id && {
            ...todo,
            isComplete: !todo.isComplete,
          }
      );

    default:
      return todos;
  }
};

export const newTodo = (name: string) => ({
  name,
  isComplete: false,
  id: getUniqueId(),
});
