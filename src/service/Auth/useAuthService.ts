import { useState } from "react";
import { fetchData } from "../../helper/Fetch/FetchHelper";
import { ErrorResponse } from "../../helper/Fetch/FetchHelper.types";
import { LoginHandlerType } from "./useAuthService.types";

export type Credentials = {
  username: string;
  password: string;
};

export const useAuthService = () => {
  const [token, setToken] = useState<string>("");
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [error, setError] = useState<ErrorResponse>({ error: 0, message: "" });

  const login: LoginHandlerType = async ({
    username,
    password,
  }: Credentials) => {
    try {
      setIsLoading(true);
      const data: { token: string } = await fetchData({
        url: "/user/login",
        data: { username, password },
        method: "post",
        token: "",
      });
      setIsLoading(false);
      setToken(data.token);
      return data;
    } catch (e: any) {
      setIsLoading(false);
      setError({
        error: e?.status || 500,
        message: e?.message || "Login Error",
      });
      console.log("could not login");
    }
    return { token: "" };
  };

  return { login, token, isLoading, error };
};
