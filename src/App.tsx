import React from "react";
import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import { AboutPage } from "./pages/About/AboutPage";
import { LoginPage } from "./pages/Login/LoginPage";
import { LogoutPage } from "./pages/Logout/LogoutPage";
import { TodolistPage } from "./pages/Todolist/TodolistPage";
import { NavbarComp } from "./components/Navbar/NavbarComp";
import { Navigation } from "./components/Navigation/NavigationComp";
import "./App.css";
import { useAuthService } from "./service/Auth/useAuthService";

function App() {
  return (
    <BrowserRouter>
      <Navigation>
        <NavbarComp />
        <Routes>
          <Route path="/">
            <Route path="about" element={<AboutPage />} />
            <Route path="todolist" element={<TodolistPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="logout" element={<LogoutPage />} />
            <Route path="" element={<Navigate to="/about" />} />
          </Route>
        </Routes>
      </Navigation>
    </BrowserRouter>
  );
}

export default App;
