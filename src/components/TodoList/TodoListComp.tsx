import { TodoType } from "../../types/Todo/TodoType";
import { TodoComp } from "../Todo/TodoComp";
import { TodoListType, TodoListProps } from "../../types/TodoList/TodoListType";

export const TodoListComp = ({
  todolist,
  change,
  append,
  remove,
  update,
}: TodoListProps) => {
  const todos = todolist.todos instanceof Array ? todolist.todos : [];

  return (
    <div>
      TodoList Component (
      {todolist.name || <span style={{ color: "red" }}>{"<No Name>"}</span>})
      {todos.map((todo, index) => (
        <div>
          <TodoComp
            {...{
              append: () => append(index),
              remove: () => remove(index),
              update: (newTodo: TodoType) => update(index, newTodo),
              change: (field: keyof TodoType, value: string) =>
                change(index, field, value),
              todo,
            }}
          ></TodoComp>
        </div>
      ))}
    </div>
  );
};
