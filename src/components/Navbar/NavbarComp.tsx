import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Auth/AuthContext";

const navItems = {
  guest: [
    { label: "About", target: "/about", tag: "about" },
    { label: "LogIn", target: "/login", tag: "login" },
  ],
  user: [
    { label: "Todolist", target: "/todolist", tag: "todolist" },
    { label: "About", target: "/about", tag: "about" },
    { label: "Logout", target: "/logout", tag: "logout" },
  ],
};

export const NavbarComp = () => {
  const navigate = useNavigate();
  const token = React.useContext(AuthContext);

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
          </Typography>
          <NavOptions />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
