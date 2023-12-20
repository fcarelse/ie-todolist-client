import React from "react";
import { LoginHandler, AuthContextData, Credentials } from "../../helper/Types";

export const AuthContext = React.createContext({
  token: "",
  login: async ({username,password}:Credentials)=>({token: ''}),
});

export const useAuthContext = ():AuthContextData => React.useContext(AuthContext);
