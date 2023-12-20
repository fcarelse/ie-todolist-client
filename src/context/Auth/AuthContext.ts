import React from "react";
import {
  LoginHandler,
  AuthContextValue,
  Credentials,
} from "../../helper/Types";

export const AuthContext = React.createContext({
  token: "",
  login: async ({ username, password }: Credentials) => ({ token: "" }),
});

export const useAuthContext = (): AuthContextValue =>
  React.useContext(AuthContext);
