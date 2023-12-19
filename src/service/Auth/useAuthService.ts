import { useState } from "react";
import { fetchData } from "../../helper/Fetch/FetchHelper";

export type Credentials = {
  username: string;
  password: string;
};

export const useAuthService = () => {
  const [token, setToken] = useState("");

  const login = async ({ username, password }: Credentials) => {
    try {
      const data: { token: string } = await fetchData(
        "",
        { username, password },
        "post",
        ""
      );
      setToken(data.token);
      return data;
    } catch (e) {
      console.log("could not login");
    }
  };

  return { login, token };
};
