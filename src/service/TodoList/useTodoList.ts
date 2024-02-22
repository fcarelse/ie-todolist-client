import { useEffect, useState } from "react";
import { URLS } from "../../helper/Constants/Constants";
import { fetchData } from "../../helper/Fetch/FetchHelper";
import {
  restoreTodoList,
  storeTodoList,
} from "../../store/TodoList/TodoListStore";
import { TodoType } from "../../types/Todo/TodoType";
import { createId } from "@paralleldrive/cuid2";
import { TodoListProps, TodoListType } from "../../types/TodoList/TodoListType";

const newTodo = () => ({ id: createId() } as TodoType);

export const useTodoList: () => TodoListProps = () => {
  const [todolist, setTodoListState] = useState<TodoListType>({
    todos: [],
  });

  useEffect(() => {
    (async () => {
      try {
        let todos: Array<TodoType> = await fetchData({ url: URLS.todos });
        if (!(todos instanceof Array)) todos = [] as Array<TodoType>;
        updateTodos(todos);
      } catch (error) {}
    })();
  }, []);

  const updateTodos = (todos: Array<TodoType>) => {
    setTodoListState({ ...todolist, todos });
    storeTodoList({ ...todolist, todos });
  };

  const list = async () => {
    try {
      // const todos = await fetchData({ url: URLS.todos, method: "get" });
      const { todos } = await restoreTodoList();
      updateTodos(todos);
    } catch (error) {}

    return restoreTodoList();
  };

  const change = async (
    index: number,
    field: keyof TodoType,
    value: string
  ) => {
    const { todos } = await list();
    if (todos[index] === undefined) return;
    const changedTodo = { ...todos[index], [field]: value };
    Object.assign(todos[index], changedTodo, { id: todos[index].id });
    updateTodos(todos);
  };

  const append = async (index: number) => {
    const { todos } = await list();
    todos.splice(index || 0, 0, newTodo());
    updateTodos(todos);
  };

  const remove = async (index: number) => {
    const { todos } = await list();
    todos.splice(index || 0, 1);
    updateTodos(todos);
  };

  const update = async (index: number, updatedTodo: TodoType) => {
    const { todos } = await list();
    if (todos[index] === undefined) return;
    Object.assign(todos[index], updatedTodo, { id: todos[index].id });
    updateTodos(todos);
  };

  return { todolist, list, change, append, remove, update };
};
