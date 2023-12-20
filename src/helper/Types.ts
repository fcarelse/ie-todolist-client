export type FetchMethods = "post" | "get" | "put" | "delete";

export type TokenSetter = (token: string) => {};

export type Credentials = {username: string, password: string};

export type LoginHandler = ({username, password}:Credentials) => Promise<{token: string}>

export type AuthContextData = { token: string, login: LoginHandler}
