import { useTodoList } from "../../service/TodoList/useTodoList";
import { TodoListComp } from "../../components/TodoList/TodoListComp";

export const TodolistPage = () => {
  const { todolist, list, change, append, remove, update } = useTodoList();

  return (
    <TodoListComp
      {...{ todolist, list, change, append, remove, update }}
    ></TodoListComp>
  );
};
