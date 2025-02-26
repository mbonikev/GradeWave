import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedAuthStudent({ children }) {
  const loggedIn = sessionStorage.getItem("loggedInStudent");
  const navigate = useNavigate();
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    if (loggedIn === "true") {
      setRedirecting(true);
      navigate("/student_dashboard");
    }
  }, [loggedIn, navigate]);

  if (redirecting) {
    return null;
  }

  return <>{children}</>;
}

export default ProtectedAuthStudent;
