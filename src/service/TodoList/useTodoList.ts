import { URLS } from "../../helper/Constants/Constants";
import { fetchData } from "../../helper/Fetch/FetchHelper";
import {
  getTodoList,
  setTodoList,
  setTodos,
} from "../../store/TodoList/TodoListStore";
import { TodoType } from "../../types/Todo/TodoType";
import { createId } from "@paralleldrive/cuid2";

const newTodo = () => ({ id: createId() } as TodoType);

export const useTodoList = () => {
  const list = async () => {
    try {
      const todos = await fetchData({ url: URLS.todos, method: "get" });
      setTodos(todos);
    } catch (error) {}

    return getTodoList();
  };

  const append = async (index: number) => {
    const { todos } = await list();
    todos.splice(index || 0, 0, newTodo());
    setTodoList({ ...getTodoList(), todos });
  };
  const remove = async (index: number) => {
    const { todos } = await list();
    todos.splice(index || 0, 1);
    setTodoList({ ...getTodoList(), todos });
  };
  const update = async (index: number, updatedTodo: TodoType) => {
    const { todos } = await list();
    if (todos[index] === undefined) return;
    Object.assign(todos[index], updatedTodo, { id: todos[index].id });
    setTodos(todos);
  };
  return { list, append, remove, update };
};
