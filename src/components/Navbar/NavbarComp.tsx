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

const navItems = {
  guest: [
    { label: "About", target: "/about", tag: "about" },
    { label: "LogIn", target: "/login", tag: "login" },
    { label: "Logout", target: "/logout", tag: "logout" },
  ],
  user: [
    { label: "Todolist", target: "/todolist", tag: "todolist" },
    { label: "About", target: "/about", tag: "about" },
    { label: "Logout", target: "/logout", tag: "logout" },
  ],
};

export const NavbarComp = () => {
  const { navigate } = useNavigateContext();
  const { token, isLoading } = useAuthService();

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
          <NavOptions />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
