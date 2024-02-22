import { URLS } from "../../helper/Constants/Constants";
import { fetchData } from "../../helper/Fetch/FetchHelper";
import { TodoType } from "../../types/Todo/TodoType";

export const crudTodoList = {
  async list() {
    try {
      const res = await fetchData({ url: URLS.todos, method: "get" });
      if (res.error) return false;
      return true;
    } catch (error) {
      return false;
    }
  },

  async create(todo: TodoType) {
    try {
      const res = await fetchData({ url: URLS.todos, method: "post" });
      if (res.error) return false;
      return true;
    } catch (error) {
      return false;
    }
  },

  async read(id: string) {
    try {
      const res = await fetchData({
        url: URLS.todos + `/${id}`,
        method: "post",
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
        method: "post",
        data: todo,
      });
      if (res.error) return false;
      return true;
    } catch (error) {
      return false;
    }
  },

  async delete(id: string) {
    try {
      const res = await fetchData({
        url: URLS.todos + `/${id}`,
        method: "post",
      });
      if (res.error) return false;
      return true;
    } catch (error) {
      return false;
    }
  },
};
