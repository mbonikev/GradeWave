import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRouteSchool({ children }) {
  const [loggedIn, setLoggedIn] = useState(null); // Track logged-in state
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInStatus = sessionStorage.getItem("loggedInSchool");
    setLoggedIn(loggedInStatus);
  }, []);

  useEffect(() => {
    if (loggedIn !== 'true') {
      navigate("/");
    }
  }, [loggedIn, navigate]);

  if (loggedIn === null) {
    return null;
  }

  if (loggedIn !== 'true') {
    return null;
  }

  return <>{children}</>;
}

export default ProtectedRouteSchool;
