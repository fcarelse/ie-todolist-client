import { useState } from "react";
import { fetchData } from "../../helper/Fetch/FetchHelper";
import { ErrorResponse } from "../../helper/Fetch/FetchHelper.types";
import { Credentials, LoginHandlerType } from "./useAuthService.types";

export const useAuthService = () => {
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [error, setError] = useState<ErrorResponse>({ error: 0, message: "" });

  const login: LoginHandlerType = async (credentials: Credentials) => {
    try {
      // setIsLoading(true);
      const resData = await fetchData({
        url: "/api/user/login",
        data: credentials,
        method: "post",
        token: "",
      });
      // setIsLoading(false);
      setToken(resData.token);
      console.log(`Token: ${resData.token}`);
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

  const logout = async (manualToken?: string) => {
    try {
      setIsLoading(true);
      const resData = await fetchData({
        url: "/api/user/logout",
        data: { token: manualToken || token },
        method: "post",
        token: manualToken || token || "",
      });
      setIsLoading(false);
      return resData instanceof Object ? !!resData.success : false;
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

  return { login, logout, token, setToken, isLoading, error };
};
