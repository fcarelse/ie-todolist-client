import React, { FC, PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import { NavigateContext } from "../../context/Navigate/NavigateContext";

export const Navigation: FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();

  return (
    <NavigateContext.Provider value={{ navigate }}>
      {children}
    </NavigateContext.Provider>
  );
};
