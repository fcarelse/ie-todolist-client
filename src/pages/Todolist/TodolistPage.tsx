import { useEffect, useState } from "react";
import { URLS } from "../../helper/Constants/Constants";
import { fetchData } from "../../helper/Fetch/FetchHelper";

export const TodolistPage = () => {
  const [todos, setTodos] = useState<Array<Record<string, any>>>([]);
  useEffect(() => {
    (async () => {
      const newTodos = await fetchData({ url: URLS.todos });
      if (newTodos && newTodos instanceof Array) setTodos(newTodos);
    })();
  }, []);

  return (
    <div>
      <h3>Todolist Page</h3>
      <table>
        <tr>
          <th>id</th>
          <th>summary</th>
          <th>details</th>
        </tr>
        {todos.map((todo: any) => (
          <tr>
            <td>{todo.id}</td>
            <td>{todo.summary}</td>
            <td>{todo.details}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
