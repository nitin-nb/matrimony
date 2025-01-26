import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Header from './components/Header';
import Signup from './pages/Signup';
import ProfileDetails from './pages/ProfileDetails';

const AppRoutes = () => {
  const location = useLocation();

  // Function to determine the title based on the current path
  const getTitle = () => {
    switch (location.pathname) {
      case '/dashboard':
        return 'Dashboard';
      case '/profileDetails':
        return 'Profile Details';
      default:
        return 'Your Application Title'; // Default title
    }
  };

  return (
    <>
      {/* Conditionally render Header based on the current path */}
      {location.pathname !== '/login' && location.pathname !== '/signup' && (
        <Header title={getTitle()} />
      )}
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profileDetails" element={<ProfileDetails />} />
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
