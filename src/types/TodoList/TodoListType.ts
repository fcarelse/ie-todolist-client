import { TodoType } from "../Todo/TodoType";

export type TodoListType = {
  name?: string;
  todos: Array<TodoType>;
};

export type TodoListMethods = {
  list: Function;
  append: Function;
  remove: Function;
  update: Function;
};
