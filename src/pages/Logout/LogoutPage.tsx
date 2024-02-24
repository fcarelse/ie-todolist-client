import { useEffect } from "react";
import { getToken, setToken } from "../../store/Token/TokenStore";
import { Navigate } from "react-router-dom";
import { TOKEN_BLANK } from "../../helper/Constants/Constants";

export const LogoutPage = ({}) => {
  const token = getToken();
  useEffect(() => {
    setToken(TOKEN_BLANK);
  }, [token]);

  return <Navigate to="/" />;
};
