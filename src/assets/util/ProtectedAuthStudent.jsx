import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ProtectedAuthStudent({ children }) {
  const loggedIn = sessionStorage.getItem('loggedInStudent');
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn === 'true') {
      navigate("/student_dashboard");
    }
  }, [loggedIn, navigate]);

  return <>{children}</>;
}

export default ProtectedAuthStudent;
