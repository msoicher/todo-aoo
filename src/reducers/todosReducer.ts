import { getUniqueId } from "../components/Todo/helpers";
import { TodoType } from "../components/Todo/types";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  DELETE_TODO: "delete-todo",
  TOGGLE_TODO: "toggle-todo",
};

type valueof<T> = T[keyof T];

export type ActionType = {
  type: valueof<typeof ACTIONS>;
  payload: string;
};

export type DispatchType = { dispatch: React.Dispatch<ActionType> };

export const todosReducer = (todos: TodoType[] = [], action: ActionType) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload)];
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo: TodoType) => todo.id !== action.payload);
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo: TodoType) =>
        todo.id === action.payload
          ? {
              ...todo,
              isComplete: !todo.isComplete,
            }
          : todo
      );
    default:
      return todos;
  }
};

export const newTodo = (name: string): TodoType => ({
  name,
  isComplete: false,
  id: getUniqueId(),
});
