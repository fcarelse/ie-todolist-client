import React, { createContext, useContext } from "react";
import { NavigateContextValue } from "./NavigateContext.types";

export const NavigateContext = createContext<NavigateContextValue>({
  navigate: (location) => {},
});

export const useNavigateContext = () => useContext(NavigateContext);
