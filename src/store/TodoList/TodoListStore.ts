import { STORE_TODOLIST_ID } from "../../helper/Constants/Constants";
import { jsonToObject, objectToJson } from "../../helper/Convert/ConvertHelper";
import { TodoListType } from "../../types/TodoList/TodoListType";

export const restoreTodoList: () => TodoListType = () =>
  (jsonToObject(localStorage.getItem(STORE_TODOLIST_ID) || "") ||
    {}) as TodoListType;

export const storeTodoList = (newTodoList: TodoListType) =>
  localStorage.setItem(STORE_TODOLIST_ID, objectToJson(newTodoList));
