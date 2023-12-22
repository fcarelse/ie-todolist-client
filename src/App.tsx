import React from "react";
import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import { AboutPage } from "./pages/About/AboutPage";
import { LoginPage } from "./pages/Login/LoginPage";
import { TodolistPage } from "./pages/Todolist/TodolistPage";
import { NavbarComp } from "./components/Navbar/NavbarComp";
import { Navigation } from "./components/Navigation/NavigationComp";
import "./App.css";

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
            <Route path="" element={<Navigate to="/about" />} />
          </Route>
        </Routes>
      </Navigation>
    </BrowserRouter>
  );
}

export default App;
