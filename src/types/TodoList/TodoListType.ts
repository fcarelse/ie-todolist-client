import { TodoType } from "../Todo/TodoType";

export type TodoListType = {
  name?: string;
  todos: Array<TodoType>;
};

export type TodoListProps = {
  todolist: TodoListType;
  list: Function;
  change: Function;
  append: Function;
  remove: Function;
  update: Function;
};
