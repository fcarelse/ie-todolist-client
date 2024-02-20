import { useEffect, useState } from "react";
import { URLS } from "../../helper/Constants/Constants";
import { fetchData } from "../../helper/Fetch/FetchHelper";
import { useTodoList } from "../../service/TodoList/useTodoList";
import { TodoListComp } from "../../components/TodoList/TodoListComp";

export const TodolistPage = () => {
  const { list, append, remove, update } = useTodoList();

  return <TodoListComp {...{ list, append, remove, update }}></TodoListComp>;
};
