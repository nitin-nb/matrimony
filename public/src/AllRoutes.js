import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Header from './components/Header';
import Signup from './pages/Signup';

const AppRoutes = () => {
  const location = useLocation();

  // Determine if the current path is login or signup
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <>
      {!isAuthPage && <Header />} {/* Render Header only if not on login or signup */}
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Add more routes here as needed */}
      </Routes>
    </>
  );
};

const AllRoutes = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default AllRoutes;
