import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedAuthStudent({ children }) {
  const loggedIn = sessionStorage.getItem('loggedInStudent') === 'true';

  if (!loggedIn) {
    return <Navigate to="/student_dashboard" />;
  }

  return <>{children}</>;
}

export default ProtectedAuthStudent;
