import React from 'react';
import { Redirect } from 'react-router-dom';

function ProtectedAuthStudent({ children }) {
  const loggedIn = sessionStorage.getItem('loggedInStudent') === 'true';

  if (!loggedIn) {
    return <Redirect to="/student_dashboard" />;
  }

  return <>{children}</>;
}

export default ProtectedAuthStudent;
