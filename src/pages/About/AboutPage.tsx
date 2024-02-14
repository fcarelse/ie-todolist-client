import { useState } from "react";
import { getToken } from "../../helper/Fetch/FetchHelper";
import Button from "@mui/material/Button";

export const AboutPage = ({}) => {
  const [message, setMessage] = useState("");

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
      <p>Token: {getToken()}</p>
    </div>
  );
};
