import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRouteAdmin({ children }) {
  const loggedIn = sessionStorage.getItem("loggedInSchool");
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn !== 'true') {
      navigate("/");
    }
  }, [loggedIn, navigate]);

  if (loggedIn !== 'true') {
    return null;
  }

  return <>{children}</>;
}

export default ProtectedRouteAdmin;
