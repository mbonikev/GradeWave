import React from 'react';
import {useNavigate } from 'react-router-dom';

function ProtectedAuthStudent({ children }) {
  const loggedIn = sessionStorage.getItem('loggedInStudent');
  const navigate = useNavigate()

  if (loggedIn === 'true') {
    return navigate("/student_dashboard");
  }

  return <>{children}</>;
}

export default ProtectedAuthStudent;
