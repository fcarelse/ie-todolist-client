import { useTodoList } from "../../service/TodoList/useTodoList";
import { TodoListComp } from "../../components/TodoList/TodoListComp";

export const TodolistPage = () => {
  const { todos, list, append, remove, update } = useTodoList();

  return (
    <TodoListComp {...{ todos, list, append, remove, update }}></TodoListComp>
  );
};
