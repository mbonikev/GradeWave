import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRouteStudent({ children }) {
  const [loggedIn, setLoggedIn] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInStatus = sessionStorage.getItem("loggedInStudent");
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

export default ProtectedRouteStudent;
