import React from "react";
import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import { AboutPage } from "./pages/About/AboutPage";
import { LoginPage } from "./pages/Login/LoginPage";
import { TodolistPage } from "./pages/Todolist/TodolistPage";
import { NavbarComp } from "./components/Navbar/NavbarComp";
import { AuthContext } from "./context/Auth/AuthContext";
import { AuthService, useAuthService } from "./service/Auth/useAuthService";

function App() {
  const { token, login } = useAuthService();
  return (
    <AuthContext.Provider value={{ token, login }}>
      <BrowserRouter>
        <NavbarComp />
        <Routes>
          <Route path="/">
            <Route path="about" element={<AboutPage />} />
            <Route path="todolist" element={<TodolistPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="" element={<Navigate to="/about" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
