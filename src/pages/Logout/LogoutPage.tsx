import { MouseEvent, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import { defaultTheme } from "../../themes/Default/DefaultTheme";
import { Copyright } from "../../components/Copyright/CopyrightComp";
import { useAuthService } from "../../service/Auth/useAuthService";
import { getToken, setToken } from "../../helper/Fetch/FetchHelper";
import { Navigate } from "react-router-dom";
import { TOKEN_BLANK } from "../../helper/Constants/Constants";

export const LogoutPage = ({}) => {
  const token = getToken();
  useEffect(() => {
    setToken(TOKEN_BLANK);
  }, [token]);

  return <Navigate to="/" />;
};
