import { useEffect } from "react";
import { getTodoList, setTodos } from "../../store/TodoList/TodoListStore";
import { URLS } from "../../helper/Constants/Constants";
import { fetchData } from "../../helper/Fetch/FetchHelper";
import { TodoType } from "../../types/Todo/TodoType";
import { TodoComp } from "../Todo/TodoComp";
import { TodoListMethods } from "../../types/TodoList/TodoListType";

export const TodoListComp = ({
  list,
  append,
  remove,
  update,
}: TodoListMethods) => {
  const todolist = getTodoList();
  useEffect(() => {
    (async () => {
      try {
        const todos = await fetchData({ url: URLS.todos });
        setTodos(todos as Array<TodoType>);
      } catch (error) {}
    })();
  }, []);

  return (
    <div>
      TodoList Component ({todolist.name || "&lt;No Name&gt;"})
      <ul>
        {todolist.todos.map((todo, index) => (
          <TodoComp
            {...{
              append: () => append(index),
              remove: () => remove(index),
              update: (newTodo: TodoType) => update(index, newTodo),
              todo,
            }}
          ></TodoComp>
        ))}
      </ul>
    </div>
  );
};
