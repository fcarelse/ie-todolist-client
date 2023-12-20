import { useState } from "react";
import { fetchData } from "../../helper/Fetch/FetchHelper";
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
      const data: { token: string } = await fetchData({
        url: "/user/login",
        data: { username, password },
        method: "post",
        token: "",
      });
      setToken(data.token);
      return data;
    } catch (e) {
      console.log("could not login");
    }
    return { token: "" };
  };

  return { login, token };
};
