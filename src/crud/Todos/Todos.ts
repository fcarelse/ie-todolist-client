import { URLS } from "../../helper/Constants/Constants";
import { fetchData } from "../../helper/Fetch/FetchHelper";
import { TodoType } from "../../types/Todo/TodoType";

export const crudTodos = {
  async list() {
    try {
      const res = await fetchData({ url: URLS.todos, method: "get" });
      if (res.error) return false;
      return true;
    } catch (error) {
      return false;
    }
  },

  async create() {
    try {
      const todo = await fetchData({
        url: URLS.todos,
        method: "post",
      });
      return todo;
    } catch (error) {
      return null;
    }
  },

  async read(id: string) {
    try {
      const res = await fetchData({
        url: URLS.todos + `/${id}`,
        method: "get",
      });
      if (res.error) return false;
      return true;
    } catch (error) {
      return false;
    }
  },

  async update(todo: TodoType) {
    try {
      const res = await fetchData({
        url: URLS.todos + `/${todo.id}`,
        method: "put",
        data: todo,
      });
      return res;
    } catch (error) {
      return { error: 599 };
    }
  },

  async delete(id: string) {
    try {
      const res = await fetchData({
        url: URLS.todos + `/${id}`,
        method: "delete",
      });
      if (res.error) return false;
      return true;
    } catch (error) {
      return false;
    }
  },
};
