import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import { AboutPage } from "./pages/About/AboutPage";
import { LoginPage } from "./pages/Login/LoginPage";
import { LogoutPage } from "./pages/Logout/LogoutPage";
import { TodolistPage } from "./pages/Todolist/TodolistPage";
import { NavbarComp } from "./components/Navbar/NavbarComp";
import { Navigation } from "./components/Navigation/NavigationComp";
import { Box, ThemeProvider } from "@mui/material";
import { THEMES, getTheme } from "./themes/Current/CurrentTheme";
import "./App.css";

function App() {
  const theme = getTheme();

  return (
    <ThemeProvider theme={THEMES[theme]}>
      <BrowserRouter>
        <Navigation>
          <NavbarComp />
          <Box sx={{ margin: "80px auto", maxWidth: "800px" }}>
            <Routes>
              <Route path="/">
                <Route path="about" element={<AboutPage />} />
                <Route path="todolist" element={<TodolistPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="logout" element={<LogoutPage />} />
                <Route path="" element={<Navigate to="/about" />} />
              </Route>
            </Routes>
          </Box>
        </Navigation>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
