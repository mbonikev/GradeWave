import React from 'react';
import { Redirect } from 'react-router-dom';

function ProtectedRouteStudent({ children }) {
  const loggedIn = sessionStorage.getItem('loggedInStudent') === 'false' || null;

  if (!loggedIn) {
    return <Redirect to="/" />;
  }

  return <>{children}</>;
}

export default ProtectedRouteStudent;
