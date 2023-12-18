import React from 'react';
import {
  BrowserRouter,
  Routes,
  Navigate,
  Route
} from 'react-router-dom'
import { AboutPage } from './pages/About/AboutPage';
import { LoginPage } from './pages/Login/LoginPage';
import { TodolistPage } from './pages/Todolist/TodolistPage';
import { NavbarComp } from './components/Navbar/NavbarComp';


function App() {
  return (
    <div>
      <NavbarComp />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="about" element={<AboutPage/>} />
            <Route path="todolist" element={<TodolistPage/>} />
            <Route path="login" element={<LoginPage/>} />
            <Route path="" element={<Navigate to='/about' />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
