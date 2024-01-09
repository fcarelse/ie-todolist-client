import React, { useState } from "react";
import { fetchData } from "../../helper/Fetch/FetchHelper";
import Button from "@mui/material/Button";
import { useAuthService } from "../../service/Auth/useAuthService";

export const AboutPage = ({}) => {
  const [message, setMessage] = useState("");
  const { token } = useAuthService();

  const getHello = async () => {
    const res = await fetch("/api/rest/hello");
    res.text().then(setMessage);
  };

  return (
    <div>
      <h3>About Page</h3>
      <Button onClick={getHello}>Hello</Button>
      <Button onClick={() => setMessage("")}>Bye</Button>
      <p>Message: {message}</p>
      {!token ? "" : <p>Token: {token}</p>}
    </div>
  );
};
