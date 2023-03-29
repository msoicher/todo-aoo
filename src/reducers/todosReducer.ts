import { getUniqueId } from "../components/Todo/helpers";
import { TodoType } from "../components/Todo/types";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  DELETE_TODO: "delete-todo",
};

export const reducer = (todos: any, action: any) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, action.payload];
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo: TodoType) => todo.id !== action.payload.id)
    default:
      return todos;
  }
};

export const newTodo = ({ name }: Pick<TodoType, "name">) => ({
  name,
  isComplete: false,
  id: getUniqueId(),
});
