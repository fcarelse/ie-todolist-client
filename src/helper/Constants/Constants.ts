export const TOKEN_BLANK = "";
export const STORE_TOKEN_ID = "token";
export const STORE_THEME_ID = "theme";

export enum URLS {
  login = "/api/user/login",
  logout = "/api/user/logout",
  loggedIn = "/api/user/loggedIn",
  hello = "/api/rest/hello",
  todo = "api/rest/todo",
  todos = "/api/rest/todos",
  todolist = "/api/rest/todolist",
}

export enum THEMES {
  dark = "dark",
  light = "light",
  default = "light",
}

export const TODO_STATUSES = [
  { tag: "todo", label: "To do" },
  { tag: "done", label: "Done" },
];

export const TODO_STATUSES_TAGS = TODO_STATUSES.map((s) => s.tag);
