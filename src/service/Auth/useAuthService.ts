import { useState } from "react";
import { FetchError, fetchData } from "../../helper/Fetch/FetchHelper";
import { ErrorResponse, LoginHandler } from "../../helper/Types";

export type Credentials = {
  username: string;
  password: string;
};

export const useAuthService = () => {
  const [token, setToken] = useState<string>("");
  const [loading, setLoading] = useState<Boolean>(false);
  const [error, setError] = useState<ErrorResponse>({ error: 0, message: "" });

  const login: LoginHandler = async ({ username, password }: Credentials) => {
    try {
      setLoading(true);
      const data: { token: string } = await fetchData({
        url: "/user/login",
        data: { username, password },
        method: "post",
        token: "",
      });
      setLoading(false);
      setToken(data.token);
      return data;
    } catch (e: any) {
      setLoading(false);
      if (e instanceof FetchError) {
        setError({
          error: e.status,
          message: e?.message || "Login Error",
        });
      } else if (e instanceof Error) {
        setError({
          error: 500,
          message: e?.message || "Login Error",
        });
      } else {
        setError({ error: 500, message: "Login Error" });
      }
      console.log("could not login");
    }
    return { token: "" };
  };

  return { login, token, loading, error };
};
