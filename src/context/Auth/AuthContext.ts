import React from "react";

export const AuthContext = React.createContext({
  token: "",
  login: () => {},
});

export const useAuthContext = () => React.useContext(AuthContext);
