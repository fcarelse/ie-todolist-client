import React from 'react';
import {
  BrowserRouter,
  Routes,
  Navigate,
  Route
} from 'react-router-dom'
import { AboutPage } from './pages/About/AboutPage.tsx';
import { LoginPage } from './pages/Login/LoginPage.tsx';
import { TodolistPage } from './pages/Todolist/TodolistPage.tsx';
import { NavbarComp } from './components/Navbar/NavbarComp.tsx';


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
