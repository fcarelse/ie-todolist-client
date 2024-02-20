import { STORE_TODOLIST_ID } from "../../helper/Constants/Constants";
import { jsonToObject, objectToJson } from "../../helper/Convert/ConvertHelper";
import { TodoType } from "../../types/Todo/TodoType";
import { TodoListType } from "../../types/TodoList/TodoListType";

export const getTodoList: () => TodoListType = () =>
  (jsonToObject(localStorage.getItem(STORE_TODOLIST_ID) || "") ||
    {}) as TodoListType;

export const setTodoList = (newTodoList: TodoListType) =>
  localStorage.setItem(STORE_TODOLIST_ID, objectToJson(newTodoList));

export const setTodos = (todos: Array<TodoType>) => {
  setTodoList({
    ...getTodoList(),
    todos: [...todos.map((todo) => ({ ...todo }))],
  });
};
