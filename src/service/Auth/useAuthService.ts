import { useState } from "react";
import { fetchData, getToken, setToken } from "../../helper/Fetch/FetchHelper";
import { ErrorResponse } from "../../helper/Fetch/FetchHelper.types";
import { Credentials, LoginHandlerType } from "./useAuthService.types";
import { useNavigate } from "react-router-dom";
import { URL_LOGIN, URL_LOGOUT } from "../../helper/Constants/Constants";

export const useAuthService = () => {
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [error, setError] = useState<ErrorResponse>({ error: 0, message: "" });
  const navigate = useNavigate();

  const login: LoginHandlerType = async (credentials: Credentials) => {
    try {
      // setIsLoading(true);
      const resData = await fetchData({
        url: URL_LOGIN,
        data: credentials,
        method: "post",
        token: getToken(),
      });
      // setIsLoading(false);
      setToken(resData.token);
      console.log(`Token: ${resData.token}`);
      navigate("/");
      return true;
    } catch (e: any) {
      setIsLoading(false);
      setError({
        error: e?.status || 500,
        message: e?.message || "Login Error",
      });
      console.log(e?.message);
      console.log("could not login");
    }
    return false;
  };

  const logout = async () => {
    try {
      setIsLoading(true);
      const resData = await fetchData({
        url: URL_LOGOUT,
        data: { token: getToken() },
        method: "post",
        token: getToken(),
      });
      setIsLoading(false);
      const success = resData instanceof Object ? !!resData.success : false;
      if (success) setToken("");
      navigate("/");
      return success;
    } catch (e: any) {
      setIsLoading(false);
      setError({
        error: e?.status || 500,
        message: e?.message || "Logout Error",
      });
      console.log(e?.message);
      console.log("could not logout");
      return false;
    }
  };

  return { login, logout, isLoading, error };
};
