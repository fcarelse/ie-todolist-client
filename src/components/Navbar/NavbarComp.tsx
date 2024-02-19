import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useAuthService } from "../../service/Auth/useAuthService";
import { useNavigateContext } from "../../context/Navigate/NavigateContext";
import { getToken } from "../../helper/Fetch/FetchHelper";
import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { getTheme, setTheme } from "../../themes/Current/CurrentTheme";

const navItems = {
  guest: [
    { label: "About", target: "/about", tag: "about" },
    { label: "LogIn", target: "/login", tag: "login" },
  ],
  user: [
    { label: "Todolist", target: "/todolist", tag: "todolist" },
    { label: "About", target: "/about", tag: "about" },
    { label: "LogOut", target: "/logout", tag: "logout" },
  ],
};

export const NavbarComp = () => {
  const { navigate } = useNavigateContext();
  const { isLoading } = useAuthService();
  const token = getToken();
  const theme = getTheme();

  const NavOptions = React.useMemo(
    () => () =>
      (
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {navItems[!token ? "guest" : "user"].map(({ target, tag, label }) => (
            <Link key={tag} to={target}>
              <Button sx={{ color: "#fff" }}>{label}</Button>
            </Link>
          ))}
        </Box>
      ),
    [token]
  );

  const toggleMode = () => {
    if (theme === "dark") setTheme("light");
    if (theme === "light") setTheme("dark");
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <span onClick={() => navigate("/")}>Todolist IE</span>
            {isLoading ? "Loading..." : ""}
          </Typography>
          <Box>
            <IconButton sx={{ ml: 1 }} onClick={toggleMode} color="inherit">
              {theme.palette.mode === "dark" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
          </Box>
          <NavOptions />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
