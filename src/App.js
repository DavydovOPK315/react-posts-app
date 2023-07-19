import React from 'react';
import './styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Posts from './pages/Posts';
import About from './pages/About';
import Error from './pages/Error';
import AppRouter from './components/AppRouter';
import MyNavbar from './components/UI/Navbar/MyNavbar';

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <AppRouter />
    </BrowserRouter>
  )
}

export default App;
