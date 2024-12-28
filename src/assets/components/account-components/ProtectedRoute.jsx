import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context-api/user-context/UserContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(UserContext);

  if (!user || !user.email) {
    // If user is not authenticated, redirect to login page
    return <Navigate to="/app/login" />;
  }

  // If user is authenticated, render the children components
  return children;
};

export default ProtectedRoute;