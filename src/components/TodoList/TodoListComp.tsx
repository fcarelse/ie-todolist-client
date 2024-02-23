import { TodoType } from "../../types/Todo/TodoType";
import { TodoComp } from "../Todo/TodoComp";
import { TodoListProps } from "../../types/TodoList/TodoListType";
import { Button } from "@mui/material";
import { PlusOne, Refresh } from "@mui/icons-material";

export const TodoListComp = ({
  todos,
  list,
  append,
  remove,
  update,
}: TodoListProps) => {
  return (
    <div>
      TodoList Component ({" "}
      <Button onClick={() => append()}>
        <PlusOne />
      </Button>
      <Button onClick={() => list()}>
        <Refresh />
      </Button>
      )
      {todos.map((todo, index) => (
        <div key={index}>
          <TodoComp
            {...{
              list: () => list(),
              append: () => append(index),
              remove: () => remove(index),
              update: (newTodo: TodoType) => update(newTodo),
              todo,
            }}
          ></TodoComp>
        </div>
      ))}
    </div>
  );
};
