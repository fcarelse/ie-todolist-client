import React from "react";
import { AuthContextValue, Credentials } from "../../helper/Types";

export const AuthContext = React.createContext({
  token: "",
});

export const useAuthContext = (): AuthContextValue =>
  React.useContext(AuthContext);
