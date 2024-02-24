import { useEffect, useState } from "react";
import {
  TODO_STATUSES,
  TODO_STATUSES_TAGS,
  URLS,
} from "../../helper/Constants/Constants";
import { fetchData } from "../../helper/Fetch/FetchHelper";
import { TodoType } from "../../types/Todo/TodoType";
import { TodoListProps } from "../../types/TodoList/TodoListType";
import { crudTodos } from "../../crud/Todos/Todos";

export const useTodoList: () => TodoListProps = () => {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  useEffect(() => {
    list();
  }, []);

  const list = async () => {
    try {
      const resTodos = (await fetchData({
        url: URLS.todos,
        method: "get",
      })) as Array<TodoType>;
      // const { todos } = await restoreTodoList();
      const nextTodos = [
        ...resTodos.map((todo, index) => ({ ...todo, index } as TodoType)),
      ] as Array<TodoType>;
      setTodos(nextTodos);
      console.log({ nextTodos });
      return nextTodos;
    } catch (error) {
      return todos;
    }
  };

  const append = async () => {
    await crudTodos.create();
    list();
  };

  const remove = async (index: number) => {
    if (todos[index] === undefined) return;
    await crudTodos.delete(todos[index].id);
    list();
  };

  const update = async (updatedTodo: TodoType) => {
    await crudTodos.update(updatedTodo);
    const newTodos = todos.map((todo, index) =>
      index === updatedTodo.index ? { ...todo, ...updatedTodo } : { ...todo }
    );
    setTodos(newTodos);
  };

  return { todos, list, append, remove, update };
};
