import React from 'react';
import { Redirect } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const loggedIn = sessionStorage.getItem('loggedIn') === 'true';

  if (!loggedIn) {
    return <Redirect to="/" />;
  }

  return <>{children}</>;
}

export default ProtectedRoute;
