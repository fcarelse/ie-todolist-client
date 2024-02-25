import { TodoType } from "../Todo/TodoType";

export type TodoListProps = {
  todos: Array<TodoType>;
  list: Function;
  append: Function;
  remove: Function;
  update: Function;
};
